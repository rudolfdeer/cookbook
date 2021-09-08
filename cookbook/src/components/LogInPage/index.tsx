import React from 'react';
import LogInForm from './LogInForm';

import './index.scss';

export default function LogInPage(): JSX.Element {
  return (
    <main className="log-in-page">
      <div className="wrapper">
        <LogInForm />
      </div>
    </main>
  );
}
