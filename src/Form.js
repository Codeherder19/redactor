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
    <input
      type= 'text'
      placeholder='Keywords and phrases to redact'
      title='Keywords and phrases to redact'
    />
    <input
      type= 'text'
      placeholder='Document'
      title='Document'
    />
  </form>
)
}

}


  export default Form;
