import React, { useState, useEffect } from 'react';
import {
  Link,
} from 'react-router-dom';
import { Cookbook, Recipe } from '../../constants/interfaces';
import Footer from '../Footer';
import Header from '../Header';
import CardPopular from './CardPopular';
import CardRated from './CardRated';
import CardTrending from './CardTrending';

import './index.scss';

type HomePageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
  cookbooks?: Cookbook[];
  getCookbooks?: Function;
  username?: string;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const { recipes, getRecipes, cookbooks, getCookbooks, username } = props;

  useEffect(() => {
    getRecipes();
    getCookbooks();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header username = {username}/>
        </div>
        <main className="home-page">
        <div className="wrapper">
          <img src = "../../../assets/images/pear-bg.png" className = "pear-bg top"/>
          <img src = "../../../assets/images/pear-light-bg.png" className = "pear-bg bottom"/>
          <div className="home-page__intro">
            <section className="intro__content">
              <h1 className="intro__title">Find Recipes and Сreate Your Favourite Сookbooks</h1>
              <div className="intro__search">
                <div className="search__icon" />
                <input type="text" className="search__input" placeholder="Find Best Recipes..." />
                <button className="search__btn">Search</button>
              </div>
              <nav className="intro__nav">
                <ul className="nav__list">
                  <li className="list__item">Vegetarian</li>
                  <li className="list__item">Mexican</li>
                  <li className="list__item">Greece Kithcen</li>
                  <li className="list__item">Italy Pizza</li>
                  <li className="list__item">Philippines</li>
                  <li className="list__item">Japan Sushi</li>
                </ul>
              </nav>
            </section>
          </div>
          <section className="home-page__section rated">
            <div className="section__pre-title">Users Choice</div>
            <h2 className="section__title">20 Highest-Rated Recipes</h2>
            <div className="section__cards rated">
            {recipes?.map((el) => <CardRated
                                    name = {el.name}
                                    author = {el.author}
                                    views = {el.views}
                                    likes = {el.likes}
                                    comments = {el.comments.length}
                                    image = {el.image}
                                    key={el.id} />).slice(0, 4)}
            </div>
            <button className="section__btn"><Link to="/recipes">Show more</Link></button>
          </section>
          <section className="home-page__section popular">
            <div className="section__pre-title">Our Choice</div>
            <h2 className="section__title">Most Popular CookBooks</h2>
            <div className="section__cards popular">
            {cookbooks?.map((el) => <CardPopular
                                      name = {el.name}
                                      image = {el.image}
                                      key={el.id} />).slice(0, 4)}
            </div>
            <button className="section__btn"><Link to="/cookbooks">Show more</Link></button>
          </section>
          </div>
          <section className="home-page__section trending">
          <div className="wrapper">
            <div className="section__pre-title">Top 10</div>
            <h2 className="section__title">Trending Recipes</h2>
            <div className="section__slider">
             <div className="section__cards trending">
             {recipes?.map((el) => <CardTrending
                                    name = {el.name}
                                    author = {el.author}
                                    views = {el.views}
                                    image = {el.image}
                                    key={el.id} />).slice(0, 3)}
             </div>
            </div>
            <button className="section__btn"><Link to="/recipes">Show all recipes</Link></button>
            </div>
          </section>
        </main>
      <Footer />
    </>
  );
}