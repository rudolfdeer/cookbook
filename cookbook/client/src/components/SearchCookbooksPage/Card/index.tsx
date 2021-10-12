import React, { Dispatch, SetStateAction } from 'react';
import { AnyAction } from 'redux';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/LikesIconCookbook';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type CookbookCardProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  image: string;
  comments: number;
  usersLiked: number[];
  selectCard: Dispatch<SetStateAction<number>>;
  openDetailedInfo: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
  likeCookbook: (userId: number, cookbookId: number) => AnyAction;
};

export default function CookbookCard(props: CookbookCardProps): JSX.Element {
  const {
    id,
    views,
    image,
    description,
    title,
    authorId,
    usersLiked,
    comments,
    openDetailedInfo,
    selectCard,
    loggedInUserId,
    likeCookbook,
  } = props;

  return (
    <div className="card">
      <div className="card__info-container top">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} views
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
        <div className="card__author">{api.getUserName(authorId)}</div>
      </div>

      <div className="card__info-container--description">
        <p className="card__description">{description}</p>
      </div>

      <div className="card__info-container--bottom">
        <div className="card__statistics-item likes">
          <LikesIcon
            cookbookId={id}
            likeCookbook={likeCookbook}
            loggedInUserId={loggedInUserId}
          />
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
