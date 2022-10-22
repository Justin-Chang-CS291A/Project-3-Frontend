import React from 'react';
import { useParams } from 'react-router-dom';
import { DeleteForm, SingleUser, UpdateForm } from '../../components';

function User() {
  const { userId } = useParams();

  return (
    <div>
      {userId ? <SingleUser id={userId} /> : 'Loading'}
      <UpdateForm id={userId} />
      <DeleteForm id={userId} />
    </div>
  );
}

export { User };
