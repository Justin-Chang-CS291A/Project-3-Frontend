import React, { useEffect, useState } from 'react';
import { SinglePost } from '..';

function SingleUser(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      fetch(`http://localhost:3000/users/${props.id}`)
        .then((r) => { if (r.ok) { return r.json(); } throw new Error('User not found'); })
        .then((r) => setUser(r));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }, []);

  return (
    <div className="user">
      {user ? (
        <>
          <h1>{user.email}</h1>
          {user.posts ? user.posts.map((post) => (
            <SinglePost post={post} />
          )) : null}
        </>
      ) : '404'}
    </div>
  );
}

export { SingleUser };
