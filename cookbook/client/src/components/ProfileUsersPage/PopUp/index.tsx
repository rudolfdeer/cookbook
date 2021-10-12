import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../constants/routes';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';

import './index.scss';
import PopUpRecipeCard from './RecipeCard';

type PopUpCookbookProps = {
  setPopUpCookbookVisible: Dispatch<SetStateAction<boolean>>;
  cookbook: Cookbook;
};

export default function PopUpCookbook(props: PopUpCookbookProps): JSX.Element {
  const { setPopUpCookbookVisible, cookbook } = props;
  const { image, description, title, userId, likes, comments, recipesIds } =
    cookbook;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('overlay__btn')
    ) {
      setPopUpCookbookVisible(false);
    }
  }

  const recipes = api.getRecipesInCookbook(recipesIds);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--users-cookbook">
          <div className="pop-up--users-cookbook__section--top">
            <div className="pop-up--users-cookbook__title">{title}</div>
          </div>

          <div className="pop-up--users-cookbook__author">
            <Link to={`${ROUTES.PROFILE_USER}/${userId}`}>
              {api.getUserName(userId)}
            </Link>
          </div>

          <div className="pop-up--users-cookbook__section--description">
            <div
              className="pop-up--users-cookbook__image"
              style={{
                background: `url(${image}) center no-repeat`,
              }}
            ></div>
            <div className="pop-up--users-cookbook__section--description__text">
              <div className="pop-up--users-cookbook__section__title">
                Description
              </div>
              <p>{description}</p>
            </div>
          </div>

          <div className="pop-up--users-cookbook__section--statistics">
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} likes
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments.length} comments
            </div>
          </div>
          <div className="pop-up--users-cookbook__section--recipes">
            <div className="pop-up--users-cookbook__section__title">
              Recipes
            </div>
            <div className="pop-up--users-cookbook__section--recipes__cards">
              {recipes?.map((el) => (
                <PopUpRecipeCard
                  title={el.title}
                  userId={el.userId}
                  views={el.views}
                  description={el.description}
                  likes={el.likes}
                  image={el.image}
                  comments={el.comments.length}
                  key={el.id}
                  setPopUpCookbookVisible={setPopUpCookbookVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
