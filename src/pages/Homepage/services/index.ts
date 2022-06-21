import { auth, db } from "../../../firebase";
import { collection, addDoc, doc, getDocs, DocumentData, updateDoc } from "firebase/firestore";

export const getDiscussions = async () => {
    let result: DocumentData[] = []
    const discussionRef = await getDocs(collection(db, "discussions"));
    discussionRef.forEach((doc) => {
    result.push({id: doc.id,  ...doc.data()})
    });
    return result
}

export const addDiscussions = async (title: string, comments: string) => {
    const docRef = await addDoc(collection(db, "discussions"), {
        title: title,
        comments: comments.length === 0 ? [] : [{userName:"Karen Law", avatar: "UserAvatar", content:comments}]
    });
}

export const addComment = async (id: string, comments: string) => {
    const docRef = doc(db, "discussions", id);
    await updateDoc(docRef, {
        "comments": comments,
    });
    
}