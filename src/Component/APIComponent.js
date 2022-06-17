import React from "react";
import reactDom from "react-dom";

class APIComponent extends React.Component{

    updateComponent = () =>{
        this.forceUpdate();
    };

    findmynode =()=>{
        reactDom.findDOMNode(document.getElementById("node")).style.color="red";
    }

    render(){
         return(

        <div>
            <button onClick={this.updateComponent}>Click me!!</button>
            <p>Random: {Math.random()}</p>
            <button onClick={this.findmynode}>Click me</button>
            <p id="node">Node</p>
        </div>
    )
}
}

export default APIComponent