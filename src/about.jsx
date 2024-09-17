import ReactDOM from "react-dom/client";
import React from 'react';

import AboutApp from "./AboutApp.jsx";
import './css/style.css';
import './css/index.css';

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<AboutApp />);