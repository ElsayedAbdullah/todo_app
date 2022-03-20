import React, { Component } from "react";

class ListingUser extends Component {
  state = {
    registerUser: "",
    loginUser: "",
    isRegistered: false,
    isLogged: false
  };

  handleRegisterChange = e => {
    this.setState({
      registerUser: e.target.value
    });
  };

  handleLoginChange = e => {
    this.setState({
      loginUser: e.target.value
    });
  };

  handleRegisterSubmit = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.registerUser);
    this.setState({
      isRegistered: true
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    let loginUser = this.state.loginUser;
    let savedUser = localStorage.getItem("user");
    if (loginUser == savedUser) {
      this.setState({
        isLogged: true
      });
    } else {
      console.log("Error");
    }
  };

  renderRegisterForm = () => {
    return (
      <form className="form" onSubmit={this.handleRegisterSubmit}>
        <input type="text" placeholder="register user" onChange={this.handleRegisterChange} value={this.state.registerUser} />
        <button className="btn btn-violet" type="submit">
          Register
        </button>
      </form>
    );
  };

  renderLoginForm = () => {
    return (
      <form className="form" onSubmit={this.handleLoginSubmit}>
        <input type="text" placeholder="login user" onChange={this.handleLoginChange} value={this.state.loginUser} />
        <button className="btn btn-violet" type="submit">
          Login
        </button>
      </form>
    );
  };

  render() {
    return (
      <div className="app-wrapper">
        <h1>Listing User</h1>
        {this.state.isLogged ? <div>Congrats🥳 you are logged in</div> : this.state.isRegistered ? this.renderLoginForm() : this.renderRegisterForm()}
      </div>
    );
  }
}

export default ListingUser;
