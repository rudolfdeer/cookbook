import * as React from 'react';
import { Link } from 'react-router-dom';
import { COOKBOOKS, RECIPES } from '../../constants/resources/common';
import { CREATE_COOKBOOK_BTN, SIGN_IN } from '../../constants/resources/header';
import ROUTES from '../../constants/routes';
import './index.scss';
import SearchBar from './SearchBar';

type HeaderProps = {
  loggedInUserName?: string;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { loggedInUserName } = props;

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo" />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <Link to={ROUTES.COOKBOOKS}>{COOKBOOKS}</Link>
          </li>
          <li className="header__nav__list__item">
            <Link to={ROUTES.RECIPES}>{RECIPES}</Link>
          </li>
        </ul>
      </nav>
      <SearchBar />
      {loggedInUserName ? (
        <button className="header__btn">
          <Link to={ROUTES.PROFILE_COOKBOOKS}>{CREATE_COOKBOOK_BTN}</Link>
        </button>
      ) : (
        <button className="header__btn">
          <Link to={ROUTES.LOG_IN}>{CREATE_COOKBOOK_BTN}</Link>
        </button>
      )}
      {loggedInUserName ? (
        <div className="header__login">
          <div className="header__login__icon"></div>
          <Link to={ROUTES.PROFILE_SETTINGS}>{loggedInUserName}</Link>
        </div>
      ) : (
        <div className="header__login">
          <Link to="/login">{SIGN_IN}</Link>
        </div>
      )}
    </header>
  );
}
