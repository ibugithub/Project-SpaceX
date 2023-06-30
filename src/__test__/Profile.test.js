import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';

// Mock the useSelector function
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock the CSS file import
jest.mock('../styles/Profile.css', () => ({}));

describe('Profile component', () => {
  it('renders joined missions correctly', () => {
    const missions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ];

    useSelector.mockImplementation((selector) => selector({ missions }));

    render(<Profile />);

    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
  });

  it('renders when there are no joined missions', () => {
    const missions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: false },
      { mission_id: 2, mission_name: 'Mission 2', reserved: false },
    ];

    useSelector.mockImplementation((selector) => selector({ missions }));

    render(<Profile />);

    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.queryByText('Mission 1')).toBeNull();
    expect(screen.queryByText('Mission 2')).toBeNull();
  });
});
