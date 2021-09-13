import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../interfaces';
import Footer from '../Footer';
import Header from '../Header';
import RecipeCard from './Card';
import FilterPanelRecipes from './FilterPanel';
import PopUpRecipeDetailed from './PopUp';

import './index.scss';

type RecipesPageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
  sortRecipes: Function;
  filterRecipes: Function;
  username?: string;
};

export default function RecipesPage(props: RecipesPageProps): JSX.Element {
  const {
    recipes, getRecipes, sortRecipes, filterRecipes, username,
  } = props;
  const [isVisible, setVisible] = useState(false);
  const [chosenCardId, setChosenCardId] = useState(0);

  useEffect(() => getRecipes(), []);

  function findCard(): Recipe {
    const card = recipes.find((el) => el.id === chosenCardId);
    return card;
  }

  return (
    <>
      <div className="wrapper">
        <Header username={username}/>
        </div>
        <main className="search-page">
        <div className="wrapper">
          <aside className="search-page__aside">
          <div className="aside__container">
            <FilterPanelRecipes sortRecipes = {sortRecipes} filterRecipes = {filterRecipes}/>
          </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="nav__list">
                <li className="list__item"><Link to="/cookbooks">Cookbooks</Link></li>
                <li className="list__item_selected">Recipes</li>
            </ul>
            </nav>
          <div className="search-page__cards recipes">
          {Object.values(recipes).map((el) => <RecipeCard
                                  id = {el.id}
                                  name = {el.name}
                                  author = {el.userName}
                                  views = {el.views}
                                  likes = {el.likes}
                                  comments = {el.comments.length}
                                  image = {el.image}
                                  description = {el.description}
                                  selectCard = {setChosenCardId}
                                  openDetailedInfo = {setVisible}
                                  key={el.id} />)}
          </div>
         </div>
         {isVisible
           ? <PopUpRecipeDetailed
              openDetailedInfo = {setVisible}
              cardInfo = {findCard()}/>
           : null}
           </div>
        </main>

      <Footer/>
    </>
  );
}