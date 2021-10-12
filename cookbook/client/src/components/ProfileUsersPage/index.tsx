import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';

import { Cookbook } from '../../interfaces';

import Footer from '../Footer';
import CardCookbook from './Card';

import './index.scss';

import HeaderConnect from '../../redux/containers/HeaderConnect';

import api from '../../helpers/api';
import PopUpCookbook from './PopUp';
import ROUTES from '../../constants/routes';

type ProfileUsersPageProps = {
  cookbooks: Cookbook[];
  getUsersCreatedCookbooks: (userId: number) => void;
  loggedInUserId: number;
};

export default function ProfileUsersPage(
  props: ProfileUsersPageProps
): JSX.Element {
  const { userId } = useParams<{ userId: string }>();
  const { cookbooks, loggedInUserId, getUsersCreatedCookbooks } = props;

  if (+userId === loggedInUserId) {
    return <Redirect to={ROUTES.PROFILE_COOKBOOKS} />;
  }

  const [isPopUpCookbookVisible, setPopUpCookbookVisible] = useState(false);
  const [selectedCookbookId, setSelectedCookbookId] = useState(0);

  useEffect(() => getUsersCreatedCookbooks(+userId), [userId]);

  const user = api.getUser(+userId);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-page--user">
        <div className="wrapper">
          <section className="profile-page--user__user">
            <div className="profile-page--user__user__photo">
              <img
                src={user.avatar}
                alt="User photo"
                className="profile-page--user__user__photo__image"
              />
            </div>
            <div className="profile-page--user__user__container">
              <div className="profile-page--user__user__name">{user.name}</div>
              <div className="profile-page--user__user__bio">{user.bio}</div>
            </div>
          </section>
          <nav className="profile-page--user__nav">
            <ul className="profile-page--user__nav__list">
              <li className="list__item--selected">Created Cookbooks</li>
            </ul>
          </nav>
          <section className="profile-page--user__cards">
            {cookbooks?.map((el) => (
              <CardCookbook
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
                setPopUpCookbookVisible={setPopUpCookbookVisible}
              />
            ))}
          </section>
          {isPopUpCookbookVisible ? (
            <PopUpCookbook
              setPopUpCookbookVisible={setPopUpCookbookVisible}
              cookbook={api.getCookbook(selectedCookbookId)}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
