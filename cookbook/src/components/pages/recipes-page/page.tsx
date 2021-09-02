import * as React from 'react';
import { Link } from 'react-router-dom';
import { Cookbook, Recipe } from '../../../constants/types';
import Footer from '../../shared/footer/Footer';
import Header from '../../shared/header/Header';
import RecipeCard from './card';
import CookbookCard from './card';
import FilterPanelRecipes from './filter-panel';

import './page.scss';

type RecipesPageProps = {
  recipes?: Recipe[];
  getRecipes?: Function;
};

export default function RecipesPage(props: RecipesPageProps): JSX.Element {
  const { recipes, getRecipes } = props;

  React.useEffect(() => getRecipes(), []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="recipes-page">
          <aside className="aside">
          <div className="filter">
            <FilterPanelRecipes/>
          </div>
          </aside>
          <div className="content">
            <nav className="page-nav">
              <ul className="page-nav-list">
                <li className="page-nav-list-item"><Link to="/cookbooks">Cookbooks</Link></li>
                <li className="page-nav-list-item selected">Recipes</li>
            </ul>
            </nav>
          <div className="cards">
          {/* eslint-disable-next-line max-len */}
          {recipes?.map((el) => <RecipeCard name = {el.name} author = {el.author} views = {el.views} likes = {el.likes} comments = {el.comments.length} image = {el.image} description = {el.description} key={el.id} />)}
          </div>
         </div>
        </main>
      </div>
      <Footer/>
    </>
  );
}