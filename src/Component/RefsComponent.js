import { react } from "@babel/types";
import React from 'react'
class RefsComponent extends React.Component{
constructor(props){
    super(props);
    this.state = {
        data:""
    }
    this.textValue = React.createRef();
}
updateData = (e) =>{
    this.setState({
        data: e.target.value
    })
};
clearButton = ()=>{
    this.setState({
        data: ""
    })
    this.textValue.current.focus();
}

render(){
    return(
        <div>
        <input ref={this.textValue} value={this.state.data} onChange={this.updateData} />
        <button onClick={this.clearButton}>clear!!</button>
        <h1>{this.state.data}</h1>
        </div>
    )
}

}
export default RefsComponent;