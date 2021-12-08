import React, { useState } from 'react';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import api from '../../../../helpers/api';
import { Comment } from '../../../../interfaces';

import './index.scss';

type CommentsSectionProps = {
  comments: Comment[];
  loggedInUserId: number;
  cookbookId: number;
  createComment: (
    cookbookId: number,
    userId: number,
    commentText: string
  ) => () => Promise<void>;
};

export default function CommentsSection(
  props: CommentsSectionProps
): JSX.Element {
  const { t } = useTranslation();
  const { comments, loggedInUserId, cookbookId, createComment } = props;
  const [newComment, setNewComment] = useState('');

  function getDate(dateString: string) {
    return dateString.split(' ').slice(0, 4).join(' ');
  }

  const newCommentSection = (
    <div className="comment--new">
      <input
        type="text"
        className="comment--new__input"
        placeholder={t('COMMENT_INPUT_PLACEHOLDER')}
        value={newComment}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          setNewComment(target.value);
        }}
      />
      <button
        className="comment--new__btn"
        onClick={() => {
          createComment(cookbookId, loggedInUserId, newComment);
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
