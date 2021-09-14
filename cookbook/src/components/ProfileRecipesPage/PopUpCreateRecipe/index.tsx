import React from 'react';
import { Ingredient, Recipe } from '../../../interfaces';
import CommentsSection from '../../SearchCookbooksPage/PopUp/CommentsSection';

//import './index.scss';

type PopUpCreateRecipeProps = {
  userId?: number;
};

export default function PopUpCreateRecipe(
  props: PopUpCreateRecipeProps
): JSX.Element {
  const { userId } = props;

  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up">
          <div className="pop-up__title">Create new recipe</div>

          <div className="pop-up__section description">
            <div className="section__title">Description</div>
          </div>

          <div className="pop-up__section directions">
            <div className="section__title">Directions</div>
          </div>

          <div className="pop-up__section ingredients">
            <div className="section__title">Ingredients</div>
          </div>
        </div>
      </div>
    </div>
  );
}
