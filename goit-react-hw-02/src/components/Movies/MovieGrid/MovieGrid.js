import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGrid.styles.css';

const MovieGrid = ({ items }) =>
  items.length === 0 ? (
    <div>
      <h2>No matching results!</h2>
    </div>
  ) : (
    <div className={styles.movie_grid}>
      {items.map(item => (
        <MovieGridItem
          key={item.id}
          title={item.title}
          posterUrl={item.posterUrl}
          overview={item.overview}
        />
      ))}
    </div>
  );

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieGrid;
