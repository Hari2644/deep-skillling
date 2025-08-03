import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: '',
    };
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    this.sayHello();
  };

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayHello = () => {
    console.log("Hello! Counter increased.");
    this.setState({ message: "Hello! Counter increased." });
  };

  sayWelcome = (msg) => {
    alert(`You said: ${msg}`);
  };

  handleClick = (e) => {
    alert("I was clicked");
    console.log("Synthetic event:", e);
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Examples</h1>

        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>{this.state.message}</p>

        <hr />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleClick}>Synthetic Event (OnPress)</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
