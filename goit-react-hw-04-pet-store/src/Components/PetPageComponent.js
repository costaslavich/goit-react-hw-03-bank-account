import React from 'react';
import PropTypes from 'prop-types';
import styles from './PetPageComponent.module.css';

const PetPage = ({ name, age, breed, gender, color, image, description }) => (
  <article className={styles.container}>
    <h2 className={styles.about}>All about {name}</h2>
    <div className={styles.inform}>
      <img src={image} alt="img-pets" />
      <div className={styles.descr}>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Color: {color}</p>
        <p>Breed: {breed}</p>
        <p>{description}</p>
      </div>
    </div>
  </article>
);

PetPage.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  breed: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PetPage;
