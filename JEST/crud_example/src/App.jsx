import React, { useEffect, useState } from 'react';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';
import { getItems } from './api';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await getItems();
      setItems(response.data);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <h1>CRUD Operations with React</h1>
      <CreateItem />
      <ItemList />
    </div>
  );
};

export default App;