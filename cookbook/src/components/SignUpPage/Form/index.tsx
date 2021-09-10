import React from 'react';
import { Form, Field } from 'react-final-form';
import { Link } from 'react-router-dom';
import ERROR_MESSAGES from '../../../constants/error-messages';
import { EMAILREGEX } from '../../../constants/regex';
import routes from '../../../constants/routes';
import './index.scss';

type FormValues = {
  email: string;
  password: string;
  confirm: string;
};

const onSubmit = (values: FormValues) => {
  console.log(values);
} 

export default function SignUpForm(): JSX.Element {
  const formData = {};

  return (
    <div className="sign-up-page__form">
      <Link to="/"><div className="form__logo"></div></Link>
      <h1 className="form__title">Join Our Community</h1>
      <h2 className="form__title_small">Already have an account? <Link to={routes.login}>Sign in</Link></h2>

      <Form
        onSubmit = {onSubmit}
        initialValues={formData}
        validate = {(values: FormValues) => {
          const errors = {} as FormValues;

          if (!values.email) {
            errors.email = ERROR_MESSAGES.required;
          }

          if (values.email) {
            if (!values.email.match(EMAILREGEX)) {
              errors.email = ERROR_MESSAGES.email;
            }
          }

          if (!values.password) {
            errors.password = ERROR_MESSAGES.required;
          }
          if (!values.confirm) {
            errors.confirm = ERROR_MESSAGES.required;
          } else if (values.confirm !== values.password) {
            errors.confirm = ERROR_MESSAGES.confirmPassword;
          }

          if (values.password) {
            if (values.password.length < 7) {
              errors.password = ERROR_MESSAGES.password.shortLength;
            }

            if (values.password.length > 30) {
              errors.password = ERROR_MESSAGES.password.longLength;
            }
          }
          return errors;
        }}

        render = {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <Field name = "email">
              {({ input, meta }) => (
                <>
                <label className = "form__label">Email</label>
                <input {...input} type="text" className = "form__input"/>
                {meta.error && meta.touched ? <span className = "form__error">{meta.error}</span> : <span className = "form__error"></span>}
                </>
              )}
            </Field>
            <Field name = "password">
              {({ input, meta }) => (
                <>
                <label className = "form__label password">Password<span>Forgot password?</span></label>
                <input {...input} type="password" className = "form__input"/>
                {meta.error && meta.touched ? <span className = "form__error">{meta.error}</span> : <span className = "form__error"></span>}
                </>
              )}
            </Field>
            <Field name = "confirm">
              {({ input, meta }) => (
                <>
                <label className = "form__label">Confirm password</label>
                <input {...input} type="password" className = "form__input"/>
                {meta.error && meta.touched ? <span className = "form__error">{meta.error}</span> : <span className = "form__error"></span>}
                </>
              )}
            </Field>
            <button type="submit" className = "form__input submit">
              Sign Up
            </button>
          </form>)}
      />
    </div>
  );
}
