import React, {Component} from "react";

class Horloge extends Component{
    state ={
        date: new Date(),
        compteur:1
    }
    tictac =() =>{
        this.setState((oldState) =>{
            return {
                date : new Date(),
                compteur : oldState.compteur + 1
            }
        })
    }
    componentDidMount(){
        setInterval(() => this.tictac(), 1000);
    }
    render(){
        return(
            <>
            <h1>Horloge : {this.state.date.toLocaleTimeString()}</h1>
            <div> Compteur : {this.state.compteur}</div>
            </>
        )
    }
}
export default Horloge;