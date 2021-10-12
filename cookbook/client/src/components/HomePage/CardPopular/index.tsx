import React from 'react';
import DotsIcon from '../../svg/Dots';

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
      style={{ background: `url(${image}) center no-repeat` }}
    >
      <DotsIcon />
      <div className="card__name">{title}</div>
    </div>
  );
}
