import './App.css';
import Form from './Form.js'
import {Component} from 'react'
import RedactedDoc from './RedactedDoc'

class App extends Component {
  constructor() {
    super();
    this.state = {
      redactedDoc: '',
    };
  }

  updateDoc = (event, value) => {
    event.preventDefault()
    this.setState({redactedDoc: value});
}

  render() {
    return (
      <div className="App">
        <header>
          <h1>REDACTOR</h1>
        </header>
        {!this.state.redactedDoc &&
        <Form updateDoc={this.updateDoc}/>}
        {this.state.redactedDoc &&
        <form className='output-container'>
          <RedactedDoc text={this.state.redactedDoc}/>
          <button className='reset-button' onClick={() => this.setState({redactedDoc: ''})}>Reset</button>
        </form>
        }
      </div>
    );
  }
}


export default App;
