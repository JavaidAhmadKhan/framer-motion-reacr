import { Component } from "react";

import "./App.css";
class App extends Component {
  constructor() {
    console.log("constructor");
    super();
    console.log("super");
    this.state = {
      name: "Javaid",
      age: 30,
      profession: "Software Engineer",
      address: {
        city: "Srinagar",
        pincode: "190001",
      },
    };
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <table>
          <th>Name</th>
          <th>Age</th>
          <th>Profession</th>
          <th>City</th>
          <th>Pincode</th>
          <td>
            <h2>{this.state.name}</h2>
          </td>
          {/* <h2>{this.state.profession}</h2>
          <h2>{this.state.address.city}</h2>
          <h2>{this.state.address.pincode}</h2> */}
        </table>
      </div>
    );
  }
}

export default App;
