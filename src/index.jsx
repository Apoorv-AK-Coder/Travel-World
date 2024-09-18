import ReactDOM from "react-dom/client";
import React from 'react';

import App from "./App.jsx";
import AboutApp from "./AboutApp.jsx";
import './css/style.css';
import './css/index.css';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// ReactDOM.createRoot(entryPoint).render(<AboutApp />);