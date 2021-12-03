import React from 'react';
import { useTranslation } from 'react-i18next';
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
};

export default function PopUpRecipeCard(
  props: PopUpRecipeCardProps
): JSX.Element {
  const { t } = useTranslation();
  const { views, image, description, title, authorId, likes, comments } = props;

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container">
          <div className="card__title">{title}</div>
          <div className="card__author">{api.getUserName(authorId)}</div>
        </div>
        <div className="card__info-container--description">
          <p className="card__description">{description}</p>
        </div>
        <div className="card__info-container--bottom">
          <div className="card__statistics">
            <div className="card__statistics-item views">
              <ViewsIcon />
              {views} {t('VIEWS')}
            </div>
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} {t('LIKES')}
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments} {t('COMMENTS')}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
