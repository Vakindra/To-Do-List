import React from "react"

class LifeCycleComponent extends React.Component{
        constructor(){
            super();
            console.log("constructor")
        }
        componentWillMount(){
            console.log("willmount");
        };
        componentDidMount(){
            console.log("didmount")
        }
        render(){
            console.log("render")
            return(
                <div>
                <p>Life Cycle</p>
                </div>
            )
        }

}

export default LifeCycleComponent