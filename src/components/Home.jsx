import { useEffect, useState } from "react";
import {persons} from '../data';
const Home = () => {

    const [name, setName] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/profile')
    .then(response => response.json())
    .then(profile => setName(profile.name))
    .catch(error =>console.error(error));
    },[]);
    
    // const [isYve, setIsYve]= useState(false);
    // const [isAmel, setAmel] = useState(true);

    // const [ps, setPersons] = useState([]);

    // useEffect(()=>{
    //     setName(name === 'Yve' ? 'Amel' : 'Yve');
    // },[isYve]);

    // useEffect(()=>{
    //     setPersons(persons);
    // },[]);

    return (
        <>
            {/* {ps.map(person=> <p key={person.age}>{person.name}</p>)}
            <h3 onClick={()=>{setIsYve(!isYve)}}>{name}</h3> */}
            { <h2>Hello {name}</h2>}
        </>
    )
}
export default Home;
