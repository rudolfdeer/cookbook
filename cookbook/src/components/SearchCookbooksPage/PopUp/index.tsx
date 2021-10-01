import React, { Dispatch, SetStateAction } from 'react';
import { AnyAction } from 'redux';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import CommentsIcon from '../../svg/Comments';
import LikesIcon from '../../svg/Likes';
import CommentsSection from './CommentsSection';

import './index.scss';
import PopUpRecipeCard from './RecipeCard';

type PopUpCookbookDetailedProps = {
  setVisible: Dispatch<SetStateAction<boolean>>;
  cookbook: Cookbook;
  loggedInUserId: number;
  saveToUsersCookbooks: (cookbookId: number, userId: number) => AnyAction;
  saveToUsersRecipes: (recipeId: number, userId: number) => AnyAction;
  createComment: (
    cookbookId: number,
    userId: number,
    commentText: string
  ) => AnyAction;
};

export default function PopUpCookbookDetailed(
  props: PopUpCookbookDetailedProps,
): JSX.Element {
  const {
    setVisible,
    cookbook,
    loggedInUserId,
    saveToUsersRecipes,
    saveToUsersCookbooks,
    createComment,
  } = props;
  const {
    id, image, description, title, userId, likes, comments, recipesIds,
  } = cookbook;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay')
      || target.classList.contains('overlay__btn')
    ) {
      setVisible(false);
    }
  }

  const recipes = api.getRecipesInCookbook(recipesIds);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--cookbook">
          <div className="pop-up--cookbook__section--top">
            <div className="pop-up--cookbook__title">{title}</div>
            {loggedInUserId && loggedInUserId !== userId ? (
              <button
                className="pop-up--cookbook__btn"
                onClick={() => {
                  saveToUsersCookbooks(id, loggedInUserId);
                  setVisible(false);
                }}
              >
                Clone to my CookBook
              </button>
            ) : null}
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
                Description
              </div>
              <p>{description}</p>
            </div>
          </div>

          <div className="pop-up--cookbook__section--statistics">
            <div className="card__statistics-item likes">
              <LikesIcon />
              {likes} likes
            </div>
            <div className="card__statistics-item comments">
              <CommentsIcon />
              {comments.length} comments
            </div>
          </div>
          <div className="pop-up--cookbook__section--recipes">
            <div className="pop-up--cookbook__section__title">Recipes</div>
            <div className="pop-up--cookbook__section--recipes__cards">
              {recipes?.map((el) => (
                <PopUpRecipeCard
                  title={el.title}
                  userId={el.userId}
                  views={el.views}
                  description={el.description}
                  likes={el.likes}
                  image={el.image}
                  comments={el.comments.length}
                  key={el.id}
                  id={el.id}
                  loggedInUserId={loggedInUserId}
                  saveToUsersRecipes={saveToUsersRecipes}
                />
              ))}
            </div>
          </div>
          <div className="pop-up--cookbook__section--comments">
            <div className="pop-up--cookbook__section__title">{`Comments (${comments.length})`}</div>
            <CommentsSection
              comments={comments}
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
