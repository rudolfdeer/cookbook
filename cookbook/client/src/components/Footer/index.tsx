import * as React from 'react';
import { Link } from 'react-router-dom';
import { COOKBOOKS, RECIPES } from '../../constants/resources/common';
import {
  ABOUT_US,
  EMAIL,
  ITECHART,
  ITECHART_SITE,
  PROJECT,
} from '../../constants/resources/footer';
import ROUTES from '../../constants/routes';

import './index.scss';

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__container">
          <Link to={ROUTES.HOME}>
            <div className="footer__logo" />
          </Link>
          <nav className="footer__nav">
            <ul className="footer__nav__list">
              <li className="footer__nav__list__item">
                <Link to={ROUTES.COOKBOOKS}>{COOKBOOKS}</Link>
              </li>
              <li className="footer__nav__list__item">
                <Link to={ROUTES.RECIPES}>{RECIPES}</Link>
              </li>
              <li className="footer__nav__list__item">
                <Link to="/">{ABOUT_US}</Link>
              </li>
            </ul>
          </nav>
          <div className="footer__email">
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="footer__study">
            <div className="footer__study__project">{PROJECT}</div>
            <div className="footer__study__itechart">
              <a href={ITECHART_SITE}>{ITECHART}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
