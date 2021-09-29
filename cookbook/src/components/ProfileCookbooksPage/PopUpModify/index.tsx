import React, { Dispatch, SetStateAction } from 'react';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import PopUpRecipeCard from './Card';

import './index.scss';

type PopUpModifyCookbookProps = {
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  selectedCookbook: Cookbook;
  loggedInUserId: number;
};

export default function PopUpModifyCookbook(
  props: PopUpModifyCookbookProps
): JSX.Element {
  const { setModifyPopUpVisible, selectedCookbook, loggedInUserId } = props;
  const { id, image, description, title, userId, likes, comments, recipesIds } =
    selectedCookbook;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('overlay__btn')
    ) {
      setModifyPopUpVisible(false);
    }
  }

  const recipes = api.getRecipesInCookbook(recipesIds);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--modify--column">
          <div className="pop-up--modify__section--top">
            <div className="pop-up--modify__title">{title}</div>
          </div>

          <div className="pop-up--modify__author">
            {api.getUserName(userId)}
          </div>

          <div className="pop-up--modify__section--description">
            <div
              className="pop-up--modify__image--cookbook"
              style={{
                background: `url(${image}) center no-repeat`,
              }}
            ></div>
            <div className="pop-up--modify__section--description__container">
              <div className="pop-up--modify__section__title">Description</div>
              <p>{description}</p>
            </div>
          </div>

          <div className="pop-up--modify__section--statistics">
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} likes
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments.length} comments
            </div>
          </div>
          <div className="pop-up--modify__section--recipes">
            <div className="pop-up--modify__section__title">Recipes</div>
            <div className="pop-up--modify__section--recipes__cards">
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
          <div className="pop-up--modify__btns">
            <button className="pop-up--modify__btns__btn--light">Save</button>
            <button
              className="pop-up--modify__btns__btn"
              onClick={() => setModifyPopUpVisible(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
