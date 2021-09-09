import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';

import './index.scss';

export default function ProfileSettingsPage(): JSX.Element {
  return (
    <>
      <div className="wrapper">
        <Header />
        </div>
        <main className="profile-settings-page">
          <div className="wrapper">
            <section className="user">
              <div className="user__photo">
                <input type="file" className="photo__input"/>
              </div>
              <div className="user__container">
                <div className="user__name">John Galt</div>
                <div className="user__bio">I don’t know about you but I love pizza. Especially when that pizza comes with Papa John’s very own garlic pizza sticks. </div>
              </div>
            </section>
            <nav className="profile-page__nav">
              <ul className="nav__list">
                <li className="list__item"><Link to={routes['profile.cookbooks']}>My Cookbooks</Link></li>
                <li className="list__item"><Link to={routes['profile.recipes']}>My Recipes</Link></li>
                <li className="list__item_selected">My Settings</li>
              </ul>
            </nav>
            <section className="personal-info">
              <div className="personal-info__title">Personal Information</div>
              <form action="" className="personal-info__form">
                <label htmlFor="name" className="form__label">Name</label>
                <input type="text" name = "name" value= "John Galt" className="form__input" disabled/>
                <input type="submit" className="form__input_submit" value="Edit"/>
              </form>
              <form action="" className="personal-info__form">
                <label htmlFor="email" className="form__label">Email</label>
                <input type="text" name = "email" value= "johngalt@gmail.com" className="form__input" disabled/>
                <input type="submit" className="form__input_submit" value="Edit"/>
              </form>
              <form action="" className="personal-info__form">
                <label htmlFor="password" className="form__label">Password</label>
                <input type="password" name = "password" value= "johngalt123" className="form__input" disabled/>
                <input type="submit" className="form__input_submit" value="Change my password"/>
              </form>
            </section>
          </div>
        </main>
        <Footer/>
    </>
  )
}