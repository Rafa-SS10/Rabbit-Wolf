import React, { useState } from 'react';
import { createItem } from '../api';

const CreateItem = () => {
  const [first_name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem({ first_name });
      setName('');
      setError(null);
      window.location.reload(false);
    } catch (err) {
      setError('Failed to create item');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={first_name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Create</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default CreateItem;