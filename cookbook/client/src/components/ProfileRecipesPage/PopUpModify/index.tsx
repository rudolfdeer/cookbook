import React, { Dispatch, SetStateAction, useState } from 'react';
import { AnyAction } from 'redux';
import { Recipe } from '../../../interfaces';
import { RecipeValues } from '../../../redux/actions/recipes';

import './index.scss';

type PopUpModifyRecipeProps = {
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  selectedRecipe: Recipe;
  modifyRecipe: (
    data: RecipeValues,
    recipeId: number,
    imageSrc: string,
    userId: number
  ) => AnyAction;
  loggedInUserId: number;
};

export default function PopUpModifyRecipe(
  props: PopUpModifyRecipeProps
): JSX.Element {
  const {
    setModifyPopUpVisible,
    selectedRecipe,
    modifyRecipe,
    loggedInUserId,
  } = props;
  const { id, title, image, description, directions, ingredients } =
    selectedRecipe;

  const [imageSrc, setImageSrc] = useState(image);
  const [isTitleDisabled, setTitleDisabled] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [isDescriptionDisabled, setDescriptionDisabled] = useState(true);
  const [newDescription, setNewDescription] = useState(description);
  const [isDirectionsDisabled, setDirectionsDisabled] = useState(true);
  const [newDirections, setNewDirections] = useState(directions);
  const [isIngredientsDisabled, setIngredientsDisabled] = useState(true);
  const [newIngredients, setNewIngredients] = useState(ingredients);

  const closePopUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      setModifyPopUpVisible(false);
    }
  };

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

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__content--row">
        <div className="pop-up--modify">
          <div className="pop-up--modify__image">
            <input
              type="file"
              className="pop-up--modify__input--file"
              onChange={(e) => onImageChange(e)}
            />
            {<img src={`${imageSrc}`} alt="" className="img" />}
          </div>
          <div className="pop-up--modify__sections">
            <div className="pop-up--modify__section--top">
              <textarea
                className="pop-up--modify__section__title--editable"
                name="title"
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
                  Edit
                </button>
              ) : (
                <button
                  className="pop-up--modify__section__btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setTitleDisabled(true);
                  }}
                >
                  Save
                </button>
              )}
            </div>

            <div className="pop-up--modify__section--description--recipe">
              <textarea
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
                  Edit
                </button>
              ) : (
                <button
                  className="pop-up--modify__section__btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setDescriptionDisabled(true);
                  }}
                >
                  Save
                </button>
              )}
            </div>
            <div className="pop-up--modify__section">
              <div className="pop-up--modify__section__container">
                <div className="pop-up--modify__section--top">
                  <div className="pop-up--modify__section__title">
                    Directions
                  </div>
                  {isDirectionsDisabled ? (
                    <button
                      className="pop-up--modify__section__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setDirectionsDisabled(false);
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="pop-up--modify__section__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setDirectionsDisabled(true);
                      }}
                    >
                      Save
                    </button>
                  )}
                </div>
                <textarea
                  className="pop-up--modify__input--textarea"
                  value={newDirections}
                  disabled={isDirectionsDisabled}
                  onChange={(e) => setNewDirections(e.target.value.split(','))}
                />
              </div>
              <div className="pop-up--modify__section__container">
                <div className="pop-up--modify__section--top">
                  <div className="pop-up--modify__section__title">
                    Ingredients
                  </div>
                  {isIngredientsDisabled ? (
                    <button
                      className="pop-up--modify__section__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setIngredientsDisabled(false);
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="pop-up--modify__section__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setIngredientsDisabled(true);
                      }}
                    >
                      Save
                    </button>
                  )}
                </div>
                <textarea
                  className="pop-up--modify__input--textarea"
                  value={newIngredients}
                  disabled={isIngredientsDisabled}
                  onChange={(e) => setNewIngredients(e.target.value.split(','))}
                />
              </div>
            </div>
            <div className="pop-up--modify__btns">
              <button
                className="pop-up--modify__btns__btn--light"
                onClick={() => {
                  const data = {
                    title: newTitle,
                    description: newDescription,
                    directions: newDirections.join(','),
                    ingredients: newIngredients.join(','),
                  };
                  setModifyPopUpVisible(false);
                  modifyRecipe(data, id, imageSrc, loggedInUserId);
                }}
              >
                Save
              </button>
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
    </div>
  );
}
