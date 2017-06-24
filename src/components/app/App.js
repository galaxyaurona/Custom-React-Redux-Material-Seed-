import React, { Component } from 'react';
import images, {logo} from "../../images";

import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from "material-ui/RaisedButton"
class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React 2</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <RaisedButton label="Click me" onTouchTap={console.log}></RaisedButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
