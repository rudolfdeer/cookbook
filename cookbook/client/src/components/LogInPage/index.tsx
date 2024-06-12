import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { AuthRequestBody, User } from '../../interfaces';
import LogInForm from './Form';

import './index.scss';

type LogInPageProps = {
  user: User;
  signIn: (loginInfo: AuthRequestBody) => Promise<void>;
  getLoggedInUser: () => Promise<void>;
};

export default function LogInPage(props: LogInPageProps): JSX.Element {
  const { user, signIn, getLoggedInUser } = props;

  useEffect(() => {
    getLoggedInUser();
  }, []);

  if (user) {
    return <Redirect to={ROUTES.PROFILE_SETTINGS} />;
  }

  return (
    <main className="login-page">
      <div className="wrapper">
        <LogInForm signIn={signIn} />
      </div>
    </main>
  );
}
