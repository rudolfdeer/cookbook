import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActionCreatorFunction, Cookbook, Recipe } from '../../interfaces';
import Footer from '../Footer';
import Header from '../Header';
import CookbookCard from './Card';
import FilterPanelCookbooks from './FilterPanel';
import PopUpCookbookDetailed from './PopUp';

import './index.scss';
import api from '../../helpers/api';

type CookbooksPageProps = {
  cookbooks: Cookbook[];
  getAllCookbooks: Function;
  recipes: Recipe[];
  getAllRecipes: Function;
  sortCookbooks: ActionCreatorFunction;
  filterCookbooks: ActionCreatorFunction;
  saveToUsersCookbooks: ActionCreatorFunction;
  saveToUsersRecipes: ActionCreatorFunction;
  loggedInUserId: number;
  createComment: ActionCreatorFunction;
};

export default function CookbooksPage(props: CookbooksPageProps): JSX.Element {
  const {
    cookbooks,
    getAllCookbooks,
    getAllRecipes,
    sortCookbooks,
    filterCookbooks,
    loggedInUserId,
    saveToUsersCookbooks,
    saveToUsersRecipes,
    createComment,
  } = props;

  const [isVisible, setVisible] = useState(false);
  const [chosenCardId, setChosenCardId] = useState(0);

  useEffect(() => {
    getAllRecipes();
    getAllCookbooks();
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header loggedInUserId={loggedInUserId} />
      </div>
      <main className="search-page">
        <div className="wrapper">
          <aside className="search-page__aside">
            <div className="aside__container">
              <FilterPanelCookbooks
                sortCookbooks={sortCookbooks}
                filterCookbooks={filterCookbooks}
                loggedInUserId={loggedInUserId}
              />
            </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="nav__list">
                <li className="list__item_selected">Cookbooks</li>
                <li className="list__item">
                  <Link to="/recipes">Recipes</Link>
                </li>
              </ul>
            </nav>
            <div className="search-page__cards cookbooks">
              {cookbooks?.map((el) => (
                <CookbookCard
                  id={el.id}
                  title={el.title}
                  authorId={el.userId}
                  views={el.views}
                  likes={el.likes}
                  comments={el.comments.length}
                  image={el.image}
                  description={el.description}
                  key={el.id}
                  selectCard={setChosenCardId}
                  openDetailedInfo={setVisible}
                />
              ))}
            </div>
          </div>
          {isVisible ? (
            <PopUpCookbookDetailed
              setVisible={setVisible}
              cookbook={api.getCookbook(chosenCardId)}
              loggedInUserId={loggedInUserId}
              saveToUsersCookbooks={saveToUsersCookbooks}
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
