import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import {
  MAIN_TITLE,
  POPULAR_SECTION_PRE_TITLE,
  POPULAR_SECTION_TITLE,
  RATED_SECTION_PRE_TITLE,
  RATED_SECTION_TITLE,
  SEARCH_BTN,
  SEARCH_INPUT_PLACEHOLDER,
  SEARCH_NAV_LIST,
  SHOW_ALL_BTN,
  SHOW_MORE_BTN,
  TRENDING_SECTION_PRE_TITLE,
  TRENDING_SECTION_TITLE,
} from '../../constants/resources/homePage';
import ROUTES from '../../constants/routes';
import { Cookbook, Recipe } from '../../interfaces';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import Footer from '../Footer';
import CardPopular from './CardPopular';
import CardRated from './CardRated';
import CardTrending from './CardTrending';

import './index.scss';

type HomePageProps = {
  recipes: Recipe[];
  getAllRecipes: () => AnyAction;
  cookbooks: Cookbook[];
  getAllCookbooks: () => AnyAction;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const {
    recipes, getAllRecipes, cookbooks, getAllCookbooks,
  } = props;

  useEffect(() => {
    getAllRecipes();
    getAllCookbooks();
  }, []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="page--home">
        <div className="wrapper">
          <img
            src="../../../assets/images/pear-bg.png"
            className="page--home__bg--top"
          />
          <img
            src="../../../assets/images/pear-light-bg.png"
            className="page--home__bg--bottom"
          />
          <div className="page--home__intro">
            <section className="page--home__intro__content">
              <h1 className="page--home__intro__title">{MAIN_TITLE}</h1>
              <div className="page--home__intro__search">
                <div className="page--home__intro__search__icon" />
                <input
                  type="text"
                  className="page--home__intro__search__input"
                  placeholder={SEARCH_INPUT_PLACEHOLDER}
                />
                <button className="page--home__intro__search__btn">
                  {SEARCH_BTN}
                </button>
              </div>
              <nav className="page--home__intro__nav">
                <ul className="page--home__intro__nav__list">
                  {SEARCH_NAV_LIST.map((el) => (
                    <li
                      className="page--home__intro__nav__list__item"
                      key={SEARCH_NAV_LIST.indexOf(el)}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
          <section className="page--home__section--rated">
            <div className="page--home__section--rated__pre-title">
              {RATED_SECTION_PRE_TITLE}
            </div>
            <h2 className="page--home__section--rated__title">
              {RATED_SECTION_TITLE}
            </h2>
            <div className="page--home__section--rated__cards">
              {recipes
                ?.map((el) => (
                  <CardRated
                    title={el.title}
                    authorId={el.userId}
                    views={el.views}
                    likes={el.likes}
                    comments={el.comments.length}
                    image={el.image}
                    key={el.id}
                    usersLiked={el.usersLiked}
                  />
                ))
                .slice(0, 4)}
            </div>
            <button className="page--home__section--rated__btn">
              <Link to={ROUTES.RECIPES}>{SHOW_MORE_BTN}</Link>
            </button>
          </section>
          <section className="page--home__section--popular">
            <div className="page--home__section--popular__pre-title">
              {POPULAR_SECTION_PRE_TITLE}
            </div>
            <h2 className="page--home__section--popular__title">
              {POPULAR_SECTION_TITLE}
            </h2>
            <div className="page--home__section--popular__cards">
              {cookbooks
                ?.map((el) => (
                  <CardPopular title={el.title} image={el.image} key={el.id} />
                ))
                .slice(0, 4)}
            </div>
            <button className="page--home__section--popular__btn">
              <Link to={ROUTES.COOKBOOKS}>{SHOW_MORE_BTN}</Link>
            </button>
          </section>
        </div>
        <section className="page--home__section--trending">
          <div className="page--home__section--trending__wrapper">
            <div className="page--home__section--trending__pre-title">
              {TRENDING_SECTION_PRE_TITLE}
            </div>
            <h2 className="page--home__section--trending__title">
              {TRENDING_SECTION_TITLE}
            </h2>
            <div className="page--home__section--trending__slider">
              <div className="page--home__section--trending__cards">
                {recipes
                  ?.map((el) => (
                    <CardTrending
                      title={el.title}
                      authorId={el.userId}
                      views={el.views}
                      image={el.image}
                      key={el.id}
                    />
                  ))
                  .slice(0, 3)}
              </div>
            </div>
            <button className="page--home__section--trending__btn">
              <Link to={ROUTES.RECIPES}>{SHOW_ALL_BTN}</Link>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
