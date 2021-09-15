import React from 'react';

import './index.scss';

type PopUpCreateRecipeProps = {
  userId?: number;
  setVisible: Function;
};

export default function PopUpCreateRecipe(
  props: PopUpCreateRecipeProps
): JSX.Element {
  const { userId, setVisible } = props;

  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up create">
          <div className="pop-up__title">Create New Recipe</div>

          <div className="pop-up__section">
            <label htmlFor="title" className="section__title">
              Recipe Title<span>*</span>
            </label>
            <input
              type="text"
              className="section__input"
              name="title"
              placeholder="Title"
            />
          </div>

          <div className="pop-up__section btn">
            Upload Recipe Image
            <input type="file" className="section__input_file" />
          </div>

          <div className="pop-up__section">
            <label htmlFor="description" className="section__title">
              Description
            </label>
            <input
              type="text"
              className="section__input big"
              name="description"
              placeholder="Description"
            />
          </div>

          <div className="pop-up__section">
            <label htmlFor="ingredients" className="section__title">
              Ingredients
            </label>
            <input
              type="text"
              className="section__input"
              name="ingredients"
              placeholder="Ingredient"
            />
            <div className="ingredients"></div>
          </div>

          <div className="pop-up__section">
            <label htmlFor="directions" className="section__title">
              Directions
            </label>
            <input
              type="text"
              className="section__input big"
              name="directions"
              placeholder="Directions"
            />
          </div>

          <div className="btns">
            <button className="btn_light" onClick={() => setVisible(false)}>
              Cancel
            </button>
            <button className="btn">Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
}
