import * as React from 'react';
import {
  Link,
} from 'react-router-dom';
import { Recipe } from '../../../constants/types';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';

import './home-page.scss';
import RecipeRatedCard from './recipe-rated-card';

type HomePageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const { recipes, getRecipes } = props;

  React.useEffect(() => getRecipes(), []);

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
          <section className="section rated">
            <div className="section-pre-title">Users Choice</div>
            <h2 className="section-title">20 Highest-Rated Recipes</h2>
            <div className="section-cards recipes-rated">
            {/* eslint-disable-next-line max-len */}
            {recipes?.map((el) => <RecipeRatedCard name = {el.name} author = {el.author} views = {el.views} likes = {el.likes} comments = {el.comments.length} image = {el.image} key={el.id} />).slice(0, 4)}
            </div>
            <button className="section-btn btn light"><Link to="/recipes">Show more</Link></button>
          </section>
          <section className="section popular">
            <div className="section-pre-title">Our Choice</div>
            <h2 className="section-title">Most Popular CookBooks</h2>
            <div className="section-cards cookbooks-popular"></div>
            <button className="section-btn btn light"><Link to="/cookbooks">Show more</Link></button>
          </section>
          <section className="section trending">
            <div className="section-pre-title">Top 10</div>
            <h2 className="section-title">Trending recipes</h2>
            <div className="section-slider">
             <div className="section-cards recipes-trending"></div>
            </div>
            <button className="section-btn btn"><Link to="/recipes">Show all recipes</Link></button>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}