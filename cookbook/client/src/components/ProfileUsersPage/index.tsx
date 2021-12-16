import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Footer from '../Footer';
import CardCookbook from './Card';

import './index.scss';

import HeaderConnect from '../../redux/containers/HeaderConnect';

import api from '../../helpers/api';
import PopUpCookbook from './PopUp';
import ROUTES from '../../constants/routes';
import { ICookbook, IUser } from '../../interfacesServer';

type ProfileUsersPageProps = {
  cookbooks: ICookbook[];
  getUsersCreatedCookbooks: (userId: number) => void;
  loggedInUserId: number;
};

export default function ProfileUsersPage(
  props: ProfileUsersPageProps,
): JSX.Element {
  const { t } = useTranslation();
  const { userId } = useParams<{ userId: string }>();
  const { cookbooks, loggedInUserId, getUsersCreatedCookbooks } = props;
  const [user, setUser] = useState(null as IUser);
  const [isPopUpCookbookVisible, setPopUpCookbookVisible] = useState(false);
  const [selectedCookbookId, setSelectedCookbookId] = useState(0);

  if (+userId === loggedInUserId) {
    return <Redirect to={ROUTES.PROFILE_COOKBOOKS} />;
  }

  useEffect(() => getUsersCreatedCookbooks(+userId), [userId]);

  useEffect(() => {
    (async () => {
      const response = await api.getUserById(+userId);
      setUser(response);
    })();
  }, []);

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
                src={user?.photo}
                alt="User photo"
                className="profile-page--user__user__photo__image"
              />
            </div>
            <div className="profile-page--user__user__container">
              <div className="profile-page--user__user__name">{user?.name}</div>
              <div className="profile-page--user__user__bio">{user?.bio}</div>
            </div>
          </section>
          <nav className="profile-page--user__nav">
            <ul className="profile-page--user__nav__list">
              <li className="list__item--selected"> {t('CREATED_CB')}</li>
            </ul>
          </nav>
          <section className="profile-page--user__cards">
            {cookbooks?.map((el) => (
              <CardCookbook
                id={el.id}
                title={el.title}
                author={el.User}
                views={el.views}
                likes={el.Cookbook_Likes.length}
                comments={el.Cookbook_Comments.length}
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
              cookbook={cookbooks.find((el) => el.id === selectedCookbookId)}
            />
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
