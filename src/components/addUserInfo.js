import React from "react";
class addUserinfo extends React.Component {
    state = {
        id: 0,
        name: "",
        age: 0
    }
    handleClick(id, name, age) {
        this.props.handleAddNewUser({
            id: id,
            name: name,
            age: age
        });
    }
    // handleClick = (event) => {
    //     console.log("My name is", this.state.name)
    // }

    handleOnMoverOver() {
        console.log("xin chao")
    }
    handleOnchangeName(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnchangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("HELLO", this.state.name)
    }
    render() {
        return (
            <div>
                My name is {this.state.name}, i'm {this.state.age} year old

                {/* <button onMouseOver={this.handleOnMoverOver}>on moverver</button> */}
                <form onSubmit={(event) => { this.handleSubmit(event) }}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchangeName(event)}
                    />
                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button onClick={(event) => { this.handleClick(this.state.id = Math.floor((Math.random() * 10) + 1) + "-random", this.state.name, this.state.age) }}>on click</button>
                </form>
            </div>
        )
    }
}
export default addUserinfo;