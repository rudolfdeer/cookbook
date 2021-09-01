import * as React from 'react';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';

export default function RecipesPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <h1>recipes search</h1>
        </main>
      </div>
      <Footer/>
    </>
  );
}