import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      error: null,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
