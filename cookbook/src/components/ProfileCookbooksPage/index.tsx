import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ActionCreatorFunction, Cookbook, User } from '../../interfaces';
import ROUTES from '../../constants/routes';

import Footer from '../Footer';
import ProfileCookbookCard from './Card';

import './index.scss';
import PopUpCreateCookbook from './PopUp';
import HeaderConnect from '../../redux/containers/HeaderConnect';

type ProfileCookbooksPageProps = {
  cookbooks: Cookbook[];
  getUsersCreatedCookbooks: Function;
  user: User;
  createCookbook: ActionCreatorFunction;
};

export default function ProfileCookbooksPage(
  props: ProfileCookbooksPageProps,
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const {
    cookbooks, user, getUsersCreatedCookbooks, createCookbook,
  } = props;
  const {
    name, bio, avatar, id,
  } = user;
  const [isVisible, setVisible] = useState(false);
  const photoSrc = avatar || '../../assets/images/photo-mask.png';

  useEffect(() => getUsersCreatedCookbooks(id), []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-cookbooks-page">
        <div className="wrapper">
          <section className="user">
            <div className="user__photo">
              <img
                src={photoSrc}
                alt="User photo default"
                className="photo__image"
              />
            </div>
            <div className="user__container">
              <div className="user__name">{name}</div>
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
                <Link to={ROUTES.PROFILE_SETTINGS}>My Settings</Link>
              </li>
            </ul>
            <button className="nav__btn" onClick={() => setVisible(true)}>
              Create New Cookbook
            </button>
          </nav>
          <section className="profile-cookbooks-page__cards cookbooks">
            {cookbooks?.map((el) => (
              <ProfileCookbookCard
                id={el.id}
                title={el.title}
                authorId={el.userId}
                views={el.views}
                likes={el.likes}
                comments={el.comments.length}
                image={el.image}
                description={el.description}
                key={el.id}
              />
            ))}
          </section>
          {isVisible ? (
            <PopUpCreateCookbook
              loggedInUserId={id}
              setVisible={setVisible}
              createCookbook={createCookbook}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
