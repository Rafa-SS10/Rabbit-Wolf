import { render, fireEvent } from '@testing-library/react';
import UpdateItem from '../components/UpdateItem';
import { updateItem } from '../api';

jest.mock('../api');

test('updates an item', async () => {
  updateItem.mockResolvedValue({ data: { id: 1, first_name: 'George' } });

  const { getByPlaceholderText, getByText } = render(<UpdateItem id={1} />);
  const input = getByPlaceholderText('Enter new name');
  const button = getByText('Update');

  fireEvent.change(input, { target: { value: 'Updated User' } });
  fireEvent.click(button);

  expect(updateItem).toHaveBeenCalledWith(1, { first_name: 'Updated User' });
});