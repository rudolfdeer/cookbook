import React, { useState } from 'react';
import api from '../../../helpers/api';

import './index.scss';
import ResultList from './ResultList';

export default function SearchBar(): JSX.Element {
  const users = api.getAllUsers();
  const usersList = users.map((el) => ({
    name: el.name,
    id: el.id,
  }));

  const [searchInput, setSearchInput] = useState('');

  const editSearchInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setSearchInput(value);
  };

  const getResultList = () => {
    const result = usersList.filter((el) =>
      el.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return result;
  };

  return (
    <div className="header__search">
      <div className="header__search__icon" />
      <input
        type="text"
        value={searchInput}
        className="header__search__input"
        onChange={(e) => editSearchInput(e)}
        placeholder="Search users..."
      />
      {searchInput.length > 0 ? (
        <div className="header__search__result">
          <ResultList list={getResultList()} setSearchInput={setSearchInput} />
        </div>
      ) : null}
    </div>
  );
}
