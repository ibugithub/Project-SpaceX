import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: {} }),
}));

const mockStore = configureMockStore();

describe('Rockets component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rockets: {
        rockets: [
          {
            id: 1,
            name: 'Falcon 9',
            type: 'Reusable',
            image: 'rocket.jpg',
            description: 'Description',
            isReserved: false,
          },
        ],
      },
    });
  });

  it('renders a list of rockets', () => {
    render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const rocketList = screen.getByRole('list');
    const rockets = screen.getAllByRole('listitem');

    expect(rocketList).toBeInTheDocument();
    expect(rockets.length).toBe(1); //
  });
});
