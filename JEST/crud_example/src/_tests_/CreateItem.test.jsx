import { render, fireEvent } from '@testing-library/react';
import CreateItem from '../components/CreateItem';
import { createItem } from '../api';

jest.mock('../api');

test('creates a new item', async () => {
  createItem.mockResolvedValue({ data: { id: 1, first_name: 'Test User' } });

  const { getByPlaceholderText, getByText } = render(<CreateItem />);
  const input = getByPlaceholderText('Enter name');
  const button = getByText('Create');

  fireEvent.change(input, { target: { value: 'Test User' } });
  fireEvent.click(button);

  expect(createItem).toHaveBeenCalledWith({ first_name: 'Test User' });
});