import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../../constants/interfaces';
import routes from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';
import ProfileRecipeCard from './Card';

import './index.scss';

type ProfileRecipesPageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
};

export default function ProfileRecipesPage(props: ProfileRecipesPageProps): JSX.Element {
  const { recipes, getRecipes } = props;

  useEffect(() => getRecipes(), []);

  return (
    <>
      <div className="wrapper">
        <Header />
        </div>
        <main className="profile-recipes-page">
          <div className="wrapper">
            <section className="user">
              <div className="user__photo">
              </div>
              <div className="user__container">
                <div className="user__name">John Galt</div>
                <div className="user__bio">I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks. </div>
              </div>
            </section>
            <nav className="profile-page__nav">
              <ul className="nav__list">
                <li className="list__item"><Link to={routes['profile.cookbooks']}>My Cookbooks</Link></li>
                <li className="list__item_selected">My Recipes</li>
                <li className="list__item"><Link to={routes.profile}>My Settings</Link></li>
              </ul>
              <button className="nav__btn">Create New Recipe</button>
            </nav>
            <section className="profile-recipes-page__cards recipes">
            {recipes?.map((el) => <ProfileRecipeCard
                                  id = {el.id}
                                  name = {el.name}
                                  author = {el.author}
                                  views = {el.views}
                                  likes = {el.likes}
                                  comments = {el.comments.length}
                                  image = {el.image}
                                  description = {el.description}
                                  key={el.id} />)}

            </section>
          </div>
        </main>
        <Footer/>
    </>
  )
}