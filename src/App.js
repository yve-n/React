import React, {Component} from 'react';
import Horloge from './containers/Horloge/Horloge.js';
import User from './components/User/User.js';
import UserAge from './components/User/UserAge/UserAge.js';
class App extends Component {
  state = {
    users: [
      { id:1,
        firstName:"john", 
        lastName:"doe",
        age:31,
        sexe:true
      },
      { id:2,
        firstName:"Angela", 
        lastName:"hopkins",
        age:23,
        sexe:false
      },
      { id:3,
        firstName:"linda", 
        lastName:"dion",
        age:32,
        sexe:false
      },
      { id:4,
        firstName:"ali", 
        lastName:"baba",
        age:40,
        sexe:true
      },
      { id:5,
        firstName:"nao", 
        lastName:"baba",
        age:40,
        sexe:true
      }
    ]
  }

  render(){
    return (
      <>
      <Horloge />
      {this.state.users.map(user=>{
        return(
          <User {...user}><UserAge age={user.age}/></User>
        )
      })}
      {/* <User 
      firstName={this.state.users[0].firstName}
      lastName={this.state.users[0].lastName}
      sexe = {this.state.users[0].sexe}> 
      {this.state.users[0].age}
      </User>

      <User 
      firstName={this.state.users[1].firstName}
      lastName={this.state.users[1].lastName}
      sexe = {this.state.users[1].sexe}> 
      {this.state.users[1].age}
      </User>

      <User {... this.state.users[2]}> {this.state.users[2].age}</User> */}
      </>
    );
  }
}

export default App;
