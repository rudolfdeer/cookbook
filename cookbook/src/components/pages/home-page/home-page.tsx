import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import { Cookbook, Recipe } from '../../../constants/types';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import CookbookCard from './cookbook-card';

import './home-page.scss';
import RecipeCardRated from './recipe-card-rated';
import RecipeCardTrending from './recipe-card-trending';

type HomePageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
  cookbooks?: Cookbook[];
  getCookbooks?: Function;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const { recipes, getRecipes, cookbooks, getCookbooks } = props;

  useEffect(() => {
    getRecipes();
    getCookbooks();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        </div>
        <main className="main">
        <div className="wrapper">
          <img src = "../../../public/images/pear-bg.png" className = "pear-bg top"/>
          <img src = "../../../public/images/pear-light-bg.png" className = "pear-bg bottom"/>
          <div className="intro-container">
            <section className="intro">
              <h1 className="intro-title">Find Recipes and Сreate Your Favourite Сookbooks</h1>
              <div className="intro-search">
                <div className="intro-search-icon" />
                <input type="text" className="intro-search-input" placeholder="Find Best Recipes..." />
                <button className="intro-search-btn btn dark">Search</button>
              </div>
              <nav>
                <ul className="intro-nav-list">
                  <li className="intro-nav-list-item">Vegetarian</li>
                  <li className="intro-nav-list-item">Mexican</li>
                  <li className="intro-nav-list-item">Greece Kithcen</li>
                  <li className="intro-nav-list-item">Italy Pizza</li>
                  <li className="intro-nav-list-item">Philippines</li>
                  <li className="intro-nav-list-item">Japan Sushi</li>
                </ul>
              </nav>
            </section>
          </div>
          <section className="section rated">
            <div className="section-pre-title">Users Choice</div>
            <h2 className="section-title">20 Highest-Rated Recipes</h2>
            <div className="section-cards recipes-rated">
            {/* eslint-disable-next-line max-len */}
            {recipes?.map((el) => <RecipeCardRated name = {el.name} author = {el.author} views = {el.views} likes = {el.likes} comments = {el.comments.length} image = {el.image} key={el.id} />).slice(0, 4)}
            </div>
            <button className="section-btn btn light"><Link to="/recipes">Show more</Link></button>
          </section>
          <section className="section popular">
            <div className="section-pre-title">Our Choice</div>
            <h2 className="section-title">Most Popular CookBooks</h2>
            <div className="section-cards cookbooks-popular">
              {/* eslint-disable-next-line max-len */}
            {cookbooks?.map((el) => <CookbookCard name = {el.name} image = {el.image} key={el.id} />).slice(0, 4)}
            </div>
            <button className="section-btn btn light"><Link to="/cookbooks">Show more</Link></button>
          </section>
          </div>
          <section className="section trending">
          <div className="wrapper">
            <div className="section-pre-title">Top 10</div>
            <h2 className="section-title">Trending Recipes</h2>
            <div className="section-slider">
             <div className="section-cards recipes-trending">
               {/* eslint-disable-next-line max-len */}
             {recipes?.map((el) => <RecipeCardTrending name = {el.name} author = {el.author} views = {el.views} image = {el.image} key={el.id} />).slice(0, 3)}
             </div>
            </div>
            <button className="section-btn btn"><Link to="/recipes">Show all recipes</Link></button>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}