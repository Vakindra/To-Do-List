import { react } from "@babel/types";
import React from "react"

class SecondComponent extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }

render(){
    return(
        <div>
            <button onClick={this.props.additionButton}>Click me!!</button>
            <p>{this.props.myage}</p>
            <p>{this.props.myheight}</p>
            <p>{this.props.myvalue}</p>
        </div>
    )
}

}

export default SecondComponent