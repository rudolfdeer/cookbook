import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer';
import RecipeCard from './Card';
import FilterPanelRecipes from './FilterPanel';
import PopUpRecipeDetailed from './PopUp';

import './index.scss';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import { IRecipe } from '../../interfacesServer';

type RecipesPageProps = {
  recipes: IRecipe[];
  getAllRecipes: () => Promise<void>;
  sortRecipes: (order: string) => Promise<void>;
  filterRecipes: (cookingTime: number) => Promise<void>;
  loggedInUserId: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
  createComment: (
    recipeId: number,
    text: string
  ) => Promise<void>;
};

export default function RecipesPage(props: RecipesPageProps): JSX.Element {
  const { t } = useTranslation();
  const {
    recipes,
    getAllRecipes,
    sortRecipes,
    filterRecipes,
    loggedInUserId,
    saveToUsersRecipes,
    createComment,
  } = props;
  const [isVisible, setVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

  useEffect(() => getAllRecipes(), []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="search-page">
        <div className="search-page__wrapper">
          <aside className="search-page__aside">
            <div className="search-page__aside__container">
              <FilterPanelRecipes
                sortRecipes={sortRecipes}
                filterRecipes={filterRecipes}
              />
            </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="search-page__nav__list">
                <li className="list__item">
                  <Link to="/cookbooks">{t('COOKBOOKS')}</Link>
                </li>
                <li className="list__item--selected">{t('RECIPES')}</li>
              </ul>
            </nav>
            <div className="search-page__cards--recipes">
              {recipes.map((el) => (
                <RecipeCard
                  id={el.id}
                  title={el.title}
                  author={el.User}
                  views={el.views}
                  comments={el.Recipe_Comments.length}
                  image={el.image}
                  description={el.description}
                  selectCard={setSelectedCardId}
                  setVisible={setVisible}
                  key={el.id}
                  loggedInUserId={loggedInUserId}
                  saveToUsersRecipes={saveToUsersRecipes}
                  likes={el.Recipe_Likes.length}
                />
              ))}
            </div>
          </div>
          {isVisible ? (
            <PopUpRecipeDetailed
              setVisible={setVisible}
              recipe={recipes.find((el) => el.id === selectedCardId)}
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
