// Footer.test.js

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import '@testing-library/jest-dom'; // for the extended matchers

describe('Footer Component', () => {
  it('renders the ToDo title with icon', () => {
    render(<Footer />);
    
    // Check for the ToDo title and icon
    expect(screen.getByText(/ToDo/i)).toBeInTheDocument();
    // const icon = screen.getByTestId( 'calendar' );
    // expect(icon).toBeInTheDocument();
    // expect(screen.getByTestId("calendar" )).toBeInTheDocument();

  });

  it('renders the copyright text', () => {
    render(<Footer />);
    
    expect(screen.getByText(/Copyright 2024 Riya Zahid Shaikh/i)).toBeInTheDocument();
  });

  it('renders the LinkedIn and GitHub icons with links', () => {
    render(<Footer />);
    
    // Check for LinkedIn link and icon
    // const linkedInLink = screen.getByRole('link', { name: /linkedin/i });
    const linkedInLink = screen.getByTestId('linkedin');
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/riya-shaikh-30713126b');
    
    // Check for GitHub link and icon
    // const githubLink = screen.getByRole('link', { name: /github/i });
    const githubLink = screen.getByTestId('github')
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/RiyaZahidShaikh');
  });

  it('renders the email with icon', () => {
    render(<Footer />);
    
    // Check for the email text
    expect(screen.getByText(/riyazahidshaikh.official@gmail.com/i)).toBeInTheDocument();
    // Check for the email icon
    expect(screen.getByTestId(/mail/i )).toBeInTheDocument();
  });
});
