import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Profile from '../components/Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Profile component', () => {
  it('renders joined missions correctly', () => {
    const missions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ];

    useSelector.mockImplementation((selector) => selector({ missions }));

    const { getByText } = render(<Profile />);

    expect(getByText('My Missions')).toBeInTheDocument();
    expect(getByText('Mission 1')).toBeInTheDocument();
    expect(getByText('Mission 2')).toBeInTheDocument();
  });

  it('renders when there are no joined missions', () => {
    const missions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: false },
      { mission_id: 2, mission_name: 'Mission 2', reserved: false },
    ];

    useSelector.mockImplementation((selector) => selector({ missions }));

    const { getByText, queryByText } = render(<Profile />);

    expect(getByText('My Missions')).toBeInTheDocument();
    expect(queryByText('Mission 1')).toBeNull();
    expect(queryByText('Mission 2')).toBeNull();
  });
});
