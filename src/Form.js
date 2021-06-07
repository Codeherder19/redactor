import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      replacementText: 'XXXX',
      documentText: '',
      userInput: '',
    };
  }

    handleValueChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  redactDocument = (event) => {
    let newDocument = this.state.documentText
    let quoteRegex = new RegExp(/(["].*?["]|['].*?[']|[^ |,]+)/, 'ig')
    let match = this.state.userInput.match(quoteRegex)
    console.log(match)
    match.forEach(item => {
      let updatedString = item.replace(/"/g,"")
      newDocument = newDocument.replace(updatedString, this.state.replacementText)
    })
    console.log(newDocument)
    this.props.updateDoc(event, newDocument)
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
        placeholder='Original Document'
        title='Document'
        value={this.state.documentText}
        onChange={e => this.handleValueChange(e)}
      />
      <div className='button-container'>
      <button className='submit-button' type='submit' onClick={(event) => this.redactDocument(event)}>Submit
      </button>
      </div>
    </div>
  </form>
)
}
}


  export default Form;
