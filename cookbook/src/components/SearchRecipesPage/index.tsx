import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActionCreatorFunction, Recipe } from '../../interfaces';
import Footer from '../Footer';
import Header from '../Header';
import RecipeCard from './Card';
import FilterPanelRecipes from './FilterPanel';
import PopUpRecipeDetailed from './PopUp';

import './index.scss';
import api from '../../helpers/api';

type RecipesPageProps = {
  recipes: Recipe[];
  getRecipes: Function;
  sortRecipes: ActionCreatorFunction;
  filterRecipes: ActionCreatorFunction;
  loggedInUserId: number;
  saveToUsersRecipes: ActionCreatorFunction;
  createComment: ActionCreatorFunction;
};

export default function RecipesPage(props: RecipesPageProps): JSX.Element {
  const {
    recipes,
    getRecipes,
    sortRecipes,
    filterRecipes,
    loggedInUserId,
    saveToUsersRecipes,
    createComment,
  } = props;
  const [isVisible, setVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

  useEffect(() => getRecipes(), []);

  return (
    <>
      <div className="wrapper">
        <Header loggedInUserId={loggedInUserId} />
      </div>
      <main className="search-page">
        <div className="wrapper">
          <aside className="search-page__aside">
            <div className="aside__container">
              <FilterPanelRecipes
                sortRecipes={sortRecipes}
                filterRecipes={filterRecipes}
              />
            </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="nav__list">
                <li className="list__item">
                  <Link to="/cookbooks">Cookbooks</Link>
                </li>
                <li className="list__item_selected">Recipes</li>
              </ul>
            </nav>
            <div className="search-page__cards recipes">
              {recipes.map((el) => (
                <RecipeCard
                  id={el.id}
                  title={el.title}
                  authorId={el.userId}
                  views={el.views}
                  likes={el.likes}
                  comments={el.comments.length}
                  image={el.image}
                  description={el.description}
                  selectCard={setSelectedCardId}
                  setVisible={setVisible}
                  key={el.id}
                  loggedInUserId={loggedInUserId}
                  saveToUsersRecipes={saveToUsersRecipes}
                />
              ))}
            </div>
          </div>
          {isVisible ? (
            <PopUpRecipeDetailed
              setVisible={setVisible}
              recipe={api.getRecipe(selectedCardId)}
              loggedInUserId={loggedInUserId}
              saveToUsersRecipes={saveToUsersRecipes}
              createComment={createComment}
            />
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  );
}
