import * as React from 'react';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';

export default function CookbooksPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <aside className="aside">

          </aside>
          <nav className="page-nav">
            <ul className="page-nav-list">
              <li className="page-nav-list-item selected">Cookbooks</li>
              <li className="page-nav-list-item">Recepies</li>
            </ul>
          </nav>
          <div className="cards-container"></div>
        </main>
      </div>
      <Footer/>
    </>
  );
}