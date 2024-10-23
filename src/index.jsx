// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import React from 'react';
import NewApp from "./newApp.jsx";

// import AboutApp from "./AboutApp.jsx";
import './css/style.css';
import './css/index.css';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<NewApp />);
// ReactDOM.createRoot(entryPoint).render(<AboutApp />);