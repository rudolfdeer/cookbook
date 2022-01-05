import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import debounce from 'lodash/debounce';
import api from '../../../helpers/api';

import { ISearchListItem } from '../../../interfaces';
import './index.scss';
import ResultList from './ResultList';

export default function SearchBar(): JSX.Element {
  const { t } = useTranslation();
  const [users, setUsers] = useState(null as ISearchListItem[]);
  const [searchInput, setSearchInput] = useState('');
  const [list, setList] = useState([]);

  const usersList = users?.map((el) => ({
    name: el.name,
    id: el.id,
  }));

  useEffect(() => {
    (async () => {
      const response = await api.getAllUsers();
      setUsers(response);
    })();
  }, []);

  const getResultList = () => {
    const result = usersList.filter((el) => el.name.toLowerCase().includes(searchInput.toLowerCase()));
    return result;
  };

  const editSearchInput = (e: any): any => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    setSearchInput(value);
  };

  return (
    <div className="header__search">
      <div className="header__search__icon" />
      <input
        type="text"
        value={searchInput}
        className="header__search__input"
        onChange={(e) => {
          editSearchInput(e);
          debounce(() => setList(getResultList()), 2000)();
        } }
        placeholder={t('SEARCH_USERS')}
      />
      {searchInput.length > 0 && list.length > 0 ? (
        <div className="header__search__result">
          <ResultList list={list} setSearchInput={setSearchInput} />
        </div>
      ) : null}
    </div>
  );
}
