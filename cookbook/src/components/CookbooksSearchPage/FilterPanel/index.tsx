import React from 'react';
import './index.scss';

export default function FilterPanelCookbooks(): JSX.Element {
  return (
    <div className="filter-panel cookbooks">
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
        <div className="filter-section-title">Cookbook type</div>
        <div className="checkboxes">
          <div className="checkbox-container">
            <input type="checkbox" className = "checkbox" id="vegetarian" name="vegetarian" value="Vegetarian"/>
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className = "checkbox" id="nomilk" name="nomilk" value="Without milk"/>
            <label htmlFor="nomilk">Without milk</label>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className = "checkbox" id="noeggs" name="noeggs" value="Without eggs"/>
            <label htmlFor="noeggs">Without eggs</label>
          </div>
          </div>
      </div>

      <div className="filter-section hide">
        <div className="checkbox-container">
          <input type="checkbox" className = "checkbox"id="hide" name="hide" value="hide"/>
          <label htmlFor="hide">Hide my CookBooks</label>
        </div>
      </div>
    </div>
  );
}
