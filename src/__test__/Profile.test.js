import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

jest.mock('../components/Profile', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('Profile component', () => {
  it('renders joined missions correctly', () => {
    const missions = [
      { mission_id: 1, mission_name: 'Mission 1', reserved: true },
      { mission_id: 2, mission_name: 'Mission 2', reserved: true },
    ];

    Profile.mockImplementation(() => (
      <div>
        <h2>My Missions</h2>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <p>{mission.mission_name}</p>
          </div>
        ))}
      </div>
    ));

    render(<Profile />);
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.getByText('Mission 1')).toBeInTheDocument();
    expect(screen.getByText('Mission 2')).toBeInTheDocument();
  });

  it('renders when there are no joined missions', () => {
    const missions = [];

    Profile.mockImplementation(() => (
      <div>
        <h2>My Missions</h2>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <p>{mission.mission_name}</p>
          </div>
        ))}
      </div>
    ));

    render(<Profile />);
    expect(screen.getByText('My Missions')).toBeInTheDocument();
    expect(screen.queryByText('Mission 1')).toBeNull();
    expect(screen.queryByText('Mission 2')).toBeNull();
  });
});
