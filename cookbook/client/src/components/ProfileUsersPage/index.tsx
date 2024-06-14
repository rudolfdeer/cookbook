import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Footer from '../Footer';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import userApi from '../../helpers/api/userApi';
import ROUTES from '../../constants/routes';
import { User } from '../../interfaces';
import SERVER_URL from '../../constants/serverUrl';

import './index.scss';

type ProfileUsersPageProps = {
  getUsersCreatedCookbooks: (userId: number) => void;
  loggedInUserId: number;
};

export default function ProfileUsersPage(
  props: ProfileUsersPageProps,
): JSX.Element {
  const { userId } = useParams<{ userId: string }>();
  const { loggedInUserId } = props;
  const [user, setUser] = useState(null as User);
  const photoSrc = user
    ? `${SERVER_URL}/${user.image}`
    : '../../assets/images/photo-mask.png';

  useEffect(() => {
    (async () => {
      const response = await userApi.getUserById(+userId);
      setUser(response);
    })();
  }, []);

  if (+userId === loggedInUserId) {
    return <Redirect to={ROUTES.PROFILE_SETTINGS} />;
  }

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
                src={photoSrc}
                alt="User photo"
                className="profile-page--user__user__photo__image"
              />
            </div>
            <div className="profile-page--user__user__container">
              <div className="profile-page--user__user__name">{user?.name}</div>
              <div className="profile-page--user__user__bio">{user?.bio}</div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
