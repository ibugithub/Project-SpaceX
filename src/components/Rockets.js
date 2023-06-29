import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketsSlice';
import Rocket from './Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id}>
          <Rocket
            id={rocket.id}
            name={rocket.name}
            type={rocket.type}
            image={rocket.image}
            description={rocket.description}
          />
        </li>
      ))}
    </ul>

  );
};

export default Rockets;
