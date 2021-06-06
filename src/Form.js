import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      replacementText: 'XXXX',
      documentText: '',
      userInput: '',
      editedDoc: '',
    };
  }

    handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

render() {
  return (
  <form>
    <div className='input-container'>
      <h2>Redactions:</h2>
      <input
        className='userInput'
        name='userInput'
        type= 'text'
        placeholder='Keywords and phrases to redact'
        title='Keywords and phrases to redact'
        value={this.state.userInput}
        onChange={e => this.handleValueChange(e)}
      />
      <h3>Original Document:</h3>
      <textarea
        className='document'
        name='documentText'
        type= 'text'
        title='Document'
        value={this.state.documentText}
        onChange={e => this.handleValueChange(e)}
      />
    </div>
  </form>
)
}

}


  export default Form;
