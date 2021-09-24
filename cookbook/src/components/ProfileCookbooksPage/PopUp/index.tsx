import React, {
  Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { Form, Field } from 'react-final-form';
import api from '../../../helpers/api';

import './index.scss';

type PopUpCreateCookbookProps = {
  loggedInUserId: number;
  setVisible: Dispatch<SetStateAction<boolean>>;
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
  props: PopUpCreateCookbookProps,
): JSX.Element {
  const { loggedInUserId, setVisible, createCookbook } = props;
  const [photoSrc, setPhotoSrc] = useState('');

  const onSubmit = (values: FormValues) => {
    createCookbook(values, loggedInUserId, photoSrc);
    setVisible(false);
  };

  const usersRecipes = api.getUsersRecipes(loggedInUserId);

  return (
    <div className="overlay">
      <div className="overlay__btn"></div>
      <div className="overlay__content">
        <div className="pop-up create">
          <div className="pop-up__title">Create New Cookbook</div>

          <Form
            onSubmit={onSubmit}
            initialValues={{ ...formData }}
            render={({ handleSubmit }) => (
              <form action="" className="pop-up__form" onSubmit={handleSubmit}>
                <div className="pop-up__section">
                  <label htmlFor="title" className="section__title">
                    Cookbook Title<span>*</span>
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
                    Upload Cookbook Image
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
                  <label htmlFor="recipesIds" className="section__title">
                    Recipes
                  </label>
                  <Field
                    className="section__input_select"
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

                <div className="pop-up__section"></div>

                <div className="btns">
                  <button
                    className="btn_light"
                    onClick={() => setVisible(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn">
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
