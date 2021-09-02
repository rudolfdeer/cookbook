import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookbook } from '../../../constants/types';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import CookbookCard from './card';
import FilterPanelCookbooks from './filter-panel';

import '../../shared/search-page.scss';

type CookbooksPageProps = {
  cookbooks?: Cookbook[];
  getCookbooks?: Function;
};

export default function CookbooksPage(props: CookbooksPageProps): JSX.Element {
  const { cookbooks, getCookbooks } = props;

  useEffect(() => getCookbooks(), []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="search-page">
          <aside className="aside">
          <div className="filter">
            <FilterPanelCookbooks/>
          </div>
          </aside>
          <div className="content">
            <nav className="page-nav">
              <ul className="page-nav-list">
                <li className="page-nav-list-item selected">Cookbooks</li>
                <li className="page-nav-list-item"><Link to="/recipes">Recipes</Link></li>
            </ul>
            </nav>
          <div className="cookbooks-cards">
          {/* eslint-disable-next-line max-len */}
          {cookbooks?.map((el) => <CookbookCard name = {el.name} author = {el.author} views = {el.views} likes = {el.likes} comments = {el.comments.length} image = {el.image} description = {el.description} key={el.id} />)}
          </div>
         </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}