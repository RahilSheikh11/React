// const heading = React.createElement("h2",{id : "heading"},"Welcome to React!");
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading = React.createElement("h1", 
    {id: "Parent"},[
     React.createElement("h6", 
    {id: "Child"},"I am child" ),
    React.createElement("h6", 
    {id: "Child2"},"I am child2" )
    ,
    React.createElement("h6", 
    {id: "Child3"},["I am child3", "11" ,"22","33"])
    
     ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);