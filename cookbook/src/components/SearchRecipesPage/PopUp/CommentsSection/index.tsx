import React, { useState } from 'react';
import api from '../../../../helpers/api';
import { Comment } from '../../../../interfaces';

import './index.scss';

type CommentsSectionProps = {
  comments: Comment[];
  userId: number;
  recipeId: number;
  createComment: Function;
};

export default function CommentsSection(
  props: CommentsSectionProps
): JSX.Element {
  const { comments, userId, recipeId, createComment } = props;
  const [newComment, setNewComment] = useState('');

  const getDate = (dateString: string) =>
    dateString.split(' ').slice(0, 4).join(' ');

  const getUserName = (id: number) => {
    const user = api.getUser(id);
    return user.username;
  };

  const getUserPhoto = (id: number) => {
    const user = api.getUser(id);
    return user.avatar;
  };

  const newCommentSection = (
    <div className="comment-new">
      <input
        type="text"
        className="comment-new__input"
        placeholder="Express yourself..."
        value={newComment}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setNewComment(target.value);
        }}
      />
      <button
        className="comment-new__btn"
        onClick={() => {
          createComment(recipeId, userId, newComment);
        }}
      ></button>
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
                background: `url(${getUserPhoto(el.userId)}) center no-repeat`,
              }}
            ></div>
            <div className="comment__text-info">
              <div className="text-info__container_top">
                <div className="comment__username">
                  {getUserName(el.userId)}
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
