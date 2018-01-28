import React, { Component } from 'react';
import FileUpload from './components/fileUpload/fileUpload'
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">UI/UX for LIME and surrogate model</h1>
        </header>
        <p className="App-intro">
          <FileUpload />
        </p>
      </div>
    );
  }
}

export default App;
