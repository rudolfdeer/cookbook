import React from 'react';
import Header from '../components/Header';

export default function HomePage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="intro-container">
          <div className="intro">
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
          </div>
        </div>
      </div>
    </>
  );
}