import * as React from 'react';
import Header from '../header/Header';

export default function CookbooksPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <h1>Cookbooks search</h1>
        </main>
      </div>
    </>
  );
}