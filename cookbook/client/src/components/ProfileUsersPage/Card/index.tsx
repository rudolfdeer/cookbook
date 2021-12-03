import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type CardCookbookProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  likes: number;
  image: string;
  comments: number;
  setSelectedCookbookId: Dispatch<SetStateAction<number>>;
  setPopUpCookbookVisible: Dispatch<SetStateAction<boolean>>;
};

export default function CardCookbook(props: CardCookbookProps): JSX.Element {
  const { t } = useTranslation();
  const {
    id,
    views,
    image,
    description,
    title,
    authorId,
    likes,
    comments,
    setSelectedCookbookId,
    setPopUpCookbookVisible,
  } = props;

  return (
    <div className="card">
      <div className="card__info-container top">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} views
        </div>
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
            setPopUpCookbookVisible(true);
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
        <div className="card__statistics-item">
          <LikesIcon />
          {likes} {t('LIKES')}
        </div>
        <div className="card__statistics-item">
          <CommentsIcon />
          {comments} {t('COMMENTS')}
        </div>
      </div>
    </div>
  );
}
