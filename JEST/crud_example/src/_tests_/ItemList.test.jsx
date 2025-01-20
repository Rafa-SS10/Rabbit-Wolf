import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ItemList from '../components/ItemList';
import { getItems } from '../api';

jest.mock('../api');

test('fetches and displays items', async () => {
  getItems.mockResolvedValue({ data: [{ id: 1, first_name: 'George', last_name: 'Bluth' }] });

  render(<ItemList />);

  await waitFor(() => {
    expect(screen.getByText('George Bluth')).toBeInTheDocument();
  });
});