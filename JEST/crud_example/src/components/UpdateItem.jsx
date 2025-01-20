import React, { useState } from 'react';
import { updateItem } from '../api';

const UpdateItem = ({ id }) => {
  const [first_name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(id, { first_name });
      setName('');
      setError(null);
      window.location.reload(false);
    } catch (err) {
      setError('Failed to update item');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter new name"
      />
      <button type="submit">Update</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default UpdateItem;