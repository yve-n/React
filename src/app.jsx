import { useState } from "react";

const App = () => {  
    const names =['noam', 'amel','yve'];

return (
    <>
       <ul style={{backgroundColor: 'red'}}>
           {names.map((name,index) =><li key={index}>{name}</li>)}
       </ul>
    </>
)

}

export default App;