import React from 'react';
import PropTypes from 'prop-types';
import BookListItem from '../BookLisItem/BookListItem';
import styles from './BookList.module.css';

const BookList = ({ items }) => (
  <div className={styles.container}>
    <ul className={styles.BookList}>
      {items.map(item => (
        <li key={item.id} className={styles.BookList_Item}>
          <BookListItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);
BookList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;
