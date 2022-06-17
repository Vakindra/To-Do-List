import React from "react";
const ToDoDeleteItem = (props)=>{
    
    return(
        <div>
            <i onClick={()=>{
                props.onSelect1(props.id)
            }}>xx</i>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoDeleteItem;
