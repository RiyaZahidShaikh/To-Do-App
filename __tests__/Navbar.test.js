import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/Navbar';
describe('Navbar Component', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Reset mock function call counts before each test
  });

  it('renders navbar elements correctly', () => {
    render(<Navbar />);

    // Assert presence of elements
    expect(screen.getByText('ToDo')).toBeInTheDocument();
    expect(screen.getByText('Add Task')).toBeInTheDocument();
  });
});