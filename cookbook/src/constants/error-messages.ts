const ERROR_MESSAGES = {
  required: 'Required',
  email: 'Enter a valid email',
  password: {
    longLength: '30 characters max',
    shortLength: 'Must have at least 8 characters',
    noSymbols: 'Must contain at least one special character (@, $, !, &, etc)',
  },
  confirmPassword: 'Please make sure your passwords matches',
};

export default ERROR_MESSAGES;
