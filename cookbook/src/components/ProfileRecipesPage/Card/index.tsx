import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import api from '../../../helpers/api';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';
import './index.scss';

type ProfileRecipeCardProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  usersLiked: number[];
  image: string;
  comments: number;
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  setSelectedRecipeId: Dispatch<SetStateAction<number>>;
  deleteRecipe: (recipeId: number, userId: number) => AnyAction;
  loggedInUserId: number;
};

export default function ProfileRecipeCard(
  props: ProfileRecipeCardProps
): JSX.Element {
  const {
    id,
    views,
    image,
    description,
    title,
    authorId,

    comments,
    setModifyPopUpVisible,
    setSelectedRecipeId,
    loggedInUserId,
    deleteRecipe,
    usersLiked,
  } = props;

  const [isBtnDeleteVisible, setBtnDeleteVisible] = useState(false);

  const btnDelete = (
    <div className="card__statistics-item__menu">
      <button
        className="card__statistics-item__menu__btn--delete"
        onClick={() => {
          setBtnDeleteVisible(false);
          deleteRecipe(id, loggedInUserId);
        }}
      >
        Delete this recipe
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
              setSelectedRecipeId(id);
              setModifyPopUpVisible(true);
            }}
          >
            {title}
          </div>
          <div className="card__author">{api.getUserName(authorId)}</div>
        </div>
        <div className="card__info-container--description">
          <p className="card__description">{description}</p>
        </div>
        <div className="card__info-container--bottom">
          <div className="card__statistics">
            <div className="card__statistics-item">
              <ViewsIcon />
              {views} views
            </div>
            <div className="card__statistics-item">
              <LikesIcon />
              {usersLiked.length} likes
            </div>
            <div className="card__statistics-item">
              <svg
                className="card__statistics-item__icon"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 15V1.66667C0 0.746192 0.746192 0 1.66667 0H13.3333C14.2538 0 15 0.746192 15 1.66667V10C15 10.9205 14.2538 11.6667 13.3333 11.6667H5C4.63928 11.666 4.28818 11.783 4 12L0 15Z"
                  fill="#DADADA"
                />
              </svg>
              {comments} comments
            </div>
          </div>
          <svg
            className="card__statistics-item__icon--dots"
            width="20"
            height="4"
            viewBox="0 0 20 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setBtnDeleteVisible((prevState) => !prevState);
            }}
          >
            <circle cx="2" cy="2" r="2" fill="#dadada" />
            <circle cx="10" cy="2" r="2" fill="#dadada" />
            <circle cx="18" cy="2" r="2" fill="#dadada" />
          </svg>
          {isBtnDeleteVisible ? btnDelete : null}
        </div>
      </div>
    </div>
  );
}
