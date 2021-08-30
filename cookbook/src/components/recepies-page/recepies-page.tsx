import * as React from 'react';
import Header from '../header/Header';

export default function RecepiesPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <h1>Recepies search</h1>
        </main>
      </div>
    </>
  );
}