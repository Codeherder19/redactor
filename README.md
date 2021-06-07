# Redactor

## Overview
This application was a technical challenge given to me as part of the interview process for a position at Meltwater. The application's purpose is to take a document and replace instances of keywords and/or phrases with XXXX. To use this application, you may begin by typing keywords and phrases in the first input. Phrases should be wrapped in double quotes. Phrases and keywords may be separated either by commas, or spaces. Next, type in a document text in the box that contains some of the keywords and phrases you wish to redact. When you click the submit button, you should see an updated document with the keywords and phrases replaced with XXXX.

Example:

Keywords and Phrases: "Peter Piper", "pickled peppers", purple, patch, people

Document text: Peter Piper picked a pack of pickled peppers while pacing through a patch of purple people eaters.

Redacted document: XXXX picked a pack of XXXX while pacing through a XXXX of XXXX XXXX eaters.

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Tests were done using Cypress.io.

## Architecture

Redactor is built with React and is controlled by three main JavaScript files: 
  - ```App.js``` contains all other elements
  - ```Form.js``` displays the input and textarea elements where a user can type in keywords and phrases, and a document text, respectively.
  - ```RedactedDoc.js``` displays the original document with instances of keywords and phrases each replaced with XXXX when the submit button is clicked.

## Getting Started
### Clone this repo
run ```git clone git@github.com:Codeherder19/redactor.git```
### Install dependencies
run ```npm install```
### Start your application
run ``` npm start```
### Open application
Navigate to ```localHost:3000```

## Contributors
[Brian Forbes](https://github.com/Codeherder19)

## Future Iterations
- Modify regex statement to match phrases between single quotes as well as double quotes
- Account for case sensitivity of keywords and phrases
- Add more CSS styling
- Refactor code so the reset button returns you to the Form component without clearing the user inputs.
