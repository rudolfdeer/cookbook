import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { IUser } from '../../interfacesServer';
import { AuthValues } from '../../redux/actions/userActions';
import LogInForm from './Form';

import './index.scss';

type LogInPageProps = {
  user: IUser;
  signIn: (loginInfo: AuthValues) => Promise<void>;
  getLoggedInUser: () => Promise<void>;
};

export default function LogInPage(props: LogInPageProps): JSX.Element {
  const { user, signIn, getLoggedInUser } = props;
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    //getLoggedInUser();
    if (user) {
      setIsRedirected(true);
    }
  }, []);

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
