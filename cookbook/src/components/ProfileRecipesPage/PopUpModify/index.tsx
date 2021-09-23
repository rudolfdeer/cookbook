import React, { Dispatch, SetStateAction, useState } from 'react';
import { Recipe } from '../../../interfaces';

import './index.scss';

type PopUpModifyRecipeProps = {
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
  selectedRecipe: Recipe;
};

export default function PopUpModifyRecipe(
  props: PopUpModifyRecipeProps
): JSX.Element {
  const { setModifyPopUpVisible, selectedRecipe } = props;
  const {
    id,
    title,
    image,
    userId,
    description,
    directions,
    ingredients,
    cookingTime,
  } = selectedRecipe;

  const [imageSrc, setImageSrc] = useState(image);
  const [isTitleDisabled, setTitleDisabled] = useState(true);
  const [newTitle, setNewTitle] = useState(title);
  const [isDescriptionDisabled, setDescriptionDisabled] = useState(true);
  const [newDescription, setNewDescription] = useState(description);
  const [isDirectionsDisabled, setDirectionsDisabled] = useState(true);
  const [newDirections, setNewDirections] = useState(directions.join(', '));
  const [isIngredientsDisabled, setIngredientsDisabled] = useState(true);
  const [newIngredients, setNewIngredients] = useState(ingredients.join(', '));

  const closePopUp = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay')) {
      setModifyPopUpVisible(false);
    }
  };

  return (
    <div className="overlay" onClick={(e) => closePopUp(e)}>
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up">
          <div className="pop-up__modify">
            <div className="main-image">
              <input
                type="file"
                className="photo__input"
                onChange={(e) => {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onload = () => {
                    const result = String(reader.result);
                    setImageSrc(result);
                  };
                  reader.readAsDataURL(file);
                }}
              />
              {<img src={`${imageSrc}`} alt="" className="img" />}
            </div>
            <div className="pop-up-sections">
              <div className="pop-up__section top">
                <input
                  type="text"
                  className="section__title editable"
                  name="title"
                  placeholder={newTitle}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  disabled={isTitleDisabled}
                />
                {isTitleDisabled ? (
                  <button
                    className="btn_edit"
                    onClick={(e) => {
                      e.preventDefault();
                      setTitleDisabled(false);
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn_edit"
                    onClick={(e) => {
                      e.preventDefault();
                      setTitleDisabled(true);
                    }}
                  >
                    Save
                  </button>
                )}
              </div>

              <div className="pop-up__section description">
                <textarea
                  name="description"
                  className="section__textarea"
                  value={newDescription}
                  disabled={isDescriptionDisabled}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                {isDescriptionDisabled ? (
                  <button
                    className="btn_edit"
                    onClick={(e) => {
                      e.preventDefault();
                      setDescriptionDisabled(false);
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <button
                    className="btn_edit"
                    onClick={(e) => {
                      e.preventDefault();
                      setDescriptionDisabled(true);
                    }}
                  >
                    Save
                  </button>
                )}
              </div>
              <div className="pop-up__section information">
                <div className="pop-up__section directions">
                  <div className="section__container">
                    <div className="section__title">Directions</div>
                    {isDirectionsDisabled ? (
                      <button
                        className="btn_edit"
                        onClick={(e) => {
                          e.preventDefault();
                          setDirectionsDisabled(false);
                        }}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        className="btn_edit"
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
                    className="section__textarea"
                    value={newDirections}
                    disabled={isDirectionsDisabled}
                    onChange={(e) => setNewDirections(e.target.value)}
                  />
                </div>
                <div className="pop-up__section ingredients">
                  <div className="section__container">
                    <div className="section__title">Ingredients</div>
                    {isIngredientsDisabled ? (
                      <button
                        className="btn_edit"
                        onClick={(e) => {
                          e.preventDefault();
                          setIngredientsDisabled(false);
                        }}
                      >
                        Edit
                      </button>
                    ) : (
                      <button
                        className="btn_edit"
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
                    className="section__textarea"
                    value={newIngredients}
                    disabled={isIngredientsDisabled}
                    onChange={(e) => setNewIngredients(e.target.value)}
                  />
                </div>
              </div>
              <div className="btns">
                <button className="btn_light">Save</button>
                <button
                  className="btn"
                  onClick={() => setModifyPopUpVisible(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
