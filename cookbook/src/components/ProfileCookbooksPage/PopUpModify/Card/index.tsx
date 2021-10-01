import React, { Dispatch, SetStateAction } from 'react';
import api from '../../../../helpers/api';
import CommentsIcon from '../../../svg/Comments';
import LikesIcon from '../../../svg/Likes';
import ViewsIcon from '../../../svg/Views';
import './index.scss';

type PopUpRecipeCardProps = {
  title: string;
  authorId: number;
  description: string;
  views: number;
  likes: number;
  image: string;
  comments: number;
  id: number;
  loggedInUserId: number;
  setNewRecipesIds: Dispatch<SetStateAction<number[]>>;
  recipesIds: number[];
};

export default function PopUpRecipeCard(
  props: PopUpRecipeCardProps,
): JSX.Element {
  const {
    views,
    image,
    description,
    title,
    authorId,
    likes,
    comments,
    id,
    setNewRecipesIds,
    recipesIds,
  } = props;

  const deleteRecipeFromCookbook = (recipeId: number) => {
    const newRecipesIds = recipesIds.filter((el) => el !== recipeId);
    setNewRecipesIds(newRecipesIds);
  };

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container top">
          <div className="card__title">{title}</div>
          <div className="card__author">{api.getUserName(authorId)}</div>
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
            <button
              className="card__btn--delete"
              onClick={() => deleteRecipeFromCookbook(id)}
            >
              Delete from this cookbook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
