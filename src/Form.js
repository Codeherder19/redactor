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

render() {
  return (
  <form>
    <div className='input-container'>
      <h2>Redactions:</h2>
      <input
        className='userInput'
        type= 'text'
        placeholder='Keywords and phrases to redact'
        title='Keywords and phrases to redact'
      />
      <h3>Original Document:</h3>
      <input
        className='document'
        type= 'text'
        title='Document'
      />
    </div>
  </form>
)
}

}


  export default Form;
