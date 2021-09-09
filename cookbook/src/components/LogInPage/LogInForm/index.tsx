import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes';
import './index.scss';

export default function LogInForm(): JSX.Element {
  return (
    <div className="log-in-page__form">
      <Link to="/"><div className="form__logo"></div></Link>
      <h1 className="form__title">Welcome back</h1>
      <h2 className="form__title_small">New here? <Link to={routes.signup}>Create an account</Link></h2>
      <form className="form">
        <label htmlFor="email" className = "form__label">Email</label>
        <input type="text" id="email" name="email" className = "form__input"/>
        <label htmlFor="password" className = "form__label password">Password<span>Forgot password?</span></label>
        <input type="text" id="password" name="password" className = "form__input"/>
        <input type="submit" value = "Sign In" className = "form__input submit"/>
      </form>
    </div>
  );
}
