import React from "react";

import ReactDOM from "react-dom/client";

import Head from '../src/component/Header';

let element =document.getElementById("container");

let rootelement =ReactDOM.createRoot(element);

rootelement.render(<Head/>)