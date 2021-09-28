import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import api from '../../../helpers/api';

import './index.scss';

type PopUpCreateCookbookProps = {
  loggedInUserId: number;
  setCreatePopUpVisible: Dispatch<SetStateAction<boolean>>;
  createCookbook: Function;
};

type FormValues = {
  title: string;
  image?: string;
  description: string;
  recipesIds: number[];
};

const formData = {
  title: '',
  description: [''],
  recipesIds: [0],
};

const required = (value: string | string[]) => (value ? undefined : 'Required');

export default function PopUpCreateCookbook(
  props: PopUpCreateCookbookProps
): JSX.Element {
  const { loggedInUserId, setCreatePopUpVisible, createCookbook } = props;
  const [photoSrc, setPhotoSrc] = useState('');

  const onSubmit = (values: FormValues) => {
    createCookbook(values, loggedInUserId, photoSrc);
    setCreatePopUpVisible(false);
  };

  const usersRecipes = api.getUsersRecipes(loggedInUserId);

  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up--create">
          <div className="pop-up--create__title">Create New Cookbook</div>

          <Form
            onSubmit={onSubmit}
            initialValues={{ ...formData }}
            render={({ handleSubmit }) => (
              <form action="" onSubmit={handleSubmit}>
                <div className="pop-up--create__section">
                  <label
                    htmlFor="title"
                    className="pop-up--create__section__title"
                  >
                    Cookbook Title<span>*</span>
                  </label>
                  <Field
                    type="text"
                    className="pop-up--create__section__input"
                    name="title"
                    placeholder="Title"
                    component="input"
                    validate={required}
                  />
                </div>

                <div className="pop-up--create__section--image">
                  <label className="pop-up--create__section__btn">
                    Upload Cookbook Image
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
                    htmlFor="recipesIds"
                    className="pop-up--create__section__title"
                  >
                    Recipes
                  </label>
                  <Field
                    className="pop-up--create__section__input--select"
                    name="recipesIds"
                    component="select"
                    multiple
                  >
                    {usersRecipes?.map((el) => (
                      <option key={el.id} value={el.id}>
                        {el.title}
                      </option>
                    ))}
                  </Field>
                </div>

                <div className="pop-up--create__section"></div>

                <div className="pop-up--create__btns">
                  <button
                    className="pop-up--create__btns__btn--light"
                    onClick={() => setCreatePopUpVisible(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="pop-up--create__btns__btn">
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
