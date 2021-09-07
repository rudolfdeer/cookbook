import React, { useState } from 'react';
import './index.scss';

type FilterPanelCookbooksProps = {
  sortCookbooks: Function;
  filterCookbooks: Function;
};

export default function FilterPanelCookbooks(props: FilterPanelCookbooksProps): JSX.Element {
  const { sortCookbooks, filterCookbooks } = props;
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState([]);

  function sort(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    setSortOrder(target.value);
    sortCookbooks(target.value);
  }

  function filter(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const { value } = target;

    if (filters.indexOf(value) > -1) {
      const newTagsArr = filters.filter((el) => el !== value);
      setFilters(newTagsArr);
      filterCookbooks(filters);
    } else {
      setFilters(filters.concat(value));
      filterCookbooks(filters);
    }

    
  }

  return (
    <div className="filter-panel cookbooks">
      <div className="filter-panel__container top">
      <div className="filter-panel__title">Filter</div>
       <button className="filter-panel__btn">clear all</button>
      </div>

      <div className="filter-panel__section sort">
        <label className = "section__title" htmlFor="sort">Sort by</label>
          <select value = {sortOrder} className = "select" name="sort" id="sort" onChange = {(e) => sort(e)}>
          <option value="" selected disabled hidden>Choose here</option>
            <option value="views">Popularity</option>
            <option value="likes">Rating</option>
          </select>
      </div>

      <div className="filter-panel__section type">
        <div className="section__title">Cookbook type</div>
        <div className="section__checkboxes">
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="vegetarian" name="vegetarian" value="Vegetarian" onChange = {(e) => filter(e)}/>
            <label htmlFor="vegetarian">Vegetarian</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="nomilk" name="nomilk" value="Without milk" onChange = {(e) => filter(e)}/>
            <label htmlFor="nomilk">Without milk</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" className = "checkbox__input" id="noeggs" name="noeggs" value="Without eggs" onChange = {(e) => filter(e)}/>
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
