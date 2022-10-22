import React from 'react';
import { useNavigate } from 'react-router-dom';

function DeleteForm(props) {
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    fetch(
      `http://localhost:3000/users/${props.id}`,
      { method: 'DELETE' },
    ).then(window.location.reload())
      .then(navigate('/users'));
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <label htmlFor="form">
        Delete:
        <input type="submit" value="Submit" />
      </label>
    </form>
  );
}

export { DeleteForm };
