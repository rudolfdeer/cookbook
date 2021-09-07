import React from 'react';
import './index.scss';

export default function FilterPanelCookbooks(): JSX.Element {
  return (
    <div className="filter-panel cookbooks">
      <div className="filter-panel__container top">
      <div className="filter-panel__title">Filter</div>
       <button className="filter-panel__btn">clear all</button>
      </div>

      <div className="filter-panel__section sort">
        <label className = "section__title" htmlFor="sort">Sort by</label>
          <select className = "select" name="sort" id="sort">
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
          </select>
      </div>

      <div className="filter-panel__section type">
        <div className="section__title">Cookbook type</div>
        <div className="section__checkboxes">
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="vegetarian" name="vegetarian" value="Vegetarian"/>
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="nomilk" name="nomilk" value="Without milk"/>
            <label htmlFor="nomilk">Without milk</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="noeggs" name="noeggs" value="Without eggs"/>
            <label htmlFor="noeggs">Without eggs</label>
          </div>
          </div>
      </div>

      <div className="filter-panel__section hide">
        <div className="checkbox">
          <input type="checkbox" className = "checkbox__input"id="hide" name="hide" value="hide"/>
          <label htmlFor="hide">Hide my CookBooks</label>
        </div>
      </div>
    </div>
  );
}
