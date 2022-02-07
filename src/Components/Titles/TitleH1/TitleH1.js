import React from 'react';
import classes from './style.module.css';

const titleH1 = (props)=>{
    const myCss = `${classes.titlePolice} bg-primary border border-dark p-2 mt-2 text-center rounded`;
    return <h1 className={myCss}>{props.children}</h1>
}

export default titleH1;