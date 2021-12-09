import React, { useState } from 'react';
import { AnyAction } from 'redux';
import api from '../../helpers/api';

type LikesIconProps = {
  loggedInUserId: number;
  //likeCookbook: (userId: number, cookbookId: number) => AnyAction;
  cookbookId: number;
};

export default function LikesIcon(props: LikesIconProps): JSX.Element {
  const grey = '#dadada';
  const yellow = '#ffbc01';

  const { loggedInUserId, cookbookId } = props;

  const checkColor = () => {
    if (!loggedInUserId) return grey;

    const cookbook = api.getCookbook(cookbookId);
    if (cookbook.usersLiked.indexOf(loggedInUserId) > -1) {
      return yellow;
    }
    return grey;
  };

  const [color, setColor] = useState(checkColor());

  // const like = () => {
  //   if (!loggedInUserId) return;
  //   likeCookbook(loggedInUserId, cookbookId);
  //   const newColor = color === grey ? yellow : grey;
  //   setColor(newColor);
  // };

  return (
    <svg
      className="card__statistics-item__icon"
      width="17"
      height="15"
      viewBox="0 0 17 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M8.5 14.9933C7.95175 14.5169 7.3321 14.0213 6.67675 13.4941H6.66825C4.36051 11.645 1.74507 9.55276 0.589918 7.0457C0.210409 6.24754 0.00928776 5.37915 9.69506e-06 4.49866C-0.00252482 3.29051 0.491974 2.13234 1.37175 1.28592C2.25153 0.439505 3.44233 -0.0237223 4.67501 0.000936424C5.67854 0.00248964 6.66046 0.286693 7.5038 0.819688C7.87437 1.05538 8.20966 1.34047 8.5 1.66676C8.79196 1.34175 9.12734 1.05682 9.49705 0.819688C10.34 0.286587 11.3217 0.00236782 12.325 0.000936424C13.5577 -0.0237223 14.7485 0.439505 15.6282 1.28592C16.508 2.13234 17.0025 3.29051 17 4.49866C16.9913 5.38056 16.7902 6.25043 16.4101 7.04986C15.2549 9.55693 12.6403 11.6484 10.3326 13.4941L10.3241 13.5008C9.6679 14.0247 9.0491 14.5202 8.50085 15L8.5 14.9933Z"
        fill={`${color}`}
      />
    </svg>
  );
}
