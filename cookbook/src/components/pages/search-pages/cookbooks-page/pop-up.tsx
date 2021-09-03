import React from 'react';
import { Cookbook } from '../../../../constants/types';

import '../pop-up.scss';

type PopUpCookbookDetailedProps = {
  openDetailedInfo: Function;
  cardInfo: Cookbook;
};

export default function PopUpCookbookDetailed(props: PopUpCookbookDetailedProps): JSX.Element {
  const { openDetailedInfo, cardInfo } = props;
  const { id, views, image, description, name, author, likes, comments, recipes } = cardInfo;

  function closePopUp(e: React.MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.classList.contains('overlay') || target.classList.contains('btn-close')) {
      openDetailedInfo(false);
    }
  }

  return (
    <div className="overlay" onClick = {(e) => closePopUp(e)}>
      <div className="btn-close"></div>
      <div className="content">
        <div className="pop-up">

          <div className="pop-up-section top">
            <div className="pop-up-title">{name}</div>
            <button className="btn-clone">Clone to my CookBook</button>
          </div>

          <div className="pop-up-author">{author}</div>

          <div className="pop-up-section description">
            <div className="pop-up-image" style ={{ background: `url(../../../../public/${image}) center no-repeat` }}></div>
            <div className="description">
              <div className="pop-up-section-title">Description</div>
              <p>{description}</p>
            </div>
          </div>

          <div className="pop-up-section statistics">
          <div className="statistics-item likes">
            <svg className = "statistics-item-icon" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 14.9933C7.95175 14.5169 7.3321 14.0213 6.67675 13.4941H6.66825C4.36051 11.645 1.74507 9.55276 0.589918 7.0457C0.210409 6.24754 0.00928776 5.37915 9.69506e-06 4.49866C-0.00252482 3.29051 0.491974 2.13234 1.37175 1.28592C2.25153 0.439505 3.44233 -0.0237223 4.67501 0.000936424C5.67854 0.00248964 6.66046 0.286693 7.5038 0.819688C7.87437 1.05538 8.20966 1.34047 8.5 1.66676C8.79196 1.34175 9.12734 1.05682 9.49705 0.819688C10.34 0.286587 11.3217 0.00236782 12.325 0.000936424C13.5577 -0.0237223 14.7485 0.439505 15.6282 1.28592C16.508 2.13234 17.0025 3.29051 17 4.49866C16.9913 5.38056 16.7902 6.25043 16.4101 7.04986C15.2549 9.55693 12.6403 11.6484 10.3326 13.4941L10.3241 13.5008C9.6679 14.0247 9.0491 14.5202 8.50085 15L8.5 14.9933Z" fill="#DADADA"/>
            </svg>
            {likes} likes
          </div>
          <div className="statistics-item comments">
            <svg className = "statistics-item-icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 15V1.66667C0 0.746192 0.746192 0 1.66667 0H13.3333C14.2538 0 15 0.746192 15 1.66667V10C15 10.9205 14.2538 11.6667 13.3333 11.6667H5C4.63928 11.666 4.28818 11.783 4 12L0 15Z" fill="#DADADA"/>
            </svg>
            {comments.length} comments
          </div>
          </div>
          <div className="pop-up-section recipes">
            <div className="pop-up-section-title">Recipes</div>
          </div>
          <div className="pop-up-section comments">
          <div className="pop-up-section-title">{`Comments (${comments.length})`}</div>
          </div>

        </div>
      </div>
    </div>
  );
}
