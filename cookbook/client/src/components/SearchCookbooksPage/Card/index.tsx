import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { IUser } from '../../../interfacesServer';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type CookbookCardProps = {
  id: number;
  title: string;
  author: IUser;
  description: string;
  views: number;
  image: string;
  comments: number;
  likes: number;
  selectCard: Dispatch<SetStateAction<number>>;
  openDetailedInfo: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
  // likeCookbook: (userId: number, cookbookId: number) => AnyAction;
};

export default function CookbookCard(props: CookbookCardProps): JSX.Element {
  const { t } = useTranslation();
  const {
    id,
    views,
    image,
    description,
    title,
    author,
    likes,
    comments,
    openDetailedInfo,
    selectCard,
    // likeCookbook,
  } = props;

  return (
    <div className="card">
      <div className="card__info-container top">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} {t('VIEWS')}
        </div>
        <DotsIcon />
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
            selectCard(id);
            openDetailedInfo(true);
          }}
        >
          {title}
        </div>
        <div className="card__author">{author.name}</div>
      </div>

      <div className="card__info-container--description">
        <p className="card__description">{description}</p>
      </div>

      <div className="card__info-container--bottom">
        <div className="card__statistics-item likes">
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
