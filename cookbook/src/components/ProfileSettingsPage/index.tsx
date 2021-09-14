import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../../interfaces';
import ROUTES from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';

import './index.scss';

type ProfileSettingsPageProps = {
  user: User;
};

export default function ProfileSettingsPage(
  props: ProfileSettingsPageProps
): JSX.Element {
  const { username, email, password, bio } = props.user;
  return (
    <>
      <div className="wrapper">
        <Header username={username} />
      </div>
      <main className="profile-settings-page">
        <div className="wrapper">
          <section className="user">
            <div className="user__photo_settings">
              <input type="file" className="photo__input" />
            </div>
            <div className="user__container">
              <div className="user__name">{username}</div>
              <div className="user__bio">{bio}</div>
            </div>
          </section>
          <nav className="profile-page__nav">
            <ul className="nav__list">
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SAVED}>Saved</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_COOKBOOKS}>My Cookbooks</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_RECIPES}>My Recipes</Link>
              </li>
              <li className="list__item_selected">My Settings</li>
            </ul>
          </nav>
          <section className="personal-info">
            <div className="personal-info__title">Personal Information</div>
            <form action="" className="personal-info__form">
              <label htmlFor="name" className="form__label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={username}
                className="form__input"
                disabled
              />
              <input
                type="submit"
                className="form__input_submit"
                value="Edit"
              />
            </form>
            <form action="" className="personal-info__form">
              <label htmlFor="email" className="form__label">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={email}
                className="form__input"
                disabled
              />
              <input
                type="submit"
                className="form__input_submit"
                value="Edit"
              />
            </form>
            <form action="" className="personal-info__form">
              <label htmlFor="password" className="form__label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                className="form__input"
                disabled
              />
              <input
                type="submit"
                className="form__input_submit"
                value="Change my password"
              />
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
