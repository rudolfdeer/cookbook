import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { ActionCreatorFunction } from '../../interfaces';
import SignUpForm from './Form';

import './index.scss';

type SignUpPageProps = {
  createUser: ActionCreatorFunction;
};

export default function SignUpPage(props: SignUpPageProps): JSX.Element {
  const { createUser } = props;
  const [isRedirected, setIsRedirected] = useState(false);

  if (isRedirected) {
    return <Redirect to={ROUTES.PROFILE_SETTINGS} />;
  }
  return (
    <main className="sign-up-page">
      <div className="wrapper">
        <SignUpForm createUser={createUser} setIsRedirected={setIsRedirected} />
      </div>
    </main>
  );
}
