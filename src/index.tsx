import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Homepage from "../src/pages/Homepage";
import Register from "../src/pages/Register";
import SignIn from "../src/pages/SignIn";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Register />} />
				<Route path="home" element={<Homepage />} />
				<Route path="login" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
