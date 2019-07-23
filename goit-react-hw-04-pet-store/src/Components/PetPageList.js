import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PetPageList.module.css';

const PetPageList = ({ items = [] }) => (
  <div>
    <ul className={styles.petpagelist}>
      {items.map(item => (
        <li key={item.id} className={styles.petitem}>
          <Link to={{ pathname: `/pets/${item.id}`, state: { from: '/' } }}>
            <div className={styles.petdescr}>
              <img src={item.image} alt="pet-img" />
              <p>{item.name}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
PetPageList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default withRouter(PetPageList);
