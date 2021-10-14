import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type ProfileCookbookCardProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  usersLiked: number[];
  image: string;
  comments: number;
  setSelectedCookbookId: Dispatch<SetStateAction<number>>;
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
  deleteCookbook: (cookbookId: number, userId: number) => AnyAction;
};

export default function ProfileCookbookCard(
  props: ProfileCookbookCardProps
): JSX.Element {
  const {
    id,
    views,
    image,
    description,
    title,
    authorId,
    usersLiked,
    comments,
    setSelectedCookbookId,
    setModifyPopUpVisible,
    deleteCookbook,
    loggedInUserId,
  } = props;

  const [isBtnDeleteVisible, setBtnDeleteVisible] = useState(false);

  const btnDelete = (
    <div className="card__statistics-item__menu">
      <button
        className="card__statistics-item__menu__btn"
        onClick={() => {
          setBtnDeleteVisible(false);
          deleteCookbook(id, loggedInUserId);
        }}
      >
        Delete this cookbook
      </button>
    </div>
  );

  return (
    <div className="card">
      <div className="card__info-container">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} views
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
      <div className="card__info-container">
        <div
          className="card__image"
          style={{
            background: `url(${image}) center no-repeat`,
          }}
        ></div>
      </div>

      <div className="card__info-container">
        <div
          className="card__title"
          onClick={() => {
            setSelectedCookbookId(id);
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
        <div className="card__statistics-item likes">
          <LikesIcon />
          {usersLiked.length} likes
        </div>
        <div className="card__statistics-item">
          <CommentsIcon />
          {comments} comments
        </div>
      </div>
    </div>
  );
}