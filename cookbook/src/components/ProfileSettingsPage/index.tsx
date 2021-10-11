import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import { User } from '../../interfaces';
import ROUTES from '../../constants/routes';
import Footer from '../Footer';

import './index.scss';
import HeaderConnect from '../../redux/containers/HeaderConnect';

type ProfileSettingsPageProps = {
  user: User;
  changeUserBio: (userId: number, newBio: string) => AnyAction;
  changeUserName: (userId: number, newName: string) => AnyAction;
  changeUserEmail: (userId: number, newEmail: string) => AnyAction;
  changeUserPassword: (userId: number, newPassword: string) => AnyAction;
  updateUserPhoto: (userId: number, newAvatar: string) => AnyAction;
  logOut: (userId: number) => AnyAction;
  deleteUser: (userId: number) => AnyAction;
};

export default function ProfileSettingsPage(
  props: ProfileSettingsPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.HOME} />;
  }
  const {
    user,
    changeUserBio,
    changeUserName,
    changeUserEmail,
    changeUserPassword,
    updateUserPhoto,
    logOut,
    deleteUser,
  } = props;
  const { id, name, email, password, bio, avatar } = user;
  const [isBioDisabled, setBioDisabled] = useState(true);
  const [isNameDisabled, setNameDisabled] = useState(true);
  const [isEmailDisabled, setEmailDisabled] = useState(true);
  const [isPasswordDisabled, setPasswordDisabled] = useState(true);
  const [newBio, setNewBio] = useState(bio);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState(password);
  const [photoSrc, setPhotoSrc] = useState(
    avatar || './assets/images/photo-mask.png'
  );

  const onPhotoChange = (e: React.ChangeEvent) => {
    const input = e.target as HTMLInputElement;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      setPhotoSrc(result);
      updateUserPhoto(id, result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-page--settings">
        <div className="wrapper">
          <section className="profile-page--settings__content">
            <div className="profile-page--settings__photo--editable">
              <label
                htmlFor="avatar"
                className="profile-page--settings__photo__label"
              >
                <input
                  type="file"
                  className="profile-page--settings__photo__input"
                  onChange={(e) => onPhotoChange(e)}
                />
                <img
                  src={photoSrc}
                  alt="User photo default"
                  className="profile-page--settings__photo__image--opacity"
                />
              </label>
            </div>

            <div className="profile-page--settings__user editable">
              <div className="profile-page--settings__user__name">
                {newName}
              </div>
              <form action="" className="profile-page--settings__user__form">
                <textarea
                  name="bio"
                  value={newBio}
                  className="profile-page--settings__user__bio--editable"
                  disabled={isBioDisabled}
                  onChange={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    setNewBio(target.value);
                  }}
                />
                {isBioDisabled ? (
                  <button
                    className="profile-page--settings__user__form__input--submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setBioDisabled(false);
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <input
                    type="submit"
                    className="profile-page--settings__user__form__input--submit"
                    value="Save"
                    onClick={(e) => {
                      e.preventDefault();
                      setBioDisabled(true);
                      changeUserBio(id, newBio);
                    }}
                  />
                )}
              </form>
            </div>
          </section>
          <nav className="profile-page--settings__nav">
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
              <li className="list__item--selected">My Settings</li>
            </ul>
          </nav>
          <section className="profile-page--settings__info">
            <div className="profile-page--settings__info__title">
              Personal Information
            </div>
            <form action="" className="profile-page--settings__info__form">
              <label
                htmlFor="name"
                className="profile-page--settings__info__form__label"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={newName}
                className="profile-page--settings__info__form__input"
                disabled={isNameDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewName(target.value);
                }}
              />

              {isNameDisabled ? (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameDisabled(true);
                    changeUserName(id, newName);
                  }}
                />
              )}
            </form>
            <form action="" className="profile-page--settings__info__form">
              <label
                htmlFor="email"
                className="profile-page--settings__info__form__label"
              >
                Email
              </label>

              <input
                type="text"
                name="email"
                value={newEmail}
                className="profile-page--settings__info__form__input"
                disabled={isEmailDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewEmail(target.value);
                }}
              />
              {isEmailDisabled ? (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailDisabled(true);
                    changeUserEmail(id, newEmail);
                  }}
                />
              )}
            </form>
            <form action="" className="profile-page--settings__info__form">
              <label
                htmlFor="password"
                className="profile-page--settings__info__form__label"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={newPassword}
                className="profile-page--settings__info__form__input"
                disabled={isPasswordDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewPassword(target.value);
                }}
              />
              {isPasswordDisabled ? (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Change my password"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="profile-page--settings__user__form__input--submit"
                  value="Save new password"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordDisabled(true);
                    changeUserPassword(id, newPassword);
                  }}
                />
              )}
            </form>
            <div className="profile-page--settings__btns">
              <button
                className="profile-page--settings__btns__btn--logout"
                onClick={() => {
                  logOut(id);
                }}
              >
                Log out
              </button>
              <button
                className="profile-page--settings__btns__btn--delete"
                onClick={() => {
                  deleteUser(id);
                }}
              >
                Delete my account
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
