import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookbook } from '../../interfaces';
import ROUTES from '../../constants/routes';
import Footer from '../Footer';
import Header from '../Header';
import ProfileCookbookCard from './Card';

import './index.scss';

type ProfileCookbooksPageProps = {
  cookbooks?: Cookbook[];
  getUsersCreatedCookbooks?: Function;
  username: string;
  bio: string;
  avatar: string;
  id: number;
};

export default function ProfileCookbooksPage(
  props: ProfileCookbooksPageProps
): JSX.Element {
  const { cookbooks, username, bio, avatar, id, getUsersCreatedCookbooks } =
    props;

  useEffect(() => getUsersCreatedCookbooks(id), []);

  return (
    <>
      <div className="wrapper">
        <Header username={username} />
      </div>
      <main className="profile-cookbooks-page">
        <div className="wrapper">
          <section className="user">
            <div
              className="user__photo"
              style={{
                background: `url(../../../assets/${avatar}) center no-repeat`,
              }}
            ></div>
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
              <li className="list__item_selected">My Cookbooks</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_RECIPES}>My Recipes</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE}>My Settings</Link>
              </li>
            </ul>
            <button className="nav__btn">Create New Cookbook</button>
          </nav>
          <section className="profile-cookbooks-page__cards cookbooks">
            {cookbooks?.map((el) => (
              <ProfileCookbookCard
                id={el.id}
                name={el.name}
                author={el.author}
                views={el.views}
                likes={el.likes}
                comments={el.comments.length}
                image={el.image}
                description={el.description}
                key={el.id}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
