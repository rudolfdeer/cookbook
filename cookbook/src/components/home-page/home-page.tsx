import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Header from '../shared/header/Header';

import './home-page.scss';

export default function HomePage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <div className="intro-container">
            <section className="intro">
              <h1 className="intro-title">Find Recipies and Сreate Your Favourite Сookbooks</h1>
              <div className="intro-search">
                <div className="intro-search-icon" />
                <input type="text" className="intro-search-input" placeholder="Find Best Recipies..." />
                <button className="intro-search-btn btn dark">Search</button>
              </div>
              <nav>
                <ul className="intro-nav-list">
                  <li className="intro-nav-list-item">Vegeterian</li>
                  <li className="intro-nav-list-item">Mexican</li>
                  <li className="intro-nav-list-item">Greece Kithcen</li>
                  <li className="intro-nav-list-item">Italy Pizza</li>
                  <li className="intro-nav-list-item">Philippines</li>
                  <li className="intro-nav-list-item">Japan Sushi</li>
                </ul>
              </nav>
            </section>
          </div>
          <section className="section">
            <div className="section-pre-title">Users Choice</div>
            <h2 className="section-title">20 Highest-Rated Recipes</h2>
            <div className="section-cards recipes-rated"></div>
            <button className="section-btn btn light"><Link to="/highest_rated">Show more</Link></button>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}