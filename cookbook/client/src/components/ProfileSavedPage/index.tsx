import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import { Cookbook, Recipe, User } from '../../interfaces';

import ROUTES from '../../constants/routes';
import Footer from '../Footer';

import './index.scss';
import ProfileSavedCookbookCard from './CookbookCard';
import ProfileSavedRecipeCard from './RecipeCard';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import PopUpRecipeSaved from './PopUpRecipe';
import api from '../../helpers/api';
import PopUpCookbookSaved from './PopUpCookbook';

type ProfileSavedPageProps = {
  cookbooks: Cookbook[];
  getUsersSavedCookbooks: (userId: number) => AnyAction;
  recipes: Recipe[];
  getUsersSavedRecipes: (userId: number) => AnyAction;
  user: User;
};

export default function ProfileSavedPage(
  props: ProfileSavedPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const {
    cookbooks,
    recipes,
    user,
    getUsersSavedCookbooks,
    getUsersSavedRecipes,
  } = props;

  const { name, bio, avatar, id } = user;
  const photoSrc = avatar || '../../assets/images/photo-mask.png';
  const [isRecipePopUpVisible, setRecipePopUpVisible] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);
  const [isCookbookPopUpVisible, setCookbookPopUpVisible] = useState(false);
  const [selectedCookbookId, setSelectedCookbookId] = useState(0);

  useEffect(() => {
    getUsersSavedRecipes(id);
    getUsersSavedCookbooks(id);
  }, []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-page--saved">
        <div className="wrapper">
          <section className="profile-page--saved__user">
            <div className="profile-page--saved__photo">
              <img
                src={photoSrc}
                alt="User photo default"
                className="profile-page--saved__photo__image"
              />
            </div>
            <div className="profile-page--saved__user__container">
              <div className="profile-page--saved__user__name">{name}</div>
              <div className="profile-page--saved__user__bio">{bio}</div>
            </div>
          </section>
          <nav className="profile-page--saved__nav">
            <ul className="profile-page--saved__nav__list">
              <li className="list__item--selected">Saved</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_COOKBOOKS}>My Cookbooks</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_RECIPES}>My Recipes</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SETTINGS}>My Settings</Link>
              </li>
            </ul>
          </nav>
          <section className="profile-page--saved__container--cards">
            <div className="profile-page--saved__container__title">{`Cookbooks (${cookbooks.length})`}</div>
            <div className="profile-page--saved__cards--cookbooks">
              {cookbooks.map((el) => (
                <ProfileSavedCookbookCard
                  id={el.id}
                  title={el.title}
                  authorId={el.userId}
                  views={el.views}
                  likes={el.likes}
                  comments={el.comments.length}
                  image={el.image}
                  description={el.description}
                  key={el.id}
                  setCookbookPopUpVisible={setCookbookPopUpVisible}
                  setSelectedCookbookId={setSelectedCookbookId}
                />
              ))}
            </div>
          </section>
          <section className="profile-page--saved__container--cards">
            <div className="profile-page--saved__container__title">{`Recipes (${recipes.length})`}</div>
            <div className="profile-page--saved__cards--recipes">
              {recipes.map((el) => (
                <ProfileSavedRecipeCard
                  id={el.id}
                  title={el.title}
                  authorId={el.userId}
                  views={el.views}
                  likes={el.likes}
                  comments={el.comments.length}
                  image={el.image}
                  description={el.description}
                  key={el.id}
                  setRecipePopUpVisible={setRecipePopUpVisible}
                  setSelectedRecipeId={setSelectedRecipeId}
                />
              ))}
            </div>
          </section>
          {isRecipePopUpVisible ? (
            <PopUpRecipeSaved
              loggedInUserId={id}
              setRecipePopUpVisible={setRecipePopUpVisible}
              recipe={api.getRecipe(selectedRecipeId)}
            />
          ) : null}
          {isCookbookPopUpVisible ? (
            <PopUpCookbookSaved
              loggedInUserId={id}
              setCookbookPopUpVisible={setCookbookPopUpVisible}
              cookbook={api.getCookbook(selectedCookbookId)}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}