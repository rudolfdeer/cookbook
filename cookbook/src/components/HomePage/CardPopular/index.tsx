import React from 'react';

import './index.scss';

type CookbookCardProps = {
  title: string;
  image: string;
};

export default function CardPopular(props: CookbookCardProps): JSX.Element {
  const { image, title } = props;

  return (
    <div
      className="card"
      style={{ background: `url(../../../assets/${image}) center no-repeat` }}
    >
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

      <div className="card__name">{title}</div>
    </div>
  );
}
