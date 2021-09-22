import React, { Dispatch, SetStateAction } from 'react';

import './index.scss';

type PopUpModifyRecipeProps = {
  setModifyPopUpVisible: Dispatch<SetStateAction<boolean>>;
};

export default function PopUpModifyRecipe(
  props: PopUpModifyRecipeProps
): JSX.Element {
  const { setModifyPopUpVisible } = props;
  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up">
          <div className="pop-up__recipe">
            <div className="main-image">
              {/* <img src={`${image}`} alt="" className="img" /> */}
            </div>
            <div className="pop-up-sections">
              <div className="pop-up__section top">
                <div className="pop-up__title">Title</div>
              </div>
              <div className="pop-up__author">Author</div>
              <div className="pop-up__section description">
                <div className="description">
                  <div className="section__title">Description</div>
                  <p>Description</p>
                </div>
              </div>
              <div className="pop-up__section information">
                <div className="pop-up__section directions">
                  <div className="section__title">Directions</div>
                </div>
                <div className="pop-up__section ingredients">
                  <div className="section__title">Ingredients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
