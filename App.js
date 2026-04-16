// const heading = React.createElement("h2",{id : "heading"},"Welcome to React!");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", 
    {id: "Parent"},
    React.createElement("div",{id: "child"}, [
     React.createElement("h1",{key: "1", 
    id: "Child"},"I am Namaste React 🚀" ),
    React.createElement("h6",{key: "2" ,
    id: "Child2"},"I am child2" )
    ,
    React.createElement("h6", {key: "3",
    id: "Child3"},["I am child3", "11" ,"22","33"])
    
     ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);