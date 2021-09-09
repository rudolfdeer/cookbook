import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EMAILREGEX } from '../../../constants/regex';
import ERROR_MESSAGES from '../../../constants/error-messages';
import routes from '../../../constants/routes';
import './index.scss';

export default function LogInForm(): JSX.Element {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateEmail(email: string) {
    if (!email) {
      setEmailError(ERROR_MESSAGES.empty);
    } else if (!email.match(EMAILREGEX)) {
      setEmailError(ERROR_MESSAGES.email);
    } else {
      setEmailError('');
    }
  }

  function validatePassword(password: string) {
    if (!password) {
      setPasswordError(ERROR_MESSAGES.empty);
    } else if (password.length < 8) {
      setPasswordError(ERROR_MESSAGES.password.tooShort);
    } else {
      setPasswordError('');
    }
  }

  function validateForm(e: React.MouseEvent) {
    e.preventDefault();
    if (!emailError && !passwordError) {
      console.log('validated');
    } else {
      console.log('errors');
    }
  }

  useEffect(() => {
    validateEmail(emailValue);
    validatePassword(passwordValue);
  });

  return (
    <div className="log-in-page__form">
      <Link to="/"><div className="form__logo"></div></Link>
      <h1 className="form__title">Welcome back</h1>
      <h2 className="form__title_small">New here? <Link to={routes.signup}>Create an account</Link></h2>
      <form className="form">
        <label htmlFor="email" className = "form__label">Email</label>
        <input type="text" id="email" name="email" className = "form__input" value = {emailValue} onChange = {(e) => setEmailValue(e.target.value)}/>
        <span className = "form__error email">{emailError}</span>
        <label htmlFor="password" className = "form__label password">Password<span>Forgot password?</span></label>
        <input type="password" id="password" name="password" className = "form__input" value = {passwordValue} onChange = {(e) => setPasswordValue(e.target.value)}/>
        <span className = "form__error password">{passwordError}</span>
        <Link to={routes.profile}><input type="submit" value = "Sign In" className = "form__input submit" onClick = {(e) => validateForm(e)}/></Link>
      </form>
    </div>
  );
}
