import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor({ name }:props) {
    super(props);
    this.state = {
      name: "Javaid",
      age: 29,
      profession: "Software Engineer",
    };
  }

  render() {
    return (
      <div className="App">
        <h1>{name}</h1>
      </div>
    );
  }
}

export default App;
