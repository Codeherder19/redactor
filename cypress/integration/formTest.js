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

});
