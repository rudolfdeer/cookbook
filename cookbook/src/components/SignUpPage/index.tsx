import React from 'react';
import SignUpForm from './Form';

import './index.scss';

export default function SignUpPage(): JSX.Element {
  return (
    <main className="sign-up-page">
      <div className="wrapper">
        <SignUpForm />
      </div>
    </main>
  );
}
