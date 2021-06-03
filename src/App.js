import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      replacementText: 'XXXX',
      documentText: '',
      userInput: '',
      editedDoc: '',
  }
}

  render() {
    return (
    <div className="App">
      <header>
        <h1>REDACTOR</h1>
      </header>
    </div>
  );
}
}

export default App;
