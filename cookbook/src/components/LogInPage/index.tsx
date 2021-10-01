import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import ROUTES from '../../constants/routes';
import { LoginInfo } from '../../redux/actions/user';
import LogInForm from './Form';

import './index.scss';

type LogInPageProps = {
  isLoggedIn: boolean;
  logIn: (loginInfo: LoginInfo) => AnyAction;
};

export default function LogInPage(props: LogInPageProps): JSX.Element {
  const { isLoggedIn, logIn } = props;
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
        <LogInForm logIn={logIn} />
      </div>
    </main>
  );
}
