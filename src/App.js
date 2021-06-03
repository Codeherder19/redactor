import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Form from './Form.js'

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
      <Form />
    </div>
  );
}
}

export default App;
