import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../interfaces';
import routes from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';
import ProfileRecipeCard from './Card';

import './index.scss';
import ROUTES from '../../constants/routes';

type ProfileRecipesPageProps = {
  recipes?: Recipe[];
  getUsersRecipes?: Function;
  id: number;
  username: string;
  bio: string;
  avatar: string;
  savedRecipes: Recipe[];
};

export default function ProfileRecipesPage(
  props: ProfileRecipesPageProps
): JSX.Element {
  const { recipes, username, bio, avatar, id, getUsersRecipes } = props;

  useEffect(() => getUsersRecipes(id), []);

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
                <Link to={ROUTES.PROFILE_COOKBOOKS}>My Cookbooks</Link>
              </li>
              <li className="list__item_selected">My Recipes</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE}>My Settings</Link>
              </li>
            </ul>
            <button className="nav__btn">Create New Recipe</button>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
