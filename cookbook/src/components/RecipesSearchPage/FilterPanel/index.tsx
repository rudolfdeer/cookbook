import React from 'react';

export default function FilterPanelRecipes(): JSX.Element {
  return (
    <div className="filter-panel recipes">
      <div className="filter-container top">
      <div className="filter-title">Filter</div>
       <button className="btn-clear-all">clear all</button>
      </div>
      <div className="filter-section sort">
        <label className = "filter-section-title" htmlFor="sort">Sort by</label>
          <select name="sort" id="sort" className = "select">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
      </div>
      <div className="filter-section type">
        <div className="filter-section-title">Cooking time</div>
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