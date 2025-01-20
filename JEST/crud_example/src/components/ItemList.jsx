import React, { useEffect, useState } from 'react';
import UpdateItem from './UpdateItem';
import DeleteItem from './DeleteItem';
import { getItems } from '../api';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await getItems();
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <><li key={item.id}>{item.first_name} {item.last_name}</li><UpdateItem id={item.id} /><DeleteItem id={item.id} /></>
      ))}
    </ul>
  );
};

export default ItemList;