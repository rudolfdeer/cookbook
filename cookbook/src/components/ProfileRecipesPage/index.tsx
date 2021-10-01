import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import { Recipe, User } from '../../interfaces';

import Footer from '../Footer';
import ProfileRecipeCard from './Card';

import './index.scss';
import ROUTES from '../../constants/routes';
import PopUpCreateRecipe from './PopUpCreate';
import PopUpModifyRecipe from './PopUpModify';
import api from '../../helpers/api';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import { RecipeValues } from '../../redux/actions/recipes';

type ProfileRecipesPageProps = {
  recipes: Recipe[];
  getUsersCreatedRecipes: (userId: number) => void;
  user: User;
  createRecipe: (
    data: RecipeValues,
    userId: number,
    imageSrc: string
  ) => AnyAction;
  modifyRecipe: (
    data: RecipeValues,
    recipeId: number,
    imageSrc: string,
    userId: number
  ) => AnyAction;
  deleteRecipe: (recipeId: number, userId: number) => AnyAction;
};

export default function ProfileRecipesPage(
  props: ProfileRecipesPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const {
    recipes,
    user,
    getUsersCreatedRecipes,
    createRecipe,
    modifyRecipe,
    deleteRecipe,
  } = props;
  const { name, bio, avatar, id } = user;
  const [isCreatePopUpVisible, setCreatePopUpVisible] = useState(false);
  const [isModifyPopUpVisible, setModifyPopUpVisible] = useState(false);
  const [selectedRecipeId, setSelectedRecipeId] = useState(0);

  useEffect(() => getUsersCreatedRecipes(id), []);
  const photoSrc = avatar || '../../assets/images/photo-mask.png';

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
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
              <li className="list__item--selected">My Recipes</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SETTINGS}>My Settings</Link>
              </li>
            </ul>
            <button
              className="nav__btn"
              onClick={() => setCreatePopUpVisible(true)}
            >
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
                setModifyPopUpVisible={setModifyPopUpVisible}
                setSelectedRecipeId={setSelectedRecipeId}
                deleteRecipe={deleteRecipe}
                loggedInUserId={id}
              />
            ))}
          </section>
          {isCreatePopUpVisible ? (
            <PopUpCreateRecipe
              loggedInUserId={id}
              setCreatePopUpVisible={setCreatePopUpVisible}
              createRecipe={createRecipe}
            />
          ) : null}

          {isModifyPopUpVisible ? (
            <PopUpModifyRecipe
              loggedInUserId={id}
              setModifyPopUpVisible={setModifyPopUpVisible}
              selectedRecipe={api.getRecipe(selectedRecipeId)}
              modifyRecipe={modifyRecipe}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
