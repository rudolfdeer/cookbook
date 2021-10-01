import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AnyAction } from 'redux';
import { Cookbook, User } from '../../interfaces';
import ROUTES from '../../constants/routes';

import Footer from '../Footer';
import ProfileCookbookCard from './Card';

import './index.scss';
import PopUpCreateCookbook from './PopUpCreate';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import PopUpModifyCookbook from './PopUpModify';
import api from '../../helpers/api';
import { CookbookValues } from '../../redux/actions/cookbooks';

type ProfileCookbooksPageProps = {
  cookbooks: Cookbook[];
  getUsersCreatedCookbooks: (userId: number) => void;
  user: User;
  createCookbook: (
    data: CookbookValues,
    userId: number,
    imageSrc: string
  ) => AnyAction;
  modifyCookbook: (
    data: CookbookValues,
    cookbookId: number,
    imageSrc: string,
    userId: number
  ) => AnyAction;
  deleteCookbook: (cookbookId: number, userId: number) => AnyAction;
};

export default function ProfileCookbooksPage(
  props: ProfileCookbooksPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }

  const {
    cookbooks,
    user,
    getUsersCreatedCookbooks,
    createCookbook,
    modifyCookbook,
    deleteCookbook,
  } = props;
  const { name, bio, avatar, id } = user;
  const [isCreatePopUpVisible, setCreatePopUpVisible] = useState(false);
  const [isModifyPopUpVisible, setModifyPopUpVisible] = useState(false);
  const photoSrc = avatar || '../../assets/images/photo-mask.png';
  const [selectedCookbookId, setSelectedCookbookId] = useState(0);

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
              <li className="list__item--selected">My Cookbooks</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_RECIPES}>My Recipes</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SETTINGS}>My Settings</Link>
              </li>
            </ul>
            <button
              className="nav__btn"
              onClick={() => setCreatePopUpVisible(true)}
            >
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
                setSelectedCookbookId={setSelectedCookbookId}
                setModifyPopUpVisible={setModifyPopUpVisible}
                deleteCookbook={deleteCookbook}
                loggedInUserId={id}
              />
            ))}
          </section>
          {isCreatePopUpVisible ? (
            <PopUpCreateCookbook
              loggedInUserId={id}
              setCreatePopUpVisible={setCreatePopUpVisible}
              createCookbook={createCookbook}
            />
          ) : null}
          {isModifyPopUpVisible ? (
            <PopUpModifyCookbook
              loggedInUserId={id}
              selectedCookbook={api.getCookbook(selectedCookbookId)}
              setModifyPopUpVisible={setModifyPopUpVisible}
              modifyCookbook={modifyCookbook}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
