import React from "react";
import "./displayInfo.scss";

// class DisplayInfo extends React.Component {
//     constructor(props) { // Ham sontructor chay truoc ca render
//         console.log("call me constructer");
//         super(props);
//         this.state = {
//             showListUser: true
//         }
//     }
//     handleShowHide = () => {
//         this.setState({
//             showListUser: !this.state.showListUser
//         })
//     }
//     componentDidMount() {
//         console.log("call me component did mount")
//         setTimeout(() => {
//             document.title = "Thien"
//         })
//     }
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("call me component did update", this.props, prevProps)

//     }


//     render() {
//         console.log("call me rander")

//         //sẽ tự động truyền từ thuộc tính bên cha sang con
//         // tạo thành 1 biến object
//         //props => viet tat cua properties

//         // template + logic js
//         const { listUsers } = this.props

//         return (
//             <div className="display-info-user">
//                 {/* <img src={logo} /> */}
//                 <div>
//                     <span onClick={() => { this.handleShowHide() }} >
//                         {this.state.showListUser ? "Hide list user" : "Show"}
//                     </span>
//                 </div>
//                 {this.state.showListUser &&
//                     <>
//                         {listUsers.map((user) => {
//                             return (
//                                 <React.Fragment key={user.id
//                                 }>
//                                     <div className={user.age > 18 ? "green" : "red"} >
//                                         <div>My id {user.id}</div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age {user.age}</div>
//                                     </div>
//                                     <button onClick={(event) => { this.props.removeUser(user.id) }} className="red">X</button>
//                                     <hr />
//                                 </React.Fragment>
//                             )
//                         })}
//                     </>
//                 }

//             </div>
//         )
//     }
// }
const DisplayInfo = (props) => {

    // template + logic js
    const { listUsers } = props

    return (
        <div className="display-info-user">
            {/* <img src={logo} /> */}
            {true &&
                <>
                    {listUsers.map((user) => {
                        return (
                            <React.Fragment key={user.id
                            }>
                                <div className={user.age > 18 ? "green" : "red"} >
                                    <div>My id {user.id}</div>
                                    <div>My name's {user.name}</div>
                                    <div>My age {user.age}</div>
                                </div>
                                <button onClick={(event) => { props.removeUser(user.id) }} className="red">X</button>
                                <hr />
                            </React.Fragment>
                        )
                    })}
                </>
            }

        </div>
    )
}

export default DisplayInfo;