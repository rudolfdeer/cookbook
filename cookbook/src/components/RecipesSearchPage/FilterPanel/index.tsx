import React, { useState } from 'react';
import './index.scss';

type FilterPanelRecipeProps = {
  sortRecipes: Function;
};

export default function FilterPanelRecipes(props: FilterPanelRecipeProps): JSX.Element {
  const { sortRecipes } = props;
  const [sortOrder, setSortOrder] = useState('');

  function sort(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setSortOrder(target.value);
    sortRecipes(target.value);
  }

  return (
    <div className="filter-panel recipes">
      <div className="filter-panel__container top">
      <div className="filter-panel__title">Filter</div>
       <button className="filter-panel__btn">clear all</button>
      </div>
      <div className="filter-panel__section sort">
        <label className = "section__title" htmlFor="sort">Sort by</label>
          <select name="sort" id="sort" className = "select" value = {sortOrder} onChange = {(e) => sort(e)}>
            <option value="views">Popularity</option>
            <option value="likes">Rating</option>
          </select>
      </div>
      <div className="filter-panel__section type">
        <div className="section__title">Cooking time</div>
          <div className="section__range">
            <input type="range" className = "range__input" id="time" name="time" min="0" max="240" step="1"/>
            <div className="range__values">
              <div>1 min</div>
              <div>4 hours</div>
            </div>
          </div>
      </div>
    </div>
  );
}
