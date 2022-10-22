import React from 'react';
import { useNavigate } from 'react-router-dom';

function UpdateForm(props) {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newEmail = e.target.email.value;

    if (!newEmail) {
      navigate('/404');
    }

    fetch(
      `http://localhost:3000/users/${props.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: { email: newEmail } }),
      },
    ).then(window.location.reload());
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <label htmlFor="form">
        New Email:
        <input type="text" name="email" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export { UpdateForm };
