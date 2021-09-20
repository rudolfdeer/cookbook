import React from 'react';
import api from '../../../helpers/api';

import './index.scss';

type RecipeCardTrendingProps = {
  title: string;
  authorId: number;
  views: number;
  image: string;
};

export default function CardTrending(
  props: RecipeCardTrendingProps,
): JSX.Element {
  const {
    views, image, title, authorId,
  } = props;

  return (
    <div className="card">
      <div className="card__info-container top">
        <div className="card__statistics-item">
          <svg
            className="statistics-item__icon"
            width="16"
            height="11"
            viewBox="0 0 16 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.2032 10.1859C5.38936 10.7369 6.6879 11.015 8 10.999C11.4994 11.0534 14.661 8.95625 15.916 5.74806L16 5.49981L15.92 5.25156C15.5332 4.27221 14.9594 3.37443 14.2296 2.60647C13.5419 1.86266 12.7163 1.25425 11.7968 0.813744C10.6106 0.262746 9.31209 -0.0153351 8 0.000654691C6.6879 -0.0153627 5.38937 0.26272 4.2032 0.813744C3.28403 1.25435 2.45867 1.86276 1.7712 2.60647C1.04499 3.37656 0.472652 4.27384 0.084 5.25156L0 5.49981L0.08 5.74806C0.468374 6.72664 1.04195 7.62415 1.7704 8.39315C2.45812 9.13693 3.28375 9.74533 4.2032 10.1859ZM7.99999 7.85656C6.84585 7.86407 5.84748 7.0689 5.61676 5.95839C5.38604 4.84789 5.9874 3.73222 7.05229 3.29514C8.11719 2.85807 9.34818 3.22167 9.99082 4.1631C10.6335 5.10453 10.5083 6.36086 9.69199 7.1621C9.24504 7.60616 8.63579 7.85622 7.99999 7.85656Z"
              fill="#DADADA"
            />
          </svg>
          {views} views
        </div>
        <svg
          className="statistics-item__icon dots"
          width="20"
          height="4"
          viewBox="0 0 20 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="#dadada" />
          <circle cx="10" cy="2" r="2" fill="#dadada" />
          <circle cx="18" cy="2" r="2" fill="#dadada" />
        </svg>
      </div>

      <div
        className="card__image"
        style={{ background: `url(../../../assets/${image}) center no-repeat` }}
      ></div>

      <div className="card__info-container bottom">
        <div className="card__title">{title}</div>
        <div className="card__author">{api.getUserName(authorId)}</div>
      </div>
    </div>
  );
}
