// const heading = React.createElement("h2",{id : "heading"},"Welcome to React!");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);App.js

import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import Cart from "./components/Cart";


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
        <Provider store={AppStore}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </Provider>
    );

};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [ {

        path : "/",
        element : <Body/>,
        errorElement : <Error/>,
        },

        {

        path : "/about",
        element : <About/>,
        errorElement : <Error/>,
    },
    {
        path : "/contact",
        element : <Contact/>,
        errorElement : <Error/>,
    },
    {
        path : "/restaurant/:resid",
        element : <RestaurantMenu/>,
        errorElement : <Error/>,
    },
     {
        path : "/cart",
        element : <Cart/>,
        errorElement : <Error/>,
    },
],
     errorElement : <Error/>,

    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);








