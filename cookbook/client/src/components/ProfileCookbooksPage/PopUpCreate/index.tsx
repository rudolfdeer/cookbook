import React, { Dispatch, SetStateAction, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import api from '../../../helpers/api';
import { CookbookValues } from '../../../redux/thunks/cookbooks';

import './index.scss';

type PopUpCreateCookbookProps = {
  loggedInUserId: number;
  setCreatePopUpVisible: Dispatch<SetStateAction<boolean>>;
  createCookbook: (
    data: CookbookValues,
    imageSrc: string,
    userId: number,
  ) => Promise<void>;
};

type FormValues = {
  title: string;
  image?: string;
  description: string;
  recipesIds: number[];
  Vegetarian?: boolean;
  'Without eggs'?: boolean;
  'Without milk'?: boolean;
  tags: string[];
};

const formData = {
  title: '',
  description: [''],
  recipesIds: [0],
  tags: [] as string[],
};

const required = (value: string | string[]) => (value ? undefined : 'Required');

export default function PopUpCreateCookbook(
  props: PopUpCreateCookbookProps
): JSX.Element {
  const { t } = useTranslation();
  const { loggedInUserId, setCreatePopUpVisible, createCookbook } = props;
  const [photoSrc, setPhotoSrc] = useState('');

  const onSubmit = (values: FormValues) => {
    if (values.Vegetarian) {
      values.tags.push('Vegetarian');
    }
    if (values['Without eggs']) {
      values.tags.push('Without eggs');
    }
    if (values['Without milk']) {
      values.tags.push('Without milk');
    }

    createCookbook(values, photoSrc, loggedInUserId);
    setCreatePopUpVisible(false);
  };

  const usersRecipes = api.getUsersRecipes(loggedInUserId);

  return (
    <div className="overlay">
      <div className="overlay__content">
        <div className="pop-up--create">
          <div className="pop-up--create__title">
            {t('CREATE_NEW_COOKBOOK')}
          </div>

          <Form
            onSubmit={onSubmit}
            initialValues={{ ...formData }}
            render={({ handleSubmit }) => (
              <form action="" onSubmit={handleSubmit}>
                <div className="pop-up--create__section">
                  <Field name="title" validate={required}>
                    {({ input, meta }) => (
                      <>
                        <label
                          htmlFor="title"
                          className="pop-up--create__section__title"
                        >
                          {t('COOKBOOK_TITLE')}
                          <span>*</span>
                        </label>
                        <input
                          {...input}
                          type="text"
                          className="pop-up--create__section__input--error"
                          placeholder="Title"
                        />
                        {meta.error && meta.touched ? (
                          <span className="pop-up--create__section__input__error">
                            {meta.error}
                          </span>
                        ) : (
                          <span className="pop-up--create__section__input__error"></span>
                        )}
                      </>
                    )}
                  </Field>
                </div>

                <div className="pop-up--create__section--image">
                  <label className="pop-up--create__section__btn">
                    {t('UPLOAD_CB_IMAGE')}
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
                    {t('DESCRIPTION')}
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
                    {t('RECIPES')}
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

                <div className="pop-up--create__section">
                  <div className="pop-up--create__section__title">
                    {t('TAGS')}
                  </div>
                  <div className="pop-up--create__section__container--checkboxes">
                    <div className="pop-up--create__section__container--checkbox">
                      <label
                        htmlFor="Vegetarian"
                        className="pop-up--create__section__label"
                      >
                        {t('VEGETARIAN')}
                      </label>
                      <Field
                        className="pop-up--create__section__input--checkbox"
                        name="Vegetarian"
                        component="input"
                        type="checkbox"
                      ></Field>
                    </div>
                    <div className="pop-up--create__section__container--checkbox">
                      <label
                        htmlFor="Without eggs"
                        className="pop-up--create__section__label"
                      >
                        {t('WITHOUT_EGGS')}
                      </label>
                      <Field
                        className="pop-up--create__section__input--checkbox"
                        name="Without eggs"
                        component="input"
                        type="checkbox"
                      ></Field>
                    </div>
                    <div className="pop-up--create__section__container--checkbox">
                      <label
                        htmlFor="Without milk"
                        className="pop-up--create__section__label"
                      >
                        {t('WITHOUT_MILK')}
                      </label>
                      <Field
                        className="pop-up--create__section__input--checkbox"
                        name="Without milk"
                        component="input"
                        type="checkbox"
                      ></Field>
                    </div>
                  </div>
                </div>

                <div className="pop-up--create__section"></div>

                <div className="pop-up--create__btns">
                  <button
                    className="pop-up--create__btns__btn--light"
                    onClick={() => setCreatePopUpVisible(false)}
                  >
                    {t('CANCEL_BTN')}
                  </button>
                  <button type="submit" className="pop-up--create__btns__btn">
                    {t('CONFIRM_BTN')}
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
