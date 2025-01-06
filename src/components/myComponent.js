// class component
import React from "react";
import AddUserinfo from "./addUserInfo";
import DisplayInfo from "./displayInfo";
class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "thien", age: 20 },
            { id: 2, name: "han", age: 21 },
            { id: 3, name: "hehe", age: 10 },
        ]
    }
    handleAddNewUser = (userObject) => {
        // Them 1 user vao state
        console.log("user them:", userObject)
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]

        })
    }
    // JSX
    render() {
        // DRY : don't repeat youseft
        return (
            <div>
                <AddUserinfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfo
                    listUsers={this.state.listUsers}

                />
            </div>

        )
    }
}
export default MyComponent;
// function component