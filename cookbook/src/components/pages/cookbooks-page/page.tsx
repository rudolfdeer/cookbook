import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookbook } from '../../../constants/types';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import CookbookCard from './card';
import FilterPanelCookbooks from './filter-panel';

import '../../shared/search-page.scss';
import DetailedInfo from './detailed-info';

type CookbooksPageProps = {
  cookbooks?: Cookbook[];
  getCookbooks?: Function;
};

export default function CookbooksPage(props: CookbooksPageProps): JSX.Element {
  const { cookbooks, getCookbooks } = props;
  const [isVisible, setVisible] = useState(false);
  const [chosenCardId, setChosenCardId] = useState(0);

  useEffect(() => getCookbooks(), []);

  function findCard() {
    const card = cookbooks.find((el) => el.id === chosenCardId);
    return card;
  }

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
          <div className="cards cookbooks">
          {/* eslint-disable-next-line max-len */}
          {cookbooks?.map((el) => <CookbookCard
                                    id = {el.id}
                                    name = {el.name} 
                                    author = {el.author} 
                                    views = {el.views} 
                                    likes = {el.likes} 
                                    comments = {el.comments.length} 
                                    image = {el.image} 
                                    description = {el.description} 
                                    key={el.id} 
                                    selectCard = {setChosenCardId} 
                                    openDetailedInfo = {setVisible} />)}
          </div>
         </div>
         {isVisible ? <DetailedInfo openDetailedInfo = {setVisible} cardInfo = {findCard()}/> : null}
        </main>
      </div>
      <Footer/>
    </>
  );
}