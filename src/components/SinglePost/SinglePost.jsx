import React from 'react';
import { SingleComment } from '..';

function SinglePost(props) {
  return (
    <div>
      <h2>{props.post.content}</h2>
      <ul>
        {props.post.comments ? props.post.comments.map((comment) => (
          <li><SingleComment comment={comment} /></li>
        )) : null}
      </ul>
    </div>
  );
}

export { SinglePost };
