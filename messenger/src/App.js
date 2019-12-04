import React, { Component } from "react";
import Login from "./components/Login";
import openSocket from "socket.io-client";
const socket = openSocket("localhost:9090");

class App extends Component {
  state = {
    username: "",
    avatar: "",
    users: [{ username: "Mary" }, { username: "palceholder" }],
    messages: []
  };
  componentDidMount() {
    socket.emit("connect");
    socket.on("users", reply => {
      const { users, messages } = reply;
      this.setState({ users, messages });
    });
  }

  handleLogin = event => {
    const { username, avatar } = user;
    this.setState({ username, avatar }, () => {
      console.log(this.state);
    });
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <Login users={users} handleLogin={this.Login} />
      </div>
    );
  }
}

export default App;
