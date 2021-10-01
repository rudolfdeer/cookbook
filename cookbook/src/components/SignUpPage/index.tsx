import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import ROUTES from '../../constants/routes';
import SignUpForm from './Form';

import './index.scss';

type SignUpPageProps = {
  createUser: (email: string, password: string) => AnyAction;
};

export default function SignUpPage(props: SignUpPageProps): JSX.Element {
  const { createUser } = props;
  const [isRedirected, setIsRedirected] = useState(false);

  if (isRedirected) {
    return <Redirect to={ROUTES.PROFILE_SETTINGS} />;
  }
  return (
    <main className="sign-up-page">
      <div className="sign-up-page__wrapper">
        <SignUpForm createUser={createUser} setIsRedirected={setIsRedirected} />
      </div>
    </main>
  );
}
