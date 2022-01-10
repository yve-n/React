import React , {Component} from 'react';
import ReactDom from 'react-dom';

// function Person(){
//     let name = 'yves';
//     return (
//     <>
//         <h1>je suis </h1>
//         <h2>{name}</h2>
//     </>
//     )
// }

// class Person extends Component{
//     name = 'noam';
//     render(){
//         return(
//             <>
//             <h2>{this.name}</h2>

//             </>
//         )
//     }
// }

ReactDom.render(<Person />, document.getElementById('root'));
