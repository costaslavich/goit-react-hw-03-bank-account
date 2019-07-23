import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGridItem.module.css';

const MovieGridItem = ({ title, posterUrl, overview }) => (
  <Fragment>
    <div className={styles.movie_card}>
      <img src={posterUrl} alt={title} />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{overview}</p>
      </div>
    </div>
  </Fragment>
);

MovieGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  posterUrl: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieGridItem;
