import React from 'react';
import api from '../../../helpers/api';
import DotsIcon from '../../svg/Dots';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type RecipeCardTrendingProps = {
  title: string;
  authorId: number;
  views: number;
  image: string;
};

export default function CardTrending(
  props: RecipeCardTrendingProps
): JSX.Element {
  const { views, image, title, authorId } = props;

  return (
    <div className="card">
      <div className="card__info-container">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} views
        </div>
        <DotsIcon />
      </div>

      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>

      <div className="card__info-container--bottom">
        <div className="card__title">{title}</div>
        <div className="card__author">{api.getUserName(authorId)}</div>
      </div>
    </div>
  );
}