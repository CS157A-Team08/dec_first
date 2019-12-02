//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    //Call fetch function below once component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }

    //Fetches the GET route from the Express server.
    //route being fetched matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/allrest');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        //Render the newly fetched data inside of this.state.Database
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }

}


export default App;
