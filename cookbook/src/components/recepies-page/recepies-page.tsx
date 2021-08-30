import * as React from 'react';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';

export default function RecepiesPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <h1>Recepies search</h1>
        </main>
      </div>
      <Footer/>
    </>
  );
}