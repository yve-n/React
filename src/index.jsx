import React from 'react';
import ReactDom from 'react-dom';

function Person(){
    let name = 'yves';
    return <h2>{name}</h2>
}

console.log(Person());
ReactDom.render(<Person />, document.getElementById('root'));
