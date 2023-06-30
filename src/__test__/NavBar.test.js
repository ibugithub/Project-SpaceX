import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar testing', () => {
  it('Navbar component rendered correctly', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(screen.getByAltText('Saturn Logo')).toBeInTheDocument();
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'This is a menu logo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Rockets' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Missions' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Profile' })).toBeInTheDocument();
  });

  it('testing navbar toggling', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const menuButton = screen.getByRole('button', { name: 'This is a menu logo' });
    const navBar = screen.getByTestId('navBar');
    const navContainer = screen.getByTestId('nav-container');
    const separator = screen.getByTestId('separator');

    expect(navBar).not.toHaveClass('toggledNav');
    expect(navContainer).not.toHaveClass('alignTop');
    expect(separator).toHaveStyle({ display: 'block' });

    fireEvent.click(menuButton);

    expect(navBar).toHaveClass('toggledNav');
    expect(navContainer).toHaveClass('alignTop');
    expect(separator).not.toHaveStyle({ display: 'block' });

    fireEvent.click(menuButton);
    expect(navBar).not.toHaveClass('toggledNav');
    expect(navContainer).not.toHaveClass('alignTop');
    expect(separator).toHaveStyle({ display: 'block' });
  });
});
