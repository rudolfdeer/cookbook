import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../../constants/routes';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import CommentsSection from './CommentsSection';
import './index.scss';
import PopUpRecipeCard from './RecipeCard';
import { ICookbook } from '../../../interfacesServer';
import cookbooks from '../../../constants/mockdata/cookbooks';

type PopUpCookbookDetailedProps = {
  setVisible: Dispatch<SetStateAction<boolean>>;
  cookbook: ICookbook;
  loggedInUserId: number;
  saveToUsersCookbooks: (cookbookId: number, userId: number) => Promise<void>;
  saveToUsersRecipes: (recipeId: number, userId: number) => Promise<void>;
  createComment: (
    cookbookId: number,
    text: string
  ) => Promise<void>;
  //likeCookbook: (userId: number, cookbookId: number) => AnyAction;
};

export default function PopUpCookbookDetailed(
  props: PopUpCookbookDetailedProps
): JSX.Element {
  const { t } = useTranslation();
  const {
    setVisible,
    cookbook,
    loggedInUserId,
    saveToUsersRecipes,
    saveToUsersCookbooks,
    createComment,
    //likeCookbook,
  } = props;
  const {
    id,
    image,
    description,
    title,
    User,
    Cookbook_Likes,
    Cookbook_Comments,
    Recipe_Cookbooks,
  } = cookbook;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('overlay__btn')
    ) {
      setVisible(false);
    }
  }
  const recipes = Recipe_Cookbooks.map((el) => el.Recipe);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--cookbook">
          <div className="pop-up--cookbook__section--top">
            <div className="pop-up--cookbook__title">{title}</div>
            {loggedInUserId && loggedInUserId !== User.id ? (
              <button
                className="pop-up--cookbook__btn"
                onClick={() => {
                  saveToUsersCookbooks(id, loggedInUserId);
                  setVisible(false);
                }}
              >
                {t('CLONE_TO_MY_CB')}
              </button>
            ) : null}
          </div>

          <div className="pop-up--cookbook__author">
            <Link to={`${ROUTES.PROFILE_USER}/${User.id}`}>
              {User.name}
            </Link>
          </div>

          <div className="pop-up--cookbook__section--description">
            <div
              className="pop-up--cookbook__image"
              style={{
                background: `url(${image}) center no-repeat`,
              }}
            ></div>
            <div className="pop-up--cookbook__section--description__text">
              <div className="pop-up--cookbook__section__title">
                {t('DESCRIPTION')}
              </div>
              <p>{description}</p>
            </div>
          </div>

          <div className="pop-up--cookbook__section--statistics">
            <div className="card__statistics-item--likes">
              <LikesIcon
                loggedInUserId={loggedInUserId}
                //likeCookbook={likeCookbook}
                cookbookId={id}
              />
              {Cookbook_Likes.length} {t('LIKES')}
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {Cookbook_Comments.length} {t('COMMENTS')}
            </div>
          </div>
          <div className="pop-up--cookbook__section--recipes">
            <div className="pop-up--cookbook__section__title">
              {t('RECIPES')}
            </div>
            <div className="pop-up--cookbook__section--recipes__cards">
              {recipes?.map((el) => (
                <PopUpRecipeCard
                  title={el.title}
                  user={el.User}
                  views={el.views}
                  description={el.description}
                  likes={el.Recipe_Likes.length}
                  image={el.image}
                  comments={el.Recipe_Comments.length}
                  key={el.id}
                  id={el.id}
                  loggedInUserId={loggedInUserId}
                  saveToUsersRecipes={saveToUsersRecipes}
                  setVisible={setVisible}
                />
              ))}
            </div>
          </div>
          <div className="pop-up--cookbook__section--comments">
            <div className="pop-up--cookbook__section__title">{`${t(
              'COMMENTS_SECTION'
            )} (${Cookbook_Comments.length})`}</div>
            <CommentsSection
              comments={Cookbook_Comments}
              loggedInUserId={loggedInUserId}
              cookbookId={id}
              createComment={createComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
