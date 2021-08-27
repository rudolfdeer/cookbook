import React from 'react';
import Header from '../components/Header';

export default function HomePage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="intro">
          <div className="intro-content">
          <h1 className="intro-title">Find Recipies and Сreate Your Favourite Сookbooks</h1>
          <div className="search-container">
            <div className="search-icon" />
            <input type="text" className="intro-input-search" placeholder="Find Best Recipies..." />
            <button className="intro-btn-search btn dark">Search</button>
          </div>
          <nav className="intro-nav">
            <ul className="intro-nav-list">
              <li className="nav-list-item">Vegeterian</li>
              <li className="nav-list-item">Mexican</li>
              <li className="nav-list-item">Greece Kithcen</li>
              <li className="nav-list-item">Italy Pizza</li>
              <li className="nav-list-item">Philippines</li>
              <li className="nav-list-item">Japan Sushi</li>
            </ul>
          </nav>
          </div>
        </div>
      </div>
    </>
  );
}