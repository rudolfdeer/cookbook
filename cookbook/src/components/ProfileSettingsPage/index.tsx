import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }
  const { username, email, password, bio } = props.user;
  const [isBioDisabled, setBioDisabled] = useState(true);

  const [newBio, setNewBio] = useState(bio);
  const [newName, setNewName] = useState(username);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);

  const btnEdit = (
    <button
      className="form__input_submit"
      onClick={(e) => {
        e.preventDefault();
        setBioDisabled(false);
      }}
    >
      Edit
    </button>
  );

  const btnSave = (
    <input
      type="submit"
      className="form__input_submit"
      value="Save"
      onClick={(e) => {
        e.preventDefault();
        setBioDisabled(true);
      }}
    />
  );

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
              <div className="user__name">{newName}</div>
              <form action="" className="user__form">
                <textarea
                  name="bio"
                  value={newBio}
                  className="user__bio"
                  disabled={isBioDisabled}
                  onChange={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    setNewBio(target.value);
                  }}
                />
                {isBioDisabled ? btnEdit : btnSave}
              </form>
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
                value={newName}
                className="form__input"
                disabled
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewName(target.value);
                }}
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
                value={newEmail}
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
                value={newPassword}
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
