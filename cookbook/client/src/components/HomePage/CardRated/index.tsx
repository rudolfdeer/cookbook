import React from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type RecipeCardRatedProps = {
  title: string;
  authorId: number;
  views: number;
  likes: number;
  image: string;
  comments: number;
  usersLiked: number[];
};

export default function CardRated(props: RecipeCardRatedProps): JSX.Element {
  const { t } = useTranslation();
  const { views, image, title, authorId, likes, comments, usersLiked } = props;

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
        <div className="card__author">{api.getUserName(authorId)}</div>
      </div>

      <div className="card__info-container--bottom">
        <div className="card__statistics-item">
          <LikesIcon />
          {usersLiked.length} {t('LIKES')}
        </div>
        <div className="card__statistics-item">
          <CommentsIcon />
          {comments} {t('COMMENTS')}
        </div>
      </div>
    </div>
  );
}
