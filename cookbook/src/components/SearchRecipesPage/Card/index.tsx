import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';
import './index.scss';

type RecipeCardProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  likes: number;
  usersLiked: number[];
  image: string;
  comments: number;
  selectCard: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
};

export default function RecipeCard(props: RecipeCardProps): JSX.Element {
  const {
    id,
    views,
    image,
    description,
    title,
    authorId,
    likes,
    usersLiked,
    comments,
    setVisible,
    selectCard,
    loggedInUserId,
    saveToUsersRecipes,
  } = props;

  const [isBtnVisible, setBtnVisible] = useState(false);

  const saveRecipe = () => {
    saveToUsersRecipes(id, loggedInUserId);
    setBtnVisible(false);
  };

  const btnClone = (
    <div className="statistics-item__menu">
      <button className="menu__btn_clone" onClick={() => saveRecipe()}>
        Clone to my recipes
      </button>
    </div>
  );

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container top">
          <div
            className="card__title"
            onClick={() => {
              selectCard(id);
              setVisible(true);
            }}
          >
            {title}
          </div>
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
              {usersLiked.length} likes
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments} comments
            </div>
          </div>
          <svg
            className="statistics-item__icon dots"
            width="20"
            height="4"
            viewBox="0 0 20 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setBtnVisible((prevState) => !prevState);
            }}
          >
            <circle cx="2" cy="2" r="2" fill="#dadada" />
            <circle cx="10" cy="2" r="2" fill="#dadada" />
            <circle cx="18" cy="2" r="2" fill="#dadada" />
          </svg>
          {loggedInUserId && isBtnVisible ? btnClone : null}
        </div>
      </div>
    </div>
  );
}
