import React, { useState } from "react";
import ToDoDeleteItem from "./ToDoDeletItem";

const ToDoList = () =>{
    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
    
    const inputEvent = (event)=>{
        setInputList(event.target.value)

    }
    const AddItem = ()=>{
        setItems((oldval)=>{
            return [...oldval, inputList];
        });
        setInputList('');
    }

    
    const deletItem = (id)=>{
        setItems((oldItem)=>{
            return oldItem.filter((errItem, index)=>{
                return index !== id;
            })
        })
    }

    return(
    <>
        <h1>To Do List</h1>
        <br/>
        <input type="txt" placeholder="Add a items" value={inputList} onChange={inputEvent} />
        <button onClick={AddItem}>Add</button>

        <ol>
           { items.map((itemvalue, index)=>{
                return (<>
                <ToDoDeleteItem text={itemvalue} key={index} id={index}
                 onSelect1 = {deletItem}/>
                 </>
                 )
            }) }           
        </ol>

    </>
)
}

export default ToDoList;