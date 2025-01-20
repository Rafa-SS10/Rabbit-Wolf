import { render, fireEvent } from '@testing-library/react';
import DeleteItem from '../components/DeleteItem';
import { deleteItem } from '../api';

jest.mock('../api');

test('deletes an item', async () => {
  deleteItem.mockResolvedValue({});

  const { getByText } = render(<DeleteItem id={1} />);
  const button = getByText('Delete');

  fireEvent.click(button);

  expect(deleteItem).toHaveBeenCalledWith(1);
});