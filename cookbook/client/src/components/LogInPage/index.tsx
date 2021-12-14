import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { AuthValues } from '../../redux/actions/userActions';
import LogInForm from './Form';

import './index.scss';

type LogInPageProps = {
  isLoggedIn: boolean;
  signIn: (loginInfo: AuthValues) => Promise<void>;
};

export default function LogInPage(props: LogInPageProps): JSX.Element {
  const { isLoggedIn, signIn } = props;
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      setIsRedirected(true);
    }
  }, [isLoggedIn]);

  if (isRedirected) {
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
