import React from 'react';
import LogInForm from './Form';

import './index.scss';

type LogInPageProps = {
  logIn: Function;
}

export default function LogInPage(props: LogInPageProps): JSX.Element {
  const { logIn } = props;

  return (
    <main className="log-in-page">
      <div className="wrapper">
        <LogInForm logIn = {logIn} />
      </div>
    </main>
  );
}
