import React from "react";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(props.name);
        
        this.state = {
        userInfo : {
            name : "dummy",
            location : "No where to be found",
            id : "00",
            avatar_url : "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Picture.png"

        },    
        }
    }
    async componentDidMount() {
            
        const data = await fetch("https://api.github.com/users/RahilSheikh11");
        const json = await data.json();
       
        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render() {
    const {name, location, id, avatar_url} = this.state.userInfo;
   
        return (
<div className="usercard">
        <img src={avatar_url} />
        <h1>Name :{name}</h1>
        <h2> Location : {location}</h2>
        <h3> Profession : Developer</h3>
        <h4> ID : {id}</h4>

    </div>  
    );
    }
}

export default UserClass;