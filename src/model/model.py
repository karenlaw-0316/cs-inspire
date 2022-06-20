import numpy as np
import pandas as pd
import re
import string

from sklearn.decomposition import NMF
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD

import gensim
from gensim.parsing.preprocessing import STOPWORDS
from gensim import corpora, models
from gensim.utils import simple_preprocess

from nltk.stem.porter import PorterStemmer
import pickle

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import random



medium = pd.read_csv("pre-processed.csv", lineterminator='\n')

stop_list = STOPWORDS.union(set(['data', 'ai', 'learning', 'time', 'machine', 'like', 'use', 'new', 'intelligence', 'need', "it's", 'way',
                                 'artificial', 'based', 'want', 'know', 'learn', "don't", 'things', 'lot', "let\'s", 'model', 'input',
                                 'output', 'train', 'training', 'trained', 'it', 'we', 'don', 'you', 'ce', 'hasn', 'sa', 'do', 'som',
                                 'can']))

vectorizer = TfidfVectorizer(stop_words = stop_list, ngram_range = (1,1))
doc_word = vectorizer.fit_transform(medium['text'].values.astype('U'))


nmf = NMF(8)
docs_nmf = nmf.fit_transform(doc_word)

lda = pickle.load(open('model.pkl','rb'))

# Define column names for dataframe
column_names = ['title', 'url', 'allTags', 'readingTime', 'author', 'Tech',
                'Modeling', 'Chatbots', 'Deep Learning', 'Coding', 'Business',
                'Careers', 'NLP', 'sum']

# Create topic sum for each article. Later remove all articles with sum 0.
topic_sum = pd.DataFrame(np.sum(docs_nmf, axis = 1))

# Turn our docs_nmf array into a data frame
doc_topic_df = pd.DataFrame(data = docs_nmf)

# Merge all of our article metadata and name columns
doc_topic_df = pd.concat([medium[['title', 'url', 'allTags', 'readingTime', 'author']], doc_topic_df, topic_sum], axis = 1)

doc_topic_df.columns = column_names

# Remove articles with topic sum = 0, then drop sum column
doc_topic_df = doc_topic_df[doc_topic_df['sum'] != 0]

doc_topic_df.drop(columns = 'sum', inplace = True)

# Reset index then save
doc_topic_df.reset_index(drop = True, inplace = True)
# doc_topic_df.to_csv('tfidf_nmf_8topics.csv', index = False)
doc_topic_df.head()

topic_names = ['Tech', 'Modeling', 'Chatbots', 'Deep Learning', 'Coding', 'Business', 'Careers', 'NLP']
topic_array = np.array(doc_topic_df[topic_names])
norms = np.linalg.norm(topic_array, axis = 1)

def compute_dists(top_vec, topic_array):
    '''
    Returns cosine distances for top_vec compared to every article
    '''
    dots = np.matmul(topic_array, top_vec)
    input_norm = np.linalg.norm(top_vec)
    co_dists = dots / (input_norm * norms)
    return co_dists

def produce_rec(top_vec, topic_array, doc_topic_df, rand = 15):
    '''
    Produces a recommendation based on cosine distance.
    Rand variable controls level of randomness in output recommendation.
    '''
    # Add a bit of randomness to top_vec
    top_vec = top_vec + np.random.rand(8,)/(np.linalg.norm(top_vec)) * rand
    co_dists = compute_dists(top_vec, topic_array)
    return doc_topic_df.loc[np.argmax(co_dists)]
    
# tech = 5
# modeling = 5
# chatbots = 0
# deep = 0
# coding = 0
# business = 5
# careers = 0
# nlp = 0


# rec = produce_rec(top_vec, topic_array, doc_topic_df)
# print(rec)


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
async def get_rec(tech = random.randint(0,5), modeling = random.randint(0,5), chatbots=random.randint(0,5), deep=random.randint(0,5), coding=random.randint(0,5), business=random.randint(0,5), careers=random.randint(0,5), nlp=random.randint(0,5)):
    top_vec = np.array([tech, modeling, chatbots, deep, coding, business, careers, nlp])
    return produce_rec(top_vec, topic_array, doc_topic_df)
