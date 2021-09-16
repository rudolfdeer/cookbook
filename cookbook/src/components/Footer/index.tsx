import * as React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import './index.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <Link to={ROUTES.HOME}>
            <div className="footer__logo_black" />
          </Link>
          <nav className="footer__nav">
            <ul className="nav__list">
              <li className="list__item">
                <Link to={ROUTES.RECIPES}>Recipes</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.COOKBOOKS}>Cookbooks</Link>
              </li>
              <li className="list__item">
                <Link to="/">About us</Link>
              </li>
            </ul>
          </nav>
          <div className="footer__email">
            <a href="mailto:tomalichko@gmail.com">tomalichko@gmail.com</a>
          </div>
          <div className="footer__study">
            <div className="study__project">Study Project v2.2021</div>
            <div className="study__itechart">
              <a href="https://www.itechart.by/">:iTechArt</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
