import React, { useState } from 'react';
import { deleteItem } from '../api';

const DeleteItem = ({ id }) => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      await deleteItem(id);
      setError(null);
      window.location.reload(false);
    } catch (err) {
      setError('Failed to delete item');
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteItem;