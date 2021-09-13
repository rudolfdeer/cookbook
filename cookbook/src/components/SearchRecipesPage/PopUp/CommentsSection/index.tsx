import React from 'react';
import { Comment } from '../../../../interfaces';

import './index.scss';

type CommentsSectionProps = {
  comments: Comment[];
  userId: number;
};

export default function CommentsSection(
  props: CommentsSectionProps
): JSX.Element {
  const { comments, userId } = props;

  function getDate(dateString: string) {
    return dateString.split(' ').slice(0, 4).join(' ');
  }

  const newCommentSection = (
    <div className="comment-new">
      <input
        type="text"
        className="comment-new__input"
        placeholder="Express yourself..."
      />
      <button className="comment-new__btn"></button>
    </div>
  );

  return (
    <>
      {userId ? newCommentSection : null}
      <div className="comments">
        {comments?.map((el) => (
          <div className="comments__item" key={Math.random()}>
            <div
              className="comment__photo"
              style={{
                background: `url(../../../../assets/${el.photo}) center no-repeat`,
              }}
            ></div>
            <div className="comment__text-info">
              <div className="text-info__container_top">
                <div className="comment__username">{el.user}</div>
                <div className="comment__time">{getDate(el.date)}</div>
              </div>
              <div className="comment__text">{el.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
