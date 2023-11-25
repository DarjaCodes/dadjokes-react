import './jokes.css';
import { useState } from 'react';

export const Jokes = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [countDislike, setCountDislike] = useState(likes);
  const [countLike, setCountLike] = useState(dislikes);

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={() => setCountLike(countLike + 1)}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {countLike}
        </span>
        <button
          onClick={() => setCountDislike(countDislike + 1)}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {countDislike}
        </span>
      </div>
    </div>
  );
};
