import React, { Component } from "react"
import SecondComponent from "./SecondComponent";

class FirstComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"Tanu",
            value:10,
            }
    }
    onButtonClick = () =>{
        this.setState({
            value: this.state.value + 10
        })
    }
    render(){
        return(
            <div>
                {/* <button onClick={this.onButtonClick}>Click me</button> */}
                <p>{this.state.name}</p>
                <p>{this.state.value}</p>
                <p>{this.props.age}</p>
                <p>{this.props.height}</p>
                <SecondComponent myage={this.props.age} myheight={this.props.height} myvalue = {this.state.value} additionButton ={this.onButtonClick}/>
            </div>
        )
    }
}
FirstComponent.defaultProps = {
    age: 33,
    height: 125
}
export default FirstComponent