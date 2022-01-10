import { useState } from "react";

const App = () => {  
    const [age, setAge] = useState(3);
    const [name, setname] = useState('Amel');

setTimeout(() => {
    setAge(4);
}, 3000);
const handleChangeName = (event, id) =>{
    console.log(id);
    setname('Noam');
}
return (
    <>
        <button onClick={(event)=>handleChangeName(event, 1)}>change name</button>
        <h4>Hello {name} a {age} ans</h4>
    </>
)

}

export default App;