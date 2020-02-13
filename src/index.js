import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const myLists = ['A', 'B', 'C', 'D', 'D'];   

const rootElement = document.getElementById("root");
ReactDOM.render(  <App myLists={myLists} />,  , rootElement);

