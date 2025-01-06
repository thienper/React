import React from "react";
import "./displayInfo.scss";

class DisplayInfo extends React.Component {
    state = {
        showListUser: true
    }
    handleShowHide = () => {
        this.setState({
            showListUser: !this.state.showListUser
        })
    }
    render() {
        //sẽ tự động truyền từ thuộc tính bên cha sang con
        // tạo thành 1 biến object
        //props => viet tat cua properties
        const { listUsers } = this.props
        console.log("List user: ", listUsers)
        return (
            <div className="display-info-user">
                <div>
                    <span onClick={() => { this.handleShowHide() }} >
                        {this.state.showListUser ? "Hide list user" : "Show"}
                    </span>
                </div>
                {this.state.showListUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div className={user.age > 18 ? "green" : "red"} >
                                    <div>My id {user.id}</div>
                                    <div>My name's {user.name}</div>
                                    <div>My age {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }

            </div>
        )
    }
}
export default DisplayInfo;