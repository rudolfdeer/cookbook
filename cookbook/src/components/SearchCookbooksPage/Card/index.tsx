import React, { Dispatch, SetStateAction } from 'react';
import api from '../../../helpers/api';
import CommentsIcon from '../../svg/Comments';
import DotsIcon from '../../svg/Dots';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type CookbookCardProps = {
  id: number;
  title: string;
  authorId: number;
  description: string;
  views: number;
  likes: number;
  image: string;
  comments: number;
  usersLiked: number[];
  selectCard: Dispatch<SetStateAction<number>>;
  openDetailedInfo: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
};

export default function CookbookCard(props: CookbookCardProps): JSX.Element {
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
    openDetailedInfo,
    selectCard,
    loggedInUserId,
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

      <div className="card__info-container middle">
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

      <div className="card__info-container description">
        <p className="card__description">{description}</p>
      </div>

      <div className="card__info-container bottom">
        <div className="card__statistics-item likes">
          <LikesIcon loggedInUserId={loggedInUserId} usersLiked={usersLiked} />
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
