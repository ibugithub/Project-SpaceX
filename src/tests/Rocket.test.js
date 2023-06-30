import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rocket from '../components/Rocket';

const mockStore = configureMockStore([thunk]);
jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Rocket component', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it('renders Rocket component correctly', () => {
    const rocketData = {
      id: 1,
      name: 'Falcon 9',
      description: 'Description',
      image: 'rocket.jpg',
      isReserved: false,
    };

    render(
      <Provider store={store}>
        <Rocket
          id={rocketData.id}
          name={rocketData.name}
          description={rocketData.description}
          image={rocketData.image}
          isReserved={rocketData.isReserved}
        />
      </Provider>,
    );
  });

  it('handles reserveRocket function correctly', () => {
    const rocketData = {
      id: 1,
      name: 'Falcon 9',
      description: 'Description',
      image: 'rocket.jpg',
      isReserved: false,
    };

    render(
      <Provider store={store}>
        <Rocket
          id={rocketData.id}
          name={rocketData.name}
          description={rocketData.description}
          image={rocketData.image}
          isReserved={rocketData.isReserved}
        />
      </Provider>,
    );

    const reserveButton = screen.getByRole('button', { name: 'Reserve Rocket' });

    fireEvent.click(reserveButton);
  });

  it('handles cancelReservation function correctly', () => {
    const rocketData = {
      id: 1,
      name: 'Falcon 9',
      description: 'Description',
      image: 'rocket.jpg',
      isReserved: true,
    };

    render(
      <Provider store={store}>
        <Rocket
          id={rocketData.id}
          name={rocketData.name}
          description={rocketData.description}
          image={rocketData.image}
          isReserved={rocketData.isReserved}
        />
      </Provider>,
    );

    const cancelButton = screen.getByRole('button', { name: 'Cancel Reservation' });

    fireEvent.click(cancelButton);
  });
});
