import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Cookbook, Recipe, User } from '../../interfaces';

import ROUTES from '../../constants/routes';
import Footer from '../Footer';

import './index.scss';
import ProfileSavedCookbookCard from './CookbookCard';
import ProfileSavedRecipeCard from './RecipeCard';
import HeaderConnect from '../../redux/containers/HeaderConnect';

type ProfileSavedPageProps = {
  cookbooks: Cookbook[];
  getUsersSavedCookbooks: Function;
  recipes: Recipe[];
  getUsersSavedRecipes: Function;
  user: User;
};

export default function ProfileSavedPage(
  props: ProfileSavedPageProps,
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

  const {
    name, bio, avatar, id,
  } = user;
  const photoSrc = avatar || '../../assets/images/photo-mask.png';

  useEffect(() => {
    getUsersSavedRecipes(id);
    getUsersSavedCookbooks(id);
  }, []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-cookbooks-page">
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
          <section className="profile-saved-page__cards">
            <div className="saved-section__title">{`Cookbooks (${cookbooks.length})`}</div>
            <div className="saved-section__cards">
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
                />
              ))}
            </div>
          </section>
          <section className="profile-saved-page__cards">
            <div className="saved-section__title">{`Recipes (${recipes.length})`}</div>
            <div className="saved-section__cards">
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
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
