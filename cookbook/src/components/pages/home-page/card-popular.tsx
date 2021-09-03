import React from 'react';

type CookbookCardProps = {
  name: string;
  image: string;
};

export default function CardPopular(props: CookbookCardProps): JSX.Element {
  const { image, name } = props;

  return (
    <div className="card" style ={{ background: `url(../../../public/${image}) center no-repeat` }}>

      <svg className = "statistics-item-icon dots" width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#dadada"/><circle cx="10" cy="2" r="2" fill="#dadada"/><circle cx="18" cy="2" r="2" fill="#dadada"/>
      </svg>

      <div className="card-name">
      {name}
      </div>

    </div>
  );
}
