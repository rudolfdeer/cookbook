import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Cookbook } from '../../interfaces';

import Footer from '../Footer';
import ProfileCookbookCard from './Card';

import './index.scss';

import HeaderConnect from '../../redux/containers/HeaderConnect';

import api from '../../helpers/api';

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

  useEffect(() => getUsersCreatedCookbooks(+userId), []);

  const user = api.getUser(+userId);

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
                src={user.avatar}
                alt="User photo"
                className="photo__image"
              />
            </div>
            <div className="user__container">
              <div className="user__name">{user.name}</div>
              <div className="user__bio">{user.bio}</div>
            </div>
          </section>
          <nav className="profile-page__nav">
            <ul className="nav__list">
              <li className="list__item--selected">Created Cookbooks</li>
            </ul>
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
                loggedInUserId={loggedInUserId}
              />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
