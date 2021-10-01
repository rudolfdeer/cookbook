import React from 'react';
import { AnyAction } from 'redux';
import api from '../../../../helpers/api';
import CommentsIcon from '../../../svg/Comments';
import LikesIcon from '../../../svg/Likes';
import ViewsIcon from '../../../svg/Views';
import './index.scss';

type PopUpRecipeCardProps = {
  title: string;
  userId: number;
  description: string;
  views: number;
  likes: number;
  image: string;
  comments: number;
  id: number;
  loggedInUserId: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
};

export default function PopUpRecipeCard(
  props: PopUpRecipeCardProps,
): JSX.Element {
  const {
    views,
    image,
    description,
    title,
    userId,
    likes,
    comments,
    id,
    loggedInUserId,
    saveToUsersRecipes,
  } = props;

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container top">
          <div className="card__title">{title}</div>
          <div className="card__author">{api.getUserName(userId)}</div>
        </div>
        <div className="card__info-container description">
          <p className="card__description">{description}</p>
        </div>
        <div className="card__info-container bottom">
          <div className="statistics">
            <div className="card__statistics-item views">
              <ViewsIcon />
              {views} views
            </div>
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} likes
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments} comments
            </div>
          </div>
          {loggedInUserId && loggedInUserId !== userId ? (
            <button
              className="card__btn"
              onClick={() => {
                saveToUsersRecipes(id, loggedInUserId);
              }}
            >
              Save
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
