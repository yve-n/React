import { useEffect, useState } from "react";
const Home = () => {
    const [name, setName] = useState('yve');
    const [isYve, setIsYve]= useState(false);

    useEffect(()=>{
        setName(name === 'Yve' ? 'Amel' : 'Yve');
    },[isYve]);

    return <h3 onClick={()=>{setIsYve(!isYve)}}>{name}</h3>
}
export default Home;
