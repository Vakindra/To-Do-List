import React, {useState} from 'react'

const UseStateComponent = () =>{
    const [num, setNum] = useState(0);
return
    <button onClick={()=>{setNum(num + 1);}}>click me {num}</button>


}

export default UseStateComponent;