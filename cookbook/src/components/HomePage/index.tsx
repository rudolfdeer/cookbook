import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { INTRO_NAV_LIST } from "../../constants/ressources/homePage";
import ROUTES from "../../constants/routes";
import { ActionCreatorFunction, Cookbook, Recipe } from "../../interfaces";
import HeaderConnect from "../../redux/containers/HeaderConnect";
import Footer from "../Footer";
import CardPopular from "./CardPopular";
import CardRated from "./CardRated";
import CardTrending from "./CardTrending";

import "./index.scss";

type HomePageProps = {
  recipes: Recipe[];
  getAllRecipes: ActionCreatorFunction;
  cookbooks: Cookbook[];
  getAllCookbooks: ActionCreatorFunction;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const { recipes, getAllRecipes, cookbooks, getAllCookbooks } = props;

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
              <h1 className="page--home__intro__title">
                Find Recipes and Сreate Your Favourite Сookbooks
              </h1>
              <div className="page--home__intro__search">
                <div className="page--home__intro__search__icon" />
                <input
                  type="text"
                  className="page--home__intro__search__input"
                  placeholder="Find Best Recipes..."
                />
                <button className="page--home__intro__search__btn">
                  Search
                </button>
              </div>
              <nav className="page--home__intro__nav">
                <ul className="page--home__intro__nav__list">
                  {INTRO_NAV_LIST.map((el) => (
                    <li
                      className="page--home__intro__nav__list__item"
                      key={INTRO_NAV_LIST.indexOf(el)}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
          <section className="page--home__section--rated">
            <div className="section__pre-title">Users Choice</div>
            <h2 className="section__title">20 Highest-Rated Recipes</h2>
            <div className="section__cards rated">
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
                  />
                ))
                .slice(0, 4)}
            </div>
            <button className="section__btn">
              <Link to={ROUTES.RECIPES}>Show more</Link>
            </button>
          </section>
          <section className="page--home__section--popular">
            <div className="section__pre-title">Our Choice</div>
            <h2 className="section__title">Most Popular CookBooks</h2>
            <div className="section__cards popular">
              {cookbooks
                ?.map((el) => (
                  <CardPopular title={el.title} image={el.image} key={el.id} />
                ))
                .slice(0, 4)}
            </div>
            <button className="section__btn">
              <Link to={ROUTES.COOKBOOKS}>Show more</Link>
            </button>
          </section>
        </div>
        <section className="page--home__section--trending">
          <div className="wrapper">
            <div className="section__pre-title">Top 10</div>
            <h2 className="section__title">Trending Recipes</h2>
            <div className="section__slider">
              <div className="section__cards trending">
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
            <button className="section__btn">
              <Link to={ROUTES.RECIPES}>Show all recipes</Link>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
