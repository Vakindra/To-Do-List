import React from 'react'

class FormComponent extends React.Component{
constructor(props){
    super(props);

    this.state={
        username:"",
        password:""
    }
}
updateValue = (e) =>{
this.setState({
    [e.target.name]: e.target.value
})
}

    render(){
        return(
            <div>
            <label>username</label><br/>
            <input type="text" name="username" value={this.state.username} onChange={this.updateValue} />
            <label>password</label><br/>
            <input type="text" name="password" value={this.state.password} onChange={this.updateValue} />
            <p>{this.state.username}</p>
            <p>{this.state.password}</p>
            </div>
        )
}
}

export default FormComponent;