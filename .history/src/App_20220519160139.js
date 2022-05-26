import { Component } from "react";

import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Javaid",
      age: 30,
      address: {
        city: "Lahore",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <p>{this.state.address}</p>
      </div>
    );
  }
}

export default App;
