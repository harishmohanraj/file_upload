import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import FileUpload from './components/fileUpload/fileUpload'
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">UI/UX for LIME and surrogate model</h1>
    </header>
    <p className="App-intro">
      <main>
        <Route exact path="/" component={FileUpload} />
      </main>
    </p>
  </div>
)


export default App;
