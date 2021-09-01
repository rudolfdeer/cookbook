import * as React from 'react';

import './cookbook-card.scss';

type CookbookCardProps = {
  name: string;
  image: string;
}

export default function CookbookCard(props: CookbookCardProps): JSX.Element {
  const { image, name } = props;

  return (
    <div className="cookbook-card" style ={{ background: `url(../../../public/${image}) center no-repeat` }}>

      <svg className = "icon-more" width="20" height="4" viewBox="0 0 20 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2" cy="2" r="2" fill="#dadada"/><circle cx="10" cy="2" r="2" fill="#dadada"/><circle cx="18" cy="2" r="2" fill="#dadada"/>
      </svg>

      <div className="cookbook-card-name">
      {name}
      </div>

    </div>
  )
}