import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Recipe, User } from '../../interfaces';

import Footer from '../Footer';
import Header from '../Header';
import ProfileRecipeCard from './Card';

import './index.scss';
import ROUTES from '../../constants/routes';
import PopUpCreateRecipe from './PopUp';

type ProfileRecipesPageProps = {
  recipes?: Recipe[];
  getUsersCreatedRecipes?: Function;
  user: User;
  createRecipe: Function;
};

export default function ProfileRecipesPage(
  props: ProfileRecipesPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const { recipes, user, getUsersCreatedRecipes, createRecipe } = props;
  const { username, bio, avatar, id } = user;
  const [isVisible, setVisible] = useState(false);

  useEffect(() => getUsersCreatedRecipes(id), []);

  return (
    <>
      <div className="wrapper">
        <Header username={username} />
      </div>
      <main className="profile-recipes-page">
        <div className="wrapper">
          <section className="user">
            <div
              className="user__photo"
              style={{
                background: `url(../../../assets/${avatar}) center no-repeat`,
              }}
            ></div>
            <div className="user__container">
              <div className="user__name">{username}</div>
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
                name={el.name}
                author={el.userName}
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
