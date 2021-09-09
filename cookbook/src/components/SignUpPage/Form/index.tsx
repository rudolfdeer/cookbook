import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes';
import './index.scss';

export default function SignUpForm(): JSX.Element {
  return (
    <div className="sign-up-page__form">
      <Link to="/"><div className="form__logo"></div></Link>
      <h1 className="form__title">Join Our Community</h1>
      <h2 className="form__title_small">Already have an account? <Link to={routes.login}>Sign in</Link></h2>
      <form className="form">
        <label htmlFor="email" className = "form__label">Email</label>
        <input type="text" id="email" name="email" className = "form__input"/>
        <span className = "form__error email"></span>
        <label htmlFor="password" className = "form__label password">Password<span>Forgot password?</span></label>
        <input type="text" id="password" name="password" className = "form__input"/>
        <span className = "form__error email"></span>
        <label htmlFor="confirm" className = "form__label">Confirm password</label>
        <input type="text" id="confirm" name="confirm" className = "form__input"/>
        <span className = "form__error email"></span>
        <input type="submit" value = "Sign Up" className = "form__input submit"/>
      </form>
    </div>
  );
}
