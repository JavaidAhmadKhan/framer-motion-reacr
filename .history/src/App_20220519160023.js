class App extends <Component></Component> {
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
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default App;
