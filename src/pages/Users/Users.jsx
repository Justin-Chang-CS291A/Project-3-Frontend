import React, { useEffect, useState } from 'react';
import { CreateForm, SingleUser } from '../../components';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users').then((r) => r.json()).then((r) => setUsers(r));
  }, []);

  return (
    <>
      {users ? users.map((user) => (
        <SingleUser id={user.id} />
      )) : null}
      <CreateForm />
    </>
  );
}

export { Users };
