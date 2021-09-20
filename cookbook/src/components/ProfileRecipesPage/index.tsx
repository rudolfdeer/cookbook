import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ActionCreatorFunction, Recipe, User } from '../../interfaces';

import Footer from '../Footer';
import Header from '../Header';
import ProfileRecipeCard from './Card';

import './index.scss';
import ROUTES from '../../constants/routes';
import PopUpCreateRecipe from './PopUp';

type ProfileRecipesPageProps = {
  recipes: Recipe[];
  getUsersCreatedRecipes: Function;
  user: User;
  createRecipe: ActionCreatorFunction;
};

export default function ProfileRecipesPage(
  props: ProfileRecipesPageProps,
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const {
    recipes, user, getUsersCreatedRecipes, createRecipe,
  } = props;
  const {
    name, bio, avatar, id,
  } = user;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => getUsersCreatedRecipes(id), []);
  const photoSrc = avatar || '../../assets/images/photo-mask.png';

  return (
    <>
      <div className="wrapper">
        <Header loggedInUserId={id} />
      </div>
      <main className="profile-recipes-page">
        <div className="wrapper">
          <section className="user">
            <div className="user__photo">
              <img
                src={photoSrc}
                alt="User photo default"
                className="photo__image"
              />
            </div>
            <div className="user__container">
              <div className="user__name">{name}</div>
              <div className="user__bio">{bio}</div>
            </div>
          </section>
          <nav className="profile-page__nav">
            <ul className="nav__list">
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SAVED}>Saved</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_COOKBOOKS}>My Cookbooks</Link>
              </li>
              <li className="list__item_selected">My Recipes</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SETTINGS}>My Settings</Link>
              </li>
            </ul>
            <button className="nav__btn" onClick={() => setVisible(true)}>
              Create New Recipe
            </button>
          </nav>
          <section className="profile-recipes-page__cards recipes">
            {recipes.map((el) => (
              <ProfileRecipeCard
                id={el.id}
                title={el.title}
                authorId={el.userId}
                views={el.views}
                likes={el.likes}
                comments={el.comments.length}
                image={el.image}
                description={el.description}
                key={el.id}
              />
            ))}
          </section>
          {isVisible ? (
            <PopUpCreateRecipe
              userId={id}
              setVisible={setVisible}
              createRecipe={createRecipe}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
