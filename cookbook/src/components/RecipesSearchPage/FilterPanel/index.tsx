import React from 'react';
import './index.scss';

export default function FilterPanelRecipes(): JSX.Element {
  return (
    <div className="filter-panel recipes">
      <div className="filter-panel__container top">
      <div className="filter-panel__title">Filter</div>
       <button className="filter-panel__btn">clear all</button>
      </div>
      <div className="filter-panel__section sort">
        <label className = "section__title" htmlFor="sort">Sort by</label>
          <select name="sort" id="sort" className = "select">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
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