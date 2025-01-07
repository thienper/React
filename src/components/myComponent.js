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
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]

        })
    }
    removeUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id != userId)
        this.setState({ listUsers: listUsersClone })

    }
    // JSX
    render() {
        const object = {
            name: "thien",
            age: 20
        }

        // DRY : don't repeat youseft
        return (
            <>
                {/* cach in bien object */}
                {/* {JSON.stringify(object)} */}
                <AddUserinfo
                    handleAddNewUser={this.handleAddNewUser}
                />
                <DisplayInfo
                    listUsers={this.state.listUsers}
                    removeUser={this.removeUser}

                />
            </>

        )
    }
}
export default MyComponent;
// function component