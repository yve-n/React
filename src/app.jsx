import { useState } from "react";

const App = () => {  
    const names =['noam', 'amel','yve'];

return (
    <>
        <button>select next name</button>
       <ul style={{backgroundColor: 'aqua'}}>
           {names.map((name,index) =><li key={index}>{name}</li>)}
       </ul>
    </>
)

}

export default App;