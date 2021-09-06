import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../../../constants/types';
import Footer from '../../../shared/footer/footer';
import Header from '../../../shared/header/header';
import RecipeCard from './card';
import FilterPanelRecipes from './filter-panel';
import PopUpRecipeDetailed from './pop-up';

import '../page.scss';

type RecipesPageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
};

export default function RecipesPage(props: RecipesPageProps): JSX.Element {
  const { recipes, getRecipes } = props;
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
        <Header />
        <main className="search-page">
          <aside className="aside">
          <div className="filter">
            <FilterPanelRecipes/>
          </div>
          </aside>
          <div className="content">
            <nav className="page-nav">
              <ul className="page-nav-list">
                <li className="page-nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
                <li className="page-nav-list-item selected">Recipes</li>
            </ul>
            </nav>
          <div className="cards recipes">
          {recipes?.map((el) => <RecipeCard
                                  id = {el.id}
                                  name = {el.name}
                                  author = {el.author}
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
        </main>
      </div>
      <Footer/>
    </>
  );
}