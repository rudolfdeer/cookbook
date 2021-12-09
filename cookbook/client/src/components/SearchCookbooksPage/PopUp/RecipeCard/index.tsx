import React, { Dispatch, SetStateAction } from 'react';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import CommentsIcon from '../../../svg/Comments';
import LikesIcon from '../../../svg/Likes';
import ViewsIcon from '../../../svg/Views';
import './index.scss';
import { IUser } from '../../../../interfacesServer';

type PopUpRecipeCardProps = {
  title: string;
  user: IUser;
  description: string;
  views: number;
  image: string;
  comments: number;
  id: number;
  loggedInUserId: number;
  likes: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export default function PopUpRecipeCard(
  props: PopUpRecipeCardProps
): JSX.Element {
  const { t } = useTranslation();
  const {
    views,
    image,
    description,
    title,
    user,
    likes,
    comments,
    id,
    loggedInUserId,
    saveToUsersRecipes,
    setVisible,
  } = props;

  return (
    <div className="card">
      <div
        className="card__image"
        style={{ background: `url(${image}) center no-repeat` }}
      ></div>
      <div className="card__content">
        <div className="card__info-container top">
          <div className="card__title">{title}</div>
          <div className="card__author">{user.name}</div>
        </div>
        <div className="card__info-container--description">
          <p className="card__description">{description}</p>
        </div>
        <div className="card__info-container--bottom">
          <div className="card__statistics">
            <div className="card__statistics-item">
              <ViewsIcon />
              {views} {t('VIEWS')}
            </div>
            <div className="card__statistics-item">
              <LikesIcon />
              {likes} {t('LIKES')}
            </div>
            <div className="card__statistics-item">
              <CommentsIcon />
              {comments} {t('COMMENTS')}
            </div>
          </div>
          {loggedInUserId && loggedInUserId !== user.id ? (
            <button
              className="card__btn"
              onClick={() => {
                saveToUsersRecipes(id, loggedInUserId);
                setVisible(false);
              }}
            >
              {t('SAVE_BTN')}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
