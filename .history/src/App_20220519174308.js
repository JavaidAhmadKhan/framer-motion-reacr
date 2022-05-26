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
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
            <th>City</th>
            <th>Pincode</th>
          </tr>
          <tr>
            <td>{this.state.name}</td>
            <td>{this.state.age}</td>
            <td>{this.state.profession}</td>
            <td>{this.state.address.city}</td>
            <td>{this.state.address.pincode}</td>
          </tr>
          <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
        </table>
      </div>
    );
  }
}

export default App;
