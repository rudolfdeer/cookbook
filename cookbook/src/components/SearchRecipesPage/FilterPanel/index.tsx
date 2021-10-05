import React, { useState, useEffect } from 'react';
import { AnyAction } from 'redux';
import './index.scss';

type FilterPanelRecipeProps = {
  sortRecipes: (order: string) => AnyAction;
  filterRecipes: (cookingTime: number) => AnyAction;
};

export default function FilterPanelRecipes(
  props: FilterPanelRecipeProps,
): JSX.Element {
  const { sortRecipes, filterRecipes } = props;
  const [sortOrder, setSortOrder] = useState('');
  const [maxCookingTime, setMaxCookingTime] = useState(240);

  useEffect(() => {
    filterRecipes(maxCookingTime);
  }, [maxCookingTime]);

  useEffect(() => {
    sortRecipes(sortOrder);
  }, [sortOrder]);

  function sort(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setSortOrder(target.value);
  }

  function filter(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setMaxCookingTime(+target.value);
  }

  function clearAllFilters() {
    setMaxCookingTime(240);
    setSortOrder('default');
  }

  return (
    <div className="filter-panel recipes">
      <div className="filter-panel__container top">
        <div className="filter-panel__title">Filter</div>
        <button className="filter-panel__btn" onClick={() => clearAllFilters()}>
          clear all
        </button>
      </div>
      <div className="filter-panel__section sort">
        <label className="section__title" htmlFor="sort">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="select"
          defaultValue={sortOrder}
          onChange={(e) => sort(e)}
        >
          <option value="" disabled hidden>
            Choose here
          </option>
          <option value="views">Popularity</option>
          <option value="likes">Rating</option>
        </select>
      </div>
      <div className="filter-panel__section type">
        <div className="section__title">Cooking time</div>
        <div className="section__range">
          <input
            type="range"
            className="range__input"
            id="time"
            name="time"
            min="0"
            max="60"
            step="5"
            value={maxCookingTime}
            onChange={(e) => filter(e)}
          />
          <div className="range__values">
            <div>1 min</div>
            <div>{'>'}1 hour</div>
          </div>
        </div>
      </div>
    </div>
  );
}
