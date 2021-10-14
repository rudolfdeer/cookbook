import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { AnyAction } from 'redux';
import { RecipeValues } from '../../../redux/actions/recipes';

import './index.scss';

type PopUpCreateRecipeProps = {
  loggedInUserId: number;
  setCreatePopUpVisible: Dispatch<SetStateAction<boolean>>;
  createRecipe: (
    data: RecipeValues,
    userId: number,
    imageSrc: string
  ) => AnyAction;
};

type FormValues = {
  title: string;
  image?: string;
  description: string;
  ingredients: string;
  directions: string;
  cookingTime: string;
};

const formData = {
  title: '',
  description: [''],
  ingredients: [''],
  directions: [''],
  cookingTime: '',
};

const required = (value: string | string[]) => (value ? undefined : 'Required');

export default function PopUpCreateRecipe(
  props: PopUpCreateRecipeProps,
): JSX.Element {
  const { setCreatePopUpVisible, createRecipe, loggedInUserId } = props;

  const [photoSrc, setPhotoSrc] = useState('');

  const onSubmit = (values: FormValues) => {
    createRecipe(values, loggedInUserId, photoSrc);
    setCreatePopUpVisible(false);
  };

  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="pop-up--create">
          <div className="pop-up--create__title">Create New Recipe</div>
          <Form
            onSubmit={onSubmit}
            initialValues={{ ...formData }}
            render={({ handleSubmit, submitting, pristine }) => (
              <form action="" onSubmit={handleSubmit}>
                <div className="pop-up--create__section">
                  {/* <label
                    htmlFor="title"
                    className="pop-up--create__section__title"
                  >
                    Recipe Title<span>*</span>
                  </label> */}
                  {/* <Field
                    type="text"
                    className="pop-up--create__section__input"
                    name="title"
                    placeholder="Title"
                    component="input"
                    validate={required}

                  /> */}
                  <Field
                    name="title"
                    validate={required}
                  >
                    {({ input, meta }) => (
                      <>
                      <label
                        htmlFor="title"
                        className="pop-up--create__section__title"
                      >
                        Recipe Title<span>*</span>
                      </label>
                      <input {...input} type="text" className="pop-up--create__section__input--error" placeholder="Title"/>
                      {meta.error && meta.touched ? (
                        <span className="pop-up--create__section__input__error">{meta.error}</span>
                      ) : (
                        <span className="pop-up--create__section__input__error"></span>
                      )}
                    </>
                    )}

                  </Field>
                </div>

                <div className="pop-up--create__section--image">
                  <label className="pop-up--create__section__btn">
                    Upload Recipe Image
                    <input
                      name="image"
                      type="file"
                      className="pop-up--create__section__input--file"
                      onChange={(e: React.ChangeEvent) => {
                        const target = e.target as HTMLInputElement;
                        const file = target.files[0];
                        const reader = new FileReader();
                        reader.onload = () => {
                          const result = String(reader.result);
                          setPhotoSrc(result);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />
                  </label>
                  <img
                    src={photoSrc}
                    alt="Image preview"
                    className="pop-up--create__section__preview"
                  />
                </div>

                <div className="pop-up--create__section">
                  <label
                    htmlFor="description"
                    className="pop-up--create__section__title"
                  >
                    Description
                  </label>
                  <Field
                    type="text"
                    className="pop-up--create__section__input--big"
                    name="description"
                    placeholder="Description"
                    component="input"
                  />
                </div>

                <div className="pop-up--create__section">
                  <label
                    htmlFor="ingredients"
                    className="pop-up--create__section__title"
                  >
                    Ingredients
                  </label>
                  <Field
                    type="text"
                    className="pop-up--create__section__input"
                    name="ingredients"
                    placeholder="Ingredient"
                    component="input"
                  />
                  <div className="ingredients"></div>
                </div>

                <div className="pop-up--create__section">
                  <label
                    htmlFor="directions"
                    className="pop-up--create__section__title"
                  >
                    Directions
                  </label>
                  <Field
                    type="text"
                    className="pop-up--create__section__input--big"
                    name="directions"
                    placeholder="Directions"
                    component="input"
                  />
                </div>

                <div className="pop-up--create__section">
                  <label
                    htmlFor="cookingTime"
                    className="pop-up--create__section__title"
                  >
                    Cooking time
                  </label>
                  <Field
                    type="number"
                    className="pop-up--create__section__input"
                    name="cookingTime"
                    placeholder="Cooking time, minutes"
                    component="input"
                    min="1"
                    max="60"
                  />
                </div>

                <div className="pop-up--create__btns">
                  <button
                    className="pop-up--create__btns__btn--light"
                    onClick={() => setCreatePopUpVisible(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="pop-up--create__btns__btn"
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