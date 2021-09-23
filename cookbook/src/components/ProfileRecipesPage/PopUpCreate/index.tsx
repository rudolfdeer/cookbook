import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Field } from 'react-final-form';

import './index.scss';

type PopUpCreateRecipeProps = {
  loggedInUserId: number;
  setCreatePopUpVisible: Dispatch<SetStateAction<boolean>>;
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
  description: [''],
  ingredients: [''],
  directions: [''],
};

const required = (value: string | string[]) => (value ? undefined : 'Required');

export default function PopUpCreateRecipe(
  props: PopUpCreateRecipeProps
): JSX.Element {
  const { setCreatePopUpVisible, createRecipe, loggedInUserId } = props;

  const [photoSrc, setPhotoSrc] = useState('');

  const onSubmit = (values: FormValues) => {
    createRecipe(values, loggedInUserId, photoSrc);
    setCreatePopUpVisible(false);
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

                <div className="pop-up__section image">
                  <label className="section__btn">
                    Upload Recipe Image
                    <input
                      name="image"
                      type="file"
                      className="section__input_file"
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
                    className="section__preview"
                  />
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
                    onClick={() => setCreatePopUpVisible(false)}
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
