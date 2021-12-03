import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import api from '../../../helpers/api';
import { Cookbook } from '../../../interfaces';
import { CookbookValues } from '../../../redux/actions/cookbooks';
import PopUpRecipeCard from './Card';

import './index.scss';

type PopUpModifyCookbookProps = {
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  selectedCookbook: Cookbook;
  loggedInUserId: number;
  modifyCookbook: (
    data: CookbookValues,
    cookbookId: number,
    imageSrc: string,
    userId: number
  ) => AnyAction;
};

export default function PopUpModifyCookbook(
  props: PopUpModifyCookbookProps
): JSX.Element {
  const { t } = useTranslation();
  const {
    setModifyPopUpVisible,
    selectedCookbook,
    loggedInUserId,
    modifyCookbook,
  } = props;
  const { id, image, description, title, userId, recipesIds } =
    selectedCookbook;

  const [imageSrc, setImageSrc] = useState(image);
  const [isTitleDisabled, setTitleDisabled] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [isDescriptionDisabled, setDescriptionDisabled] = useState(true);
  const [newDescription, setNewDescription] = useState(description);
  const [newRecipesIds, setNewRecipesIds] = useState(recipesIds);

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (
      target.classList.contains('overlay') ||
      target.classList.contains('overlay__btn')
    ) {
      setModifyPopUpVisible(false);
    }
  }

  const onImageChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result);
      setImageSrc(result);
    };
    reader.readAsDataURL(file);
  };

  const addRecipeToCookbook = (recipeId: number) => {
    if (newRecipesIds.indexOf(recipeId) > -1) {
      return;
    }
    const newIds = newRecipesIds.concat(recipeId);
    setNewRecipesIds(newIds);
  };

  const onSubmit = () => {
    const values = {
      title: newTitle,
      description: newDescription,
      recipesIds: newRecipesIds,
    };
    modifyCookbook(values, id, imageSrc, loggedInUserId);
    setModifyPopUpVisible(false);
  };

  const recipes = api.getRecipesInCookbook(newRecipesIds);
  const usersRecipes = api.getUsersRecipes(loggedInUserId);

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content">
        <div className="pop-up--modify--column">
          <div className="pop-up--modify__section--top">
            <input
              type="text"
              className="pop-up--modify__section__title--editable"
              name="title"
              placeholder={newTitle}
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              disabled={isTitleDisabled}
            />
            {isTitleDisabled ? (
              <button
                className="pop-up--modify__section__btn"
                onClick={(e) => {
                  e.preventDefault();
                  setTitleDisabled(false);
                }}
              >
                {t('EDIT_BTN')}
              </button>
            ) : (
              <button
                className="pop-up--modify__section__btn"
                onClick={(e) => {
                  e.preventDefault();
                  setTitleDisabled(true);
                }}
              >
                {t('SAVE_BTN')}
              </button>
            )}
          </div>

          <div className="pop-up--modify__author">
            {api.getUserName(userId)}
          </div>

          <div className="pop-up--modify__section--description">
            <div
              className="pop-up--modify__image--cookbook"
              style={{
                background: `url(${imageSrc}) center no-repeat`,
              }}
            >
              <input
                type="file"
                className="pop-up--modify__input--file"
                onChange={(e) => onImageChange(e)}
              />
            </div>
            <div className="pop-up--modify__section--description__container">
              <div className="pop-up--modify__section__title">
                {t('DESCRIPTION')}
              </div>
              <textarea
                name="description"
                className="pop-up--modify__input--textarea"
                value={newDescription}
                disabled={isDescriptionDisabled}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              {isDescriptionDisabled ? (
                <button
                  className="pop-up--modify__section__btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDescriptionDisabled(false);
                  }}
                >
                  {t('EDIT_BTN')}
                </button>
              ) : (
                <button
                  className="pop-up--modify__section__btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDescriptionDisabled(true);
                  }}
                >
                  {t('SAVE_BTN')}
                </button>
              )}
            </div>
          </div>
          <div className="pop-up--modify__section--recipes">
            <div className="pop-up--modify__section__title">{t('RECIPES')}</div>
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
                  setNewRecipesIds={setNewRecipesIds}
                  recipesIds={newRecipesIds}
                  usersLiked={el.usersLiked}
                />
              ))}
            </div>
          </div>
          <div className="pop-up--modify__section--add">
            <div className="pop-up--modify__section__title">
              {t('ADD_RECIPES')}
            </div>
            <select
              className="pop-up--modify__input--select"
              name="recipes"
              id="recipes"
              onChange={(e) => {
                const select = e.target as HTMLSelectElement;
                addRecipeToCookbook(Number(select.value));
              }}
            >
              {usersRecipes?.map((el) => (
                <option key={el.id} value={el.id}>
                  {el.title}
                </option>
              ))}
            </select>
          </div>

          <div className="pop-up--modify__btns">
            <button
              className="pop-up--modify__btns__btn--light"
              onClick={() => onSubmit()}
            >
              {t('SAVE_BTN')}
            </button>
            <button
              className="pop-up--modify__btns__btn"
              onClick={() => setModifyPopUpVisible(false)}
            >
              {t('CANCEL_BTN')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
