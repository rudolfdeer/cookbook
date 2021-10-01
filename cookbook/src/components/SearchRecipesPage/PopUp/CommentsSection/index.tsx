import React, { useState } from 'react';
import { AnyAction } from 'redux';
import api from '../../../../helpers/api';
import { Comment } from '../../../../interfaces';

import './index.scss';

type CommentsSectionProps = {
  comments: Comment[];
  loggedInUserId: number;
  recipeId: number;
  createComment: (
    recipeId: number,
    userId: number,
    commentText: string
  ) => AnyAction;
};

export default function CommentsSection(
  props: CommentsSectionProps
): JSX.Element {
  const { comments, loggedInUserId, recipeId, createComment } = props;
  const [newComment, setNewComment] = useState('');

  const getDate = (dateString: string) =>
    dateString.split(' ').slice(0, 4).join(' ');

  const newCommentSection = (
    <div className="comment--new">
      <input
        type="text"
        className="comment--new__input"
        placeholder="Express yourself..."
        value={newComment}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setNewComment(target.value);
        }}
      />
      <button
        className="comment--new__btn"
        onClick={() => {
          createComment(recipeId, loggedInUserId, newComment);
          setNewComment('');
        }}
      ></button>
    </div>
  );

  return (
    <>
      {loggedInUserId ? newCommentSection : null}
      <div className="comments">
        {comments?.map((el) => (
          <div className="comment" key={Math.random()}>
            <div
              className="comment__photo"
              style={{
                background: `url(${api.getUserPhoto(
                  el.userId
                )}) center no-repeat`,
              }}
            ></div>
            <div className="comment__container">
              <div className="comment__container--top">
                <div className="comment__user">
                  {api.getUserName(el.userId)}
                </div>
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
