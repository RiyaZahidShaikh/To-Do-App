// RemoveBtn.test.js

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RemoveBtn from '../components/RemoveBtn';
import '@testing-library/jest-dom'; // for the extended matchers
import fetchMock from 'jest-fetch-mock';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Setup mock fetch
fetchMock.enableMocks();

describe('RemoveBtn Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('renders the delete button', () => {
    render(<RemoveBtn id="123" />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('confirms the deletion and calls fetch with DELETE method', async () => {
    const mockRefresh = jest.fn();
    useRouter.mockReturnValue({ refresh: mockRefresh });
    
    render(<RemoveBtn id="123" />);

    const button = screen.getByRole('button');

    // Mock the confirm dialog to always return true
    jest.spyOn(window, 'confirm').mockImplementation(() => true);

    // Simulate a successful fetch response
    fetchMock.mockResponseOnce(JSON.stringify({}), { status: 200 });

    // Simulate the click event on the button
    fireEvent.click(button);

    // Ensure fetch was called with the correct URL and method
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('http://localhost:3000/api/topics/123', { method: 'DELETE' });
    });

    // Ensure the page refresh function was called
    await waitFor(() => {
      expect(mockRefresh).toHaveBeenCalled();
    });
  });

  it('does not call fetch if deletion is not confirmed', () => {
    render(<RemoveBtn id="123" />);

    const button = screen.getByRole('button');

    // Mock the confirm dialog to return false
    jest.spyOn(window, 'confirm').mockImplementation(() => false);

    // Simulate the click event on the button
    fireEvent.click(button);

    // Ensure fetch was not called since the deletion was not confirmed
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
