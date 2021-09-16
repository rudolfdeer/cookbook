import React from 'react';

type PopUpCreateCookbookProps = {
  userId?: number;
  setVisible: Function;
};

export default function PopUpCreateCookbook(
  props: PopUpCreateCookbookProps
): JSX.Element {
  const { userId, setVisible } = props;
  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up create">
          <div className="pop-up__title">Create New Cookbook</div>

          <div className="pop-up__section">
            <label htmlFor="title" className="section__title">
              Cookbook Title<span>*</span>
            </label>
            <input
              type="text"
              className="section__input"
              name="title"
              placeholder="Title"
            />
          </div>

          <div className="pop-up__section btn">
            Upload Cookbook Image
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
            <label htmlFor="recipes" className="section__title">
              Recipes
            </label>
            <select className="section__input" name="recipes"></select>
            <div className="ingredients"></div>
          </div>

          <div className="pop-up__section"></div>

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
