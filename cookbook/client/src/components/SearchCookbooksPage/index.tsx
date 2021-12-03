import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import { Cookbook, Recipe } from '../../interfaces';
import Footer from '../Footer';
import CookbookCard from './Card';
import FilterPanelCookbooks from './FilterPanel';
import PopUpCookbookDetailed from './PopUp';
import './index.scss';
import api from '../../helpers/api';
import HeaderConnect from '../../redux/containers/HeaderConnect';

type CookbooksPageProps = {
  cookbooks: Cookbook[];
  getAllCookbooks: () => AnyAction;
  recipes: Recipe[];
  getAllRecipes: () => AnyAction;
  sortCookbooks: (order: string) => AnyAction;
  filterCookbooks: (tags: string[], userId: number) => AnyAction;
  saveToUsersCookbooks: (cookbookId: number, userId: number) => AnyAction;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
  loggedInUserId: number;
  createComment: (
    cookbookId: number,
    userId: number,
    commentText: string
  ) => AnyAction;
  likeCookbook: (userId: number, cookbookId: number) => AnyAction;
};

export default function CookbooksPage(props: CookbooksPageProps): JSX.Element {
  const { t } = useTranslation();
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
    likeCookbook,
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
        <HeaderConnect />
      </div>
      <main className="search-page">
        <div className="search-page__wrapper">
          <aside className="search-page__aside">
            <div className="search-page__aside__container">
              <FilterPanelCookbooks
                sortCookbooks={sortCookbooks}
                filterCookbooks={filterCookbooks}
                loggedInUserId={loggedInUserId}
              />
            </div>
          </aside>
          <div className="search-page__content">
            <nav className="search-page__nav">
              <ul className="search-page__nav__list">
                <li className="list__item--selected">{t('COOKBOOKS')}</li>
                <li className="list__item">
                  <Link to="/recipes">{t('RECIPES')}</Link>
                </li>
              </ul>
            </nav>
            <div className="search-page__cards--cookbooks">
              {cookbooks?.map((el) => (
                <CookbookCard
                  id={el.id}
                  title={el.title}
                  authorId={el.userId}
                  views={el.views}
                  usersLiked={el.usersLiked}
                  comments={el.comments.length}
                  image={el.image}
                  description={el.description}
                  key={el.id}
                  selectCard={setChosenCardId}
                  openDetailedInfo={setVisible}
                  likeCookbook={likeCookbook}
                  loggedInUserId={loggedInUserId}
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
              likeCookbook={likeCookbook}
            />
          ) : null}
        </div>
      </main>

      <Footer />
    </>
  );
}
