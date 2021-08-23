import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img alt='' src='https://cdn4.vectorstock.com/i/1000x1000/27/73/cute-girl-face-cartoon-vector-23302773.jpg' />
        { props.message }
          <div>
        <span>like</span> { props.likesCount }
      </div>
    </div>
  )
}

export default Post;