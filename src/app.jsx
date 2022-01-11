import { useState } from "react";

const App = () => {  
    const names =['noam', 'amel','yve'];
    

    let [currentActive, setCurrentActive] = useState(0);
    const ChangeColor = () =>{
        if(currentActive === names.length - 1){
            setCurrentActive(0);
            return;
        }
        setCurrentActive(currentActive + 1);

    }
   
    

return (
    <>
        <button onClick={ChangeColor}>select next name</button>
       <ul style={{backgroundColor:'aqua'}}>
           {names.map((name,index) =><li 
           style ={{backgroundColor :currentActive ===index ?'blue' : "transparent"}}
           key={index} >{name}</li>)}
       </ul>
       
        
    </>
)

}

export default App;