import { react } from "@babel/types";
import { render } from "@testing-library/react";
import React from "react"

class UserComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>User</h1>
            </div>
        )
    }

}

export default UserComponent;