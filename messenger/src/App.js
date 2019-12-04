<<<<<<< HEAD
import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
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
>>>>>>> 84e7cb1164c75153361235263d8644abf592d8e9
}

export default App;
