import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Rocket.css';

const Rocket = ({
  id, name, image, description,
}) => (
  <div id="rocket-container">

    <img className="rocket-images" src={image} alt="rocket  images" />
    <div id="rocket-info">
      <span>{name}</span>
      <p>{description}</p>
      <button type="button" id={id}> Reserve Rocket</button>
    </div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Rocket;
