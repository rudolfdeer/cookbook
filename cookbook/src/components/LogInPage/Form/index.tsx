import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import routes from '../../../constants/routes';
import './index.scss';
import { EMAILREGEX } from '../../../constants/regex';
import ERROR_MESSAGES from '../../../constants/error-messages';

type FormValues = {
  email: string;
  password: string;
};

type LogInFormProps = {
  logIn: Function;
};

const required = (value: string) => (value ? undefined : ERROR_MESSAGES.required);
const validEmail = (value: string) => (!value.match(EMAILREGEX) ? ERROR_MESSAGES.email : undefined);
const composeValidators = (...validators: Function[]) => (value: string) => validators.reduce((error, validator) => error || validator(value), undefined);

export default function LogInForm(props: LogInFormProps): JSX.Element {
  const { logIn } = props;
  const formData = {};

  const onSubmit = (values: FormValues) => logIn(values);

  return (
    <div className="log-in-page__form">
      <Link to="/"><div className="form__logo"></div></Link>
      <h1 className="form__title">Welcome back</h1>
      <h2 className="form__title_small">New here? <Link to={routes.signup}>Create an account</Link></h2>

      <Form
        onSubmit = {onSubmit}
        initialValues={formData}
        render = {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <Field name = "email" validate = {composeValidators(required, validEmail)}>
              {({ input, meta }) => (
                <>
                <label className = "form__label">Email</label>
                <input {...input} type="text" className = "form__input"/>
                {meta.error && meta.touched ? <span className = "form__error email">{meta.error}</span> : <span className = "form__error email"></span>}
                </>
              )}
            </Field>
            <Field name = "password" validate = {required}>
              {({ input, meta }) => (
                <>
                <label className = "form__label password">Password<span>Forgot password?</span></label>
                <input {...input} type="password" className = "form__input"/>
                {meta.error && meta.touched ? <span className = "form__error email">{meta.error}</span> : <span className = "form__error email"></span>}
                </>
              )}
            </Field>
            <button type="submit" className = "form__input submit">
              Sign In
            </button>
          </form>)}
      />
    </div>
  );
}
