import React from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type RecipeCardRatedProps = {
  id: number;
  title: string;
  author: IUser;
  views: number;
  likes: {
    RecipeId: number;
    UserId: number;
  }[];
  image: string;
  comments: number;
  loggedInUserId: number;
};

export default function CardRated(props: RecipeCardRatedProps): JSX.Element {
  const { t } = useTranslation();
  const {
    id, views, image, title, author, likes, comments, loggedInUserId,
  } = props;

  const likeUserIds = likes.map((el) => el.UserId);

  return (
    <div className="card">
      <div className="card__info-container--top">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} {t('VIEWS')}
        </div>
        <DotsIcon />
      </div>

      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>

      <div className="card__info-container--middle">
        <div className="card__title">{title}</div>
        <div className="card__author">{author.name}</div>
      </div>

      <div className="card__info-container--bottom">
        <div className="card__statistics-item">
          <LikesIcon likeUserIds = {likeUserIds} loggedInUserId={loggedInUserId} id = {id}/>
          {likes.length} {t('LIKES')}
        </div>
        <div className="card__statistics-item">
          <CommentsIcon />
          {comments} {t('COMMENTS')}
        </div>
      </div>
    </div>
  );
}
