import React, { Dispatch, SetStateAction, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SERVER_URL from '../../../constants/serverUrl';
import { User } from '../../../interfaces';
import DotsIcon from '../../svg/Dots';
import ViewsIcon from '../../svg/Views';

import './index.scss';

type RecipeTrendingProps = {
  id: number;
  title: string;
  author: User;
  views: number;
  image: string;
  setVisible: Dispatch<SetStateAction<boolean>>;
  selectCard: Dispatch<SetStateAction<number>>;
};

export default function CardTrending(
  props: RecipeTrendingProps
): JSX.Element {
  const { id, views, image, title, author, setVisible, selectCard } = props;
  const { t } = useTranslation();

  return (
    <div className="card">
      <div className="card__info-container">
        <div className="card__statistics-item">
          <ViewsIcon />
          {views} {t('VIEWS')}
        </div>
        <DotsIcon />
      </div>

      <div className="card__image">
        <img src={`${SERVER_URL}/${image}`} alt="Recipe image" />
      </div>
      <div className="card__info-container--bottom">
        <div
          className="card__title"
          onClick={() => {
            selectCard(id);
            setVisible(true);
          }}
        >
          {title}
        </div>
        <div className="card__author">{author.name}</div>
      </div>
    </div>
  );
}
