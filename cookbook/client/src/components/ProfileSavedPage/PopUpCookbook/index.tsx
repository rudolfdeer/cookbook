import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';

import './index.scss';
import PopUpRecipeCard from './RecipeCard';

type PopUpCookbookDetailedProps = {
  setCookbookPopUpVisible: Dispatch<SetStateAction<boolean>>;
  cookbook: Cookbook;
  loggedInUserId: number;
};

export default function PopUpCookbookSaved(
  props: PopUpCookbookDetailedProps
): JSX.Element {
  const { t } = useTranslation();
  const { setCookbookPopUpVisible, cookbook, loggedInUserId } = props;
  const { image, description, title, userId, likes, comments, recipesIds } =
    cookbook;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('overlay__btn')
    ) {
      setCookbookPopUpVisible(false);
    }
  }

  const recipes = api.getRecipesInCookbook(recipesIds);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--cookbook">
          <div className="pop-up--cookbook__section--top">
            <div className="pop-up--cookbook__title">{title}</div>
          </div>

          <div className="pop-up--cookbook__author">
            {api.getUserName(userId)}
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
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} {t('LIKES')}
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments.length} {t('COMMENTS')}
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
                  authorId={el.userId}
                  views={el.views}
                  description={el.description}
                  likes={el.likes}
                  image={el.image}
                  comments={el.comments.length}
                  key={el.id}
                  id={el.id}
                  loggedInUserId={loggedInUserId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
