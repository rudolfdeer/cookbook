import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { Redirect } from 'react-router-dom';
import ROUTES from '../../../constants/routes';

import './index.scss';

type PopUpCreateRecipeProps = {
  userId?: number;
  setVisible: Function;
  createRecipe: Function;
};

type FormValues = {
  title: string;
  image?: string;
  description: string;
  ingredients: string;
  directions: string;
};

const formData = {
  title: '',
  image: '',
  description: [''],
  ingredients: [''],
  directions: [''],
};

const required = (value: string | string[]) => (value ? undefined : 'Required');

export default function PopUpCreateRecipe(
  props: PopUpCreateRecipeProps
): JSX.Element {
  const { setVisible, createRecipe, userId } = props;

  const onSubmit = (values: FormValues) => {
    createRecipe(values, userId);
    setVisible(false);
  };

  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up create">
          <div className="pop-up__title">Create New Recipe</div>
          <Form
            onSubmit={onSubmit}
            initialValues={{ ...formData }}
            render={({ handleSubmit, submitting, pristine }) => (
              <form action="" className="pop-up__form" onSubmit={handleSubmit}>
                <div className="pop-up__section">
                  <label htmlFor="title" className="section__title">
                    Recipe Title<span>*</span>
                  </label>
                  <Field
                    type="text"
                    className="section__input"
                    name="title"
                    placeholder="Title"
                    component="input"
                    validate={required}
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
                  <Field
                    type="text"
                    className="section__input big"
                    name="description"
                    placeholder="Description"
                    component="input"
                  />
                </div>

                <div className="pop-up__section">
                  <label htmlFor="ingredients" className="section__title">
                    Ingredients
                  </label>
                  <Field
                    type="text"
                    className="section__input"
                    name="ingredients"
                    placeholder="Ingredient"
                    component="input"
                  />
                  <div className="ingredients"></div>
                </div>

                <div className="pop-up__section">
                  <label htmlFor="directions" className="section__title">
                    Directions
                  </label>
                  <Field
                    type="text"
                    className="section__input big"
                    name="directions"
                    placeholder="Directions"
                    component="input"
                  />
                </div>

                <div className="btns">
                  <button
                    className="btn_light"
                    onClick={() => setVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn"
                    disabled={submitting || pristine}
                  >
                    Confirm
                  </button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}
