import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { User } from '../../interfaces';
import ROUTES from '../../constants/routes';
import Footer from '../Footer';

import './index.scss';
import HeaderConnect from '../../redux/containers/HeaderConnect';

type ProfileSettingsPageProps = {
  user: User;
  changeUserBio: Function;
  changeUserName: Function;
  changeUserEmail: Function;
  changeUserPassword: Function;
  updateUserPhoto: Function;
  logOut: Function;
  deleteUser: Function;
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

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-settings-page">
        <div className="wrapper">
          <section className="user">
            <div className="user__photo_settings">
              <label htmlFor="avatar" className="photo__label">
                <input
                  type="file"
                  className="photo__input"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    reader.onload = () => {
                      const result = String(reader.result);
                      setPhotoSrc(result);
                      updateUserPhoto(id, result);
                    };
                    reader.readAsDataURL(file);
                  }}
                />
                <img
                  src={photoSrc}
                  alt="User photo default"
                  className="photo__image_opacity"
                />
              </label>
            </div>

            <div className="user__container editable">
              <div className="user__name">{newName}</div>
              <form action="" className="user__form">
                <textarea
                  name="bio"
                  value={newBio}
                  className="user__bio_editable"
                  disabled={isBioDisabled}
                  onChange={(e) => {
                    const target = e.target as HTMLTextAreaElement;
                    setNewBio(target.value);
                  }}
                />
                {isBioDisabled ? (
                  <button
                    className="form__input_submit"
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
                    className="form__input_submit"
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
                disabled={isNameDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewName(target.value);
                }}
              />

              {isNameDisabled ? (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    setNameDisabled(true);
                    changeUserName(id, newName);
                  }}
                />
              )}
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
                disabled={isEmailDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewEmail(target.value);
                }}
              />
              {isEmailDisabled ? (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Edit"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Save"
                  onClick={(e) => {
                    e.preventDefault();
                    setEmailDisabled(true);
                    changeUserEmail(id, newEmail);
                  }}
                />
              )}
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
                disabled={isPasswordDisabled}
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setNewPassword(target.value);
                }}
              />
              {isPasswordDisabled ? (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Change my password"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordDisabled(false);
                  }}
                />
              ) : (
                <input
                  type="submit"
                  className="form__input_submit"
                  value="Save new password"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordDisabled(true);
                    changeUserPassword(id, newPassword);
                  }}
                />
              )}
            </form>
            <div className="section__btns">
              <button
                className="btn__logout"
                onClick={() => {
                  logOut(id);
                }}
              >
                Log out
              </button>
              <button
                className="btn__delete"
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
