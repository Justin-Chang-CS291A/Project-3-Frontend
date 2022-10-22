import React from 'react';

function SingleComment(props) {
  return (
    <div>
      <p>{props.comment.content}</p>
    </div>
  );
}

export { SingleComment };
