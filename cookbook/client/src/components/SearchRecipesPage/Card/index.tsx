import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import ViewsIcon from '../../svg/Views';
import './index.scss';
import { IUser } from '../../../interfacesServer';

type RecipeCardProps = {
  id: number;
  title: string;
  author: IUser;
  description: string;
  views: number;

  likes: number;
  image: string;
  comments: number;
  selectCard: Dispatch<SetStateAction<number>>;
  setVisible: Dispatch<SetStateAction<boolean>>;
  loggedInUserId: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
};

export default function RecipeCard(props: RecipeCardProps): JSX.Element {
  const { t } = useTranslation();
  const {
    id,
    views,
    image,
    description,
    title,
    author,
    likes,
    comments,
    setVisible,
    selectCard,
    loggedInUserId,
    saveToUsersRecipes,
  } = props;

  const [isBtnVisible, setBtnVisible] = useState(false);

  const saveRecipe = () => {
    saveToUsersRecipes(id, loggedInUserId);
    setBtnVisible(false);
  };

  const btnClone = (
    <div className="card__statistics-item__menu">
      <button
        className="card__statistics-item__menu__btn--clone"
        onClick={() => saveRecipe()}
      >
        {t('CLONE_TO_MY_REC')}
      </button>
    </div>
  );

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container">
          <div
            className="card__title"
            onClick={() => {
              selectCard(id);
              setVisible(true);
            }}
          >
            {title}
          </div>
          <div className="card__author">{author.name}</div>
        </div>
        <div className="card__info-container--description">
          <p className="card__description">{description}</p>
        </div>
        <div className="card__info-container--bottom">
          <div className="card__statistics">
            <div className="card__statistics-item views">
              <ViewsIcon />
              {views} views
            </div>
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} {t('LIKES')}
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments} {t('COMMENTS')}
            </div>
          </div>
          <svg
            className="card__statistics-item__icon--dots"
            width="20"
            height="4"
            viewBox="0 0 20 4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              setBtnVisible((prevState) => !prevState);
            }}
          >
            <circle cx="2" cy="2" r="2" fill="#dadada" />
            <circle cx="10" cy="2" r="2" fill="#dadada" />
            <circle cx="18" cy="2" r="2" fill="#dadada" />
          </svg>
          {loggedInUserId && isBtnVisible ? btnClone : null}
        </div>
      </div>
    </div>
  );
}
