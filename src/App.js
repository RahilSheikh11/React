// const heading = React.createElement("h2",{id : "heading"},"Welcome to React!");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);App.js

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// // This is React element
// const Heading = <h1> React element is here </h1>;

// // This is Functional component.
// const HeadingComponent = () => <h1> This is functional component </h1>;

// //This is also another way to write functional component.
// // This is also Component composition where we are using one component inside another component.
// const Heading2 = () => (
//      <div id="container">
//         <HeadingComponent/>
//     <h1 className="heading"> This is another way to write functional component</h1>
//     </div>
// );


// // const heading = React.createElement("h1",{id: "heading"}, "Namaste React.JS 🚀🚀");
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // const jsx=<h1 id="heading"> Namaste react to Dubai</h1>
// // console.log(jsx);
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading2/>); 









const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);








