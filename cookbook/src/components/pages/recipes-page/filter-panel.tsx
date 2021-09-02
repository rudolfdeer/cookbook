import * as React from 'react';

import './filter-panel.scss';

export default function FilterPanelRecipes(): JSX.Element {
  return (
    <div className="filter-panel recipes">

      <div className="container top">
      <div className="title">Filter</div>
       <button className="btn-clear-all">clear all</button>
      </div>

      <div className="section sort">
        <label className = "section-title" htmlFor="sort">Sort by</label>
          <select name="sort" id="sort" className = "select">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
      </div>
      <div className="section type">
        <div className="section-title">Cooking time</div>

          <div className="range-container">
            <input type="range" className = "range" id="time" name="time" min="0" max="240" step="1"/>
            <div className="values-container">
              <div className="min">1 min</div>
              <div className="max">4 hours</div>
            </div>
          </div>

      </div>
    </div>
  );
}