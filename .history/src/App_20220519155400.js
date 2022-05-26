import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      error: null
    };
  }

  render() {
    return <div className="App"></div>;  
  }

  
}

export default App;
