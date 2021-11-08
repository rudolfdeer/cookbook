import React, { useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import './index.scss';

type FilterPanelCookbooksProps = {
  sortCookbooks: (order: string) => AnyAction;
  filterCookbooks: (tags: string[], userId: number) => AnyAction;
  loggedInUserId: number;
};

export default function FilterPanelCookbooks(
  props: FilterPanelCookbooksProps,
): JSX.Element {
  const { sortCookbooks, filterCookbooks, loggedInUserId } = props;
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    filterCookbooks(filters, loggedInUserId);
  }, [filters]);

  useEffect(() => {
    sortCookbooks(sortOrder);
  }, [sortOrder]);

  function sort(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setSortOrder(target.value);
  }

  function filter(e: React.MouseEvent) {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (filters.indexOf(value) > -1) {
      const newTagsArr = filters.filter((el) => el !== value);
      setFilters(newTagsArr);
    } else {
      const newTagsArr = filters.concat(value);
      setFilters(newTagsArr);
    }
  }

  function clearAllFilters() {
    setFilters([]);
    setSortOrder('default');
    const checkboxes = document.querySelectorAll('.checkbox__input');
    checkboxes.forEach((el: HTMLInputElement) => (el.checked = false));
  }

  return (
    <div className="filter-panel">
      <div className="filter-panel__container">
        <div className="filter-panel__title">Filter</div>
        <button className="filter-panel__btn" onClick={() => clearAllFilters()}>
          clear all
        </button>
      </div>

      <div className="filter-panel__section">
        <label className="filter-panel__section__title" htmlFor="sort">
          Sort by
        </label>
        <select
          defaultValue={sortOrder}
          className="filter-panel__select"
          name="sort"
          id="sort"
          onChange={(e) => sort(e)}
        >
          <option value="" disabled hidden>
            Choose here
          </option>
          <option value="views">Popularity</option>
          <option value="likes">Rating</option>
        </select>
      </div>

      <div className="filter-panel__section">
        <div className="filter-panel__section__title">Cookbook type</div>
        <div className="filter-panel__section__checkboxes">
          <div className="filter-panel__section__checkboxes__checkbox">
            <input
              type="checkbox"
              className="filter-panel__section__checkboxes__checkbox__input"
              id="vegetarian"
              name="vegetarian"
              value="Vegetarian"
              onClick={(e) => filter(e)}
            />
            <label
              htmlFor="vegetarian"
              className="filter-panel__section__checkboxes__checkbox__label"
            >
              Vegetarian
            </label>
          </div>
          <div className="filter-panel__section__checkboxes__checkbox">
            <input
              type="checkbox"
              className="filter-panel__section__checkboxes__checkbox__input"
              id="nomilk"
              name="nomilk"
              value="Without milk"
              onClick={(e) => filter(e)}
            />
            <label
              htmlFor="nomilk"
              className="filter-panel__section__checkboxes__checkbox__label"
            >
              Without milk
            </label>
          </div>
          <div className="filter-panel__section__checkboxes__checkbox">
            <input
              type="checkbox"
              className="filter-panel__section__checkboxes__checkbox__input"
              id="noeggs"
              name="noeggs"
              value="Without eggs"
              onClick={(e) => filter(e)}
            />
            <label
              htmlFor="noeggs"
              className="filter-panel__section__checkboxes__checkbox__label"
            >
              Without eggs
            </label>
          </div>
        </div>
      </div>

      <div className="filter-panel__section">
        <div className="filter-panel__section__checkboxes__checkbox">
          {loggedInUserId ? (
            <input
              type="checkbox"
              className="filter-panel__section__checkboxes__checkbox__input"
              id="hide"
              name="hide"
              value="hide"
              onClick={(e) => filter(e)}
            />
          ) : (
            <input
              type="checkbox"
              className="filter-panel__section__checkboxes__checkbox__input"
              id="hide"
              name="hide"
              value="hide"
              disabled
            />
          )}
          <label
            htmlFor="hide"
            className="filter-panel__section__checkboxes__checkbox__label"
          >
            Hide my CookBooks
          </label>
        </div>
      </div>
    </div>
  );
}
