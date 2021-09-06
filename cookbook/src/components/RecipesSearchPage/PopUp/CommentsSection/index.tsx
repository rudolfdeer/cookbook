import React from 'react';
import { Comment } from '../../../../constants/types';

import './index.scss';

type CommentsSectionProps = {
  comments: Comment[];
}

export default function CommentsSection(props: CommentsSectionProps): JSX.Element {
  const { comments } = props;

  function getDate(dateString: string) {
    return dateString.split(' ').slice(0, 4).join(' ');
  }

  function getUser(userId: number) {

  }

  return (
    <>
    <div className="comment-input-container">
      <input type="text" className="input" placeholder = "Express yourself..." />
      <button className="btn-send"></button>
    </div>
    <div className="comments-container">
    {comments?.map((el) => (
        <div className="comment-container">
          <div className="photo" style ={{ background: `url(../../public/${el.photo}) center no-repeat` }}></div>
          <div className="text-container">
            <div className="top">
              <div className="username">{el.author}</div>
              <div className="time">{getDate(el.date)}</div>
            </div>
            <div className="comment">{el.comment}</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
