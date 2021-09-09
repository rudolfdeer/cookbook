const ERROR_MESSAGES = {
  empty: 'Should not be empty',
  email: 'Enter a valid email',
  password: {
    longLength: '30 characters max',
    shortLength: 'Must have at least 8 characters',
    noSymbols: 'Must contain at least one special character (@, $, !, &, etc)',
    noNumbers: 'Must contain at least one number',
    tooShort: 'Too short',
  },
  confirmPassword: 'Please make sure your passwords matches',
};

export default ERROR_MESSAGES;
