describe('User Testing', () => {
const baseUrl = 'http://localhost:3000';

beforeEach(() => {
  cy
  .visit(baseUrl);
});

it('should have a header with a title', () => {
  cy
  .get('h1').contains('REDACTOR')
})

it('should have headings above each user input', () => {
  cy
  .get('h2').contains('Redactions:')
  cy
  .get('h3').contains('Original Document:')
})

it('user should be able to view input fields for keywords and phrases, and original document', () => {
  cy
  .get('input').should('have.attr', 'placeholder', 'Keywords and phrases to redact')
  cy
  .get('textarea').should('have.attr', 'placeholder', 'Original Document')
})

it('should display a document with redacted text after both inputs are filled out and submit button is clicked', () => {
  cy
  .get('input').type(`Hello world, "Boston Red Sox", "Patrick O'Boyle"`)
  .should('have.value', `Hello world, "Boston Red Sox", "Patrick O'Boyle"`)
  cy
  .get('textarea').type(`Hello Patrick O'Boyle. As a red blooded American, I believe that the Boston Red Sox are the best baseball team in the world.`)
  .should('have.value', `Hello Patrick O'Boyle. As a red blooded American, I believe that the Boston Red Sox are the best baseball team in the world.`)
  cy
  .get('.submit-button')
  .click()
  cy
  .get('h2').contains('Redacted Document:')
  cy
  .get('p').contains('XXXX XXXX. As a red blooded American, I believe that the XXXX are the best baseball team in the XXXX.')
})

it('should return to form component with empty inputs after reset button is clicked', () => {
  cy
  .get('input').type('six, seven, eight, nine')
  cy
  .get('textarea').type('Why was six afraid of seven? Because seven eight nine!')
  cy
  .get('.submit-button').click()
  cy
  .get('p').contains('Why was XXXX afraid of XXXX? Because XXXX XXXX XXXX!')
  cy
  .get('.reset-button').click()
  cy
  .get('h2').contains('Redactions:')
  cy
  .get('h3').contains('Original Document:')
})

it('should redact text from a document even if phrases and keywords are provided in different order', () => {
  cy
  .get('input').type('"Peter Piper", "pickled peppers", purple, patch, people')
  cy
  .get('textarea').type('Peter Piper picked a pack of pickled peppers while pacing through a patch of purple people eaters.')
  cy
  .get('.submit-button').click()
  cy
  .get('p').contains('XXXX picked a pack of XXXX while pacing through a XXXX of XXXX XXXX eaters.')
  cy
  .get('.reset-button').click()
  cy
  .get('input').type('"sea shells" woodchuck "sea shore" wood')
  cy
  .get('textarea').type('Sally may sell sea shells by the sea shore, but how much wood would a woodchuck chuck if a woodchuck could chuck wood?')
  cy
  .get('.submit-button').click()
  cy
  .get('p').contains('Sally may sell XXXX by the XXXX, but how much XXXX would a XXXX chuck if a XXXX could chuck XXXX?')
})

});
