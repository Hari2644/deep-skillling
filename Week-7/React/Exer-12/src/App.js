import React, { Component } from 'react';
import './App.css';
import Guest from './Guest';
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;
    let button;

    if (this.state.isLoggedIn) {
      page = <User />;
      button = <button onClick={this.logout}>Logout</button>;
    } else {
      page = <Guest />;
      button = <button onClick={this.login}>Login</button>;
    }

    return (
      <div className="App">
        <h1>Ticket Booking App</h1>
        {button}
        <hr />
        {page}
      </div>
    );
  }
}

export default App;
