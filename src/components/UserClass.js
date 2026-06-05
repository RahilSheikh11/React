import React from "react";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(props.name);
    }
    render() {
    const {name, location} = this.props;
        return (

    <div className="usercard">
        <h1>Name :{name}</h1>
        <h2> Location : {location}</h2>
        <h3> Profession : Developer</h3>
    </div>  
    );
    }
}

export default UserClass;