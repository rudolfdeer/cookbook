import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type ResultListProps = {
  list: { name: string; id: number }[];
};

export default function ResultList(props: ResultListProps): JSX.Element {
  const { list } = props;

  return (
    <ul className="header__search__result__list">
      {list.map((el) => {
        return (
          <li key={el.id} className="header__search__result__list__item">
            <Link to={`/profile/user/${el.id}`}>{el.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
