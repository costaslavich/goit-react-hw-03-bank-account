import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    className={styles.input}
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Enter movie title ..."
  />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
