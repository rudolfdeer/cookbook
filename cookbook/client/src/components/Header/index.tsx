import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../constants/routes';
import SearchBar from './SearchBar';
import { User } from '../../interfaces';

import './index.scss';

type HeaderProps = {
  user: User;
  getLoggedInUser: () => void;
};

export default function Header(props: HeaderProps): JSX.Element {
  const { user, getLoggedInUser } = props;
  const { t } = useTranslation();

  useEffect(() => getLoggedInUser(), []);

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo" />
      </Link>
      <SearchBar />
      {user ? (
        <button className="header__btn">
          <Link to={ROUTES.PROFILE_RECIPES}>{t('CREATE_RECIPE_BTN')}</Link>
        </button>
      ) : (
        <button className="header__btn">
          <Link to={ROUTES.LOG_IN}>{t('CREATE_RECIPE_BTN')}</Link>
        </button>
      )}
      {user ? (
        <div className="header__login">
          <div className="header__login__icon"></div>
          <Link to={ROUTES.PROFILE_SETTINGS}>{user.name}</Link>
        </div>
      ) : (
        <div className="header__login">
          <Link to="/login">{t('SIGN_IN')}</Link>
        </div>
      )}
    </header>
  );
}
