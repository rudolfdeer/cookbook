import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../constants/routes';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import Footer from '../Footer';
import CardRated from './CardRated';
import CardTrending from './CardTrending';
import { ICookbook, IRecipe, IUser } from '../../interfaces';
import PopUpRecipeDetailed from '../PopUpRecipe';

import './index.scss';

type HomePageProps = {
  recipes: IRecipe[];
  getAllRecipes: () => Promise<void>;
  cookbooks: ICookbook[];
  getAllCookbooks: () => Promise<void>;
  user: IUser;
  saveToUsersRecipes: (recipeId: number) => Promise<void>;
  createComment: (recipeId: number, text: string) => Promise<void>;
  likeRecipe: (recipeId: number) => Promise<void>;
};

export default function HomePage(props: HomePageProps): JSX.Element {
  const {
    recipes,
    getAllRecipes,
    user,
    saveToUsersRecipes,
    createComment,
    likeRecipe,
  } = props;
  const { t } = useTranslation();
  const [isVisible, setVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(0);

  const navList = t('SEARCH_NAV_LIST', { returnObjects: true }) as string[];

  useEffect(() => {
    getAllRecipes();
  }, []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="page--home">
        <div className="wrapper">
          <div className="page--home__intro">
            <section className="page--home__intro__content">
              <h1 className="page--home__intro__title">{t('MAIN_TITLE')}</h1>
              <div className="page--home__intro__search">
                <div className="page--home__intro__search__icon" />
                <input
                  type="text"
                  className="page--home__intro__search__input"
                  placeholder={t('SEARCH_INPUT_PLACEHOLDER')}
                />
                <button className="page--home__intro__search__btn">
                  {t('SEARCH_BTN')}
                </button>
              </div>
              <nav className="page--home__intro__nav">
                <ul className="page--home__intro__nav__list">
                  {navList.map((el) => (
                    <li
                      className="page--home__intro__nav__list__item"
                      key={navList.indexOf(el)}
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          </div>
          {isVisible ? (
            <PopUpRecipeDetailed
              setVisible={setVisible}
              recipe={recipes?.find((el) => el.id === selectedCardId)}
              loggedInUserId={user.id}
              saveToUsersRecipes={saveToUsersRecipes}
              createComment={createComment}
            />
          ) : null}
          <section className="page--home__section--rated">
            <div className="page--home__section--rated__pre-title">
              {t('RATED_SECTION_PRE_TITLE')}
            </div>
            <h2 className="page--home__section--rated__title">
              {t('RATED_SECTION_TITLE')}
            </h2>
            <div className="page--home__section--rated__cards">
              {recipes
                ?.map((el) => (
                  <CardRated
                    id={el.id}
                    title={el.title}
                    author={el.User}
                    views={el.views}
                    comments={el.Recipe_Comments}
                    image={el.image}
                    key={el.id}
                    likes={el.Recipe_Likes}
                    loggedInUserId={user?.id}
                    setVisible={setVisible}
                    selectCard={setSelectedCardId}
                  />
                ))
                .slice(0, 4)}
            </div>
            <button className="page--home__section--rated__btn">
              <Link to={ROUTES.RECIPES}>{t('SHOW_MORE_BTN')}</Link>
            </button>
          </section>
        </div>
        <section className="page--home__section--trending">
          <div className="page--home__section--trending__wrapper">
            <div className="page--home__section--trending__pre-title">
              {t('TRENDING_SECTION_PRE_TITLE')}
            </div>
            <h2 className="page--home__section--trending__title">
              {t('TRENDING_SECTION_TITLE')}
            </h2>
            <div className="page--home__section--trending__slider">
              <div className="page--home__section--trending__cards">
                {recipes
                  ?.map((el) => (
                    <CardTrending
                      id={el.id}
                      title={el.title}
                      author={el.User}
                      views={el.views}
                      image={el.image}
                      key={el.id}
                      setVisible={setVisible}
                      selectCard={setSelectedCardId}
                    />
                  ))
                  .slice(0, 3)}
              </div>
            </div>
            <button className="page--home__section--trending__btn">
              <Link to={ROUTES.RECIPES}>{t('SHOW_ALL_BTN')}</Link>
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
