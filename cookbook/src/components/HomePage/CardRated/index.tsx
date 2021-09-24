import React from 'react';
import api from '../../../helpers/api';

import './index.scss';

type RecipeCardRatedProps = {
  title: string;
  authorId: number;
  views: number;
  likes: number;
  image: string;
  comments: number;
};

export default function CardRated(props: RecipeCardRatedProps): JSX.Element {
  const {
    views, image, title, authorId, likes, comments,
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
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>

      <div className="card__info-container middle">
        <div className="card__title">{title}</div>
        <div className="card__author">{api.getUserName(authorId)}</div>
      </div>

      <div className="card__info-container bottom">
        <div className="card__statistics-item likes">
          <svg
            className="statistics-item__icon"
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 14.9933C7.95175 14.5169 7.3321 14.0213 6.67675 13.4941H6.66825C4.36051 11.645 1.74507 9.55276 0.589918 7.0457C0.210409 6.24754 0.00928776 5.37915 9.69506e-06 4.49866C-0.00252482 3.29051 0.491974 2.13234 1.37175 1.28592C2.25153 0.439505 3.44233 -0.0237223 4.67501 0.000936424C5.67854 0.00248964 6.66046 0.286693 7.5038 0.819688C7.87437 1.05538 8.20966 1.34047 8.5 1.66676C8.79196 1.34175 9.12734 1.05682 9.49705 0.819688C10.34 0.286587 11.3217 0.00236782 12.325 0.000936424C13.5577 -0.0237223 14.7485 0.439505 15.6282 1.28592C16.508 2.13234 17.0025 3.29051 17 4.49866C16.9913 5.38056 16.7902 6.25043 16.4101 7.04986C15.2549 9.55693 12.6403 11.6484 10.3326 13.4941L10.3241 13.5008C9.6679 14.0247 9.0491 14.5202 8.50085 15L8.5 14.9933Z"
              fill="#DADADA"
            />
          </svg>
          {likes} likes
        </div>
        <div className="card__statistics-item">
          <svg
            className="statistics-item__icon"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 15V1.66667C0 0.746192 0.746192 0 1.66667 0H13.3333C14.2538 0 15 0.746192 15 1.66667V10C15 10.9205 14.2538 11.6667 13.3333 11.6667H5C4.63928 11.666 4.28818 11.783 4 12L0 15Z"
              fill="#DADADA"
            />
          </svg>
          {comments} comments
        </div>
      </div>
    </div>
  );
}
