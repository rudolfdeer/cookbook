import React, { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import ROUTES from '../../../constants/routes';
import api from '../../../helpers/api';
import { Recipe } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import CommentsSection from '../PopUp/CommentsSection';

import './index.scss';

type PopUpRecipeDetailedProps = {
  setVisible: Dispatch<SetStateAction<boolean>>;
  recipe: Recipe;
  loggedInUserId: number;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
  createComment: (
    recipeId: number,
    userId: number,
    commentText: string
  ) => AnyAction;
};

export default function PopUpRecipeDetailed(
  props: PopUpRecipeDetailedProps
): JSX.Element {
  const { t } = useTranslation();
  const {
    setVisible,
    recipe,
    saveToUsersRecipes,
    loggedInUserId,
    createComment,
  } = props;
  const {
    id,
    image,
    description,
    title,
    userId,
    usersLiked,
    comments,
    directions,
    ingredients,
  } = recipe;

  const closePopUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      setVisible(false);
    }
  };

  const saveRecipe = () => {
    saveToUsersRecipes(id, loggedInUserId);
  };

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="overlay__content__wrapper">
          <div className="pop-up--recipe">
            <div className="pop-up--recipe__image">
              <img src={`${image}`} alt="" className="img" />
            </div>
            <div className="pop-up--recipe__sections">
              <div className="pop-up--recipe__section--top">
                <div className="pop-up--recipe__title">{title}</div>
                {loggedInUserId && loggedInUserId !== userId ? (
                  <button
                    className="pop-up--recipe__btn"
                    onClick={() => {
                      saveRecipe();
                      setVisible(false);
                    }}
                  >
                    +
                  </button>
                ) : null}
              </div>
              <div className="pop-up--recipe__author">
                <Link to={`${ROUTES.PROFILE_USER}/${userId}`}>
                  {api.getUserName(userId)}
                </Link>
              </div>
              <div className="pop-up--recipe__section--description">
                <div className="pop-up--recipe__section--description__wrapper">
                  <div className="pop-up--recipe__section--description__title">
                    {t('DESCRIPTION')}
                  </div>
                  <p>{description}</p>
                </div>
              </div>
              <div className="pop-up--recipe__section--information">
                <div className="pop-up--recipe__section--information__directions">
                  <div className="pop-up--recipe__section--information__title">
                    {t('DIRECTIONS')}
                  </div>
                  <ul className="pop-up--recipe__section--information__list">
                    {directions.map((el: string) => (
                      <li key={Math.random()}>
                        <span>{`Step ${directions.indexOf(el) + 1}`}</span>:{' '}
                        {el}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pop-up--recipe__section--information__ingredients">
                  <div className="pop-up--recipe__section--information__title">
                    {t('INGREDIENTS')}
                  </div>
                  <ul className="pop-up--recipe__section--information__list--marked">
                    {ingredients.map((el: string) => (
                      <li key={Math.random()}>{el}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pop-up--recipe__section--statistics">
                <div className="card__statistics-item likes">
                  <LikesIcon />
                  {usersLiked.length} {t('LIKES')}
                </div>
                <div className="card__statistics-item comments">
                  <CommentsIcon />
                  {comments.length} {t('COMMENTS')}
                </div>
              </div>
            </div>
          </div>
          <div className="pop-up--recipe__section--comments">
            <div className="pop-up--recipe__section--comments__title">{`${t(
              'COMMENTS_SECTION'
            )} (${comments.length})`}</div>
            <CommentsSection
              comments={comments}
              loggedInUserId={loggedInUserId}
              recipeId={id}
              createComment={createComment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
