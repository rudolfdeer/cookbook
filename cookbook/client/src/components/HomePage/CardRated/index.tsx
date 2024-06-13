import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SERVER_URL from '../../../constants/serverUrl';
import { Comment, Like, User } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type RecipeCardRatedProps = {
  id: number;
  title: string;
  author: User;
  views: number;
  likes: Like[];
  image: string;
  comments: Comment[];
  loggedInUserId: number;
  setVisible: Dispatch<SetStateAction<boolean>>;
  selectCard: Dispatch<SetStateAction<number>>;
};

export default function CardRated(props: RecipeCardRatedProps): JSX.Element {
  const {
    id,
    views,
    image,
    title,
    author,
    likes,
    comments,
    loggedInUserId,
    setVisible,
    selectCard,
  } = props;
  const { t } = useTranslation();

  const likeUserIds = likes.map((el) => el.UserId);
  const commentedUsersIds = comments.map((el) => el.UserId);

  return (
    <div className="card">
      <div className="card__info-container--top">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} {t('VIEWS')}
        </div>
        <DotsIcon />
      </div>
      <div className="card__image">
        <img src={`${SERVER_URL}/${image}`} alt="Recipe image" />
      </div>
      <div className="card__info-container--middle">
        <div
          className="card__title"
          onClick={() => {
            selectCard(id);
            setVisible(true);
          }}
        >
          {title}
        </div>
        <div className="card__author">{author.name}</div>
      </div>
      <div className="card__info-container--bottom">
        <div className="card__statistics-item">
          <LikesIcon
            likeUserIds={likeUserIds}
            loggedInUserId={loggedInUserId}
            id={id}
          />
          {likes.length} {t('LIKES')}
        </div>
        <div className="card__statistics-item">
          <CommentsIcon
            commentedUsersIds={commentedUsersIds}
            loggedInUserId={loggedInUserId}
          />
          {comments.length} {t('COMMENTS')}
        </div>
      </div>
    </div>
  );
}
