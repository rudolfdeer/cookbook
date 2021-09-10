import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookbook, Recipe } from '../../constants/interfaces';
import Footer from '../Footer';
import Header from '../Header';
import CookbookCard from './Card';
import FilterPanelCookbooks from './FilterPanel';
import PopUpCookbookDetailed from './PopUp';

import './index.scss';

type CookbooksPageProps = {
  cookbooks?: Cookbook[];
  getCookbooks?: Function;
  recipes?: Recipe[];
  getRecipes?: Function;
  sortCookbooks: Function;
  filterCookbooks: Function;
  username?: string;
  userId: number;
};

export default function CookbooksPage(props: CookbooksPageProps): JSX.Element {
  const {
    cookbooks, getCookbooks, recipes, getRecipes, sortCookbooks, filterCookbooks, username, userId,
  } = props;

  const [isVisible, setVisible] = useState(false);
  const [chosenCardId, setChosenCardId] = useState(0);

  useEffect(() => {
    getRecipes();
    getCookbooks();
  }, []);

  function findCard(): Cookbook {
    const card = cookbooks.find((el) => el.id === chosenCardId);
    return card;
  }

  function findRecipes(): Recipe[] {
    const index = chosenCardId - 1;
    const ids = cookbooks[index].recipesIds;

    const recipesSelected = [] as Recipe[];
    ids.forEach((id) => {
      const recipe = recipes.find((el) => el.id === id);
      recipesSelected.push(recipe);
    });
    return recipesSelected;
  }

  return (
    <>
      <div className="wrapper">
        <Header username = {username}/>
      </div>
      <main className="search-page">
        <div className="wrapper">
          <aside className="search-page__aside">
          <div className="aside__container">
            <FilterPanelCookbooks sortCookbooks = {sortCookbooks} filterCookbooks = {filterCookbooks} userId = {userId}/>
          </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="nav__list">
                <li className="list__item_selected">Cookbooks</li>
                <li className="list__item"><Link to="/recipes">Recipes</Link></li>
            </ul>
            </nav>
          <div className="search-page__cards cookbooks">
          {cookbooks?.map((el) => <CookbookCard
                                    id = {el.id}
                                    name = {el.name}
                                    author = {el.author}
                                    views = {el.views}
                                    likes = {el.likes}
                                    comments = {el.comments.length}
                                    image = {el.image}
                                    description = {el.description}
                                    key={el.id}
                                    selectCard = {setChosenCardId}
                                    openDetailedInfo = {setVisible} />)}
          </div>
         </div>
         {isVisible
           ? <PopUpCookbookDetailed
              openDetailedInfo = {setVisible}
              cardInfo = {findCard()}
              recipes = {findRecipes()}/>
           : null}

          </div>
        </main>

      <Footer/>
    </>
  );
}
