import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../constants/routes';

import Footer from '../Footer';
import ProfileCookbookCard from './Card';

import './index.scss';
import PopUpCreateCookbook from './PopUpCreate';
import HeaderConnect from '../../redux/containers/HeaderConnect';
import PopUpModifyCookbook from './PopUpModify';
import { CookbookValues } from '../../redux/thunks/cookbooks';
import { ICookbook, IRecipe, IUser } from '../../interfacesServer';

type ProfileCookbooksPageProps = {
  cookbooks: ICookbook[];
  recipes: IRecipe[];
  getUsersCreatedCookbooks: (userId: number) => void;
  user: IUser;
  createCookbook: (
    data: CookbookValues,
    imageSrc: string,
    userId: number,
  ) => Promise<void>;
  modifyCookbook: (
    cookbookId: number,
    data: CookbookValues,
    imageSrc: string,
    userId: number
  ) => Promise<void>;
  deleteCookbook: (cookbookId: number, userId: number) => Promise<void>;
};

export default function ProfileCookbooksPage(
  props: ProfileCookbooksPageProps
): JSX.Element {
  if (!props.user) {
    return <Redirect to={ROUTES.NOT_FOUND} />;
  }
  const { t } = useTranslation();

  const {
    cookbooks,
    user,
    recipes,
    getUsersCreatedCookbooks,
    createCookbook,
    modifyCookbook,
    deleteCookbook,
  } = props;
  const { name, bio, photo, id } = user;
  const [isCreatePopUpVisible, setCreatePopUpVisible] = useState(false);
  const [isModifyPopUpVisible, setModifyPopUpVisible] = useState(false);
  const photoSrc = photo || '../../assets/images/photo-mask.png';
  const [selectedCookbookId, setSelectedCookbookId] = useState(0);

  useEffect(() => getUsersCreatedCookbooks(id), []);

  return (
    <>
      <div className="wrapper">
        <HeaderConnect />
      </div>
      <main className="profile-page--cookbooks">
        <div className="wrapper">
          <section className="profile-page--cookbooks__user">
            <div className="profile-page--cookbooks__photo">
              <img
                src={photoSrc}
                alt="User photo default"
                className="profile-page--cookbooks__photo__image"
              />
            </div>
            <div className="profile-page--cookbooks__user__container">
              <div className="profile-page--cookbooks__user__name">{name}</div>
              <div className="profile-page--cookbooks__user__bio">{bio}</div>
            </div>
          </section>
          <nav className="profile-page--cookbooks__nav">
            <ul className="profile-page--cookbooks__nav__list">
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SAVED}>{t('SAVED')}</Link>
              </li>
              <li className="list__item--selected">{t('MY_COOKBOOKS')}</li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_RECIPES}>{t('MY_RECIPES')}</Link>
              </li>
              <li className="list__item">
                <Link to={ROUTES.PROFILE_SETTINGS}>{t('MY_SETTINGS')}</Link>
              </li>
            </ul>
            <button
              className="profile-page--cookbooks__nav__btn"
              onClick={() => setCreatePopUpVisible(true)}
            >
              {t('CREATE_NEW_COOKBOOK')}
            </button>
          </nav>
          <section className="profile-page--cookbooks__cards">
            {cookbooks?.map((el) => (
              <ProfileCookbookCard
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
              recipes = {recipes.filter((el) => el.UserId === id)}
            />
          ) : null}
          {isModifyPopUpVisible ? (
            <PopUpModifyCookbook
              loggedInUserId={id}
              selectedCookbook={cookbooks.find((el) => el.id === selectedCookbookId)}
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
