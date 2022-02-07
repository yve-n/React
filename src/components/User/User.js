import React, {Component} from "react";

class User extends Component{
    render(){
        const myStyle ={ backgroundColor: "green", color: "white"};
        myStyle.fontSize= "20px";
        return(
            <>
            <h1>Nom : {this.props.firstName} - 
                    {this.props.lastName}</h1>
                    {this.props.children}
            <div style={myStyle}> sexe: {this.props.sexe ? "Homme": "Femme"}</div>
            </>
        )
    }
}
export default User;