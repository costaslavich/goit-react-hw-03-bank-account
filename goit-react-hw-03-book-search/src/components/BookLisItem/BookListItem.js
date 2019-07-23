import React from 'react';
import PropTypes from 'prop-types';
import styles from './BookListItem.module.css';

const BookListItem = ({
  url,
  title,
  author,
  publisher,
  publishedDate,
  pageCount,
  rating,
}) => (
  <div className={styles.BookListItem}>
    <img src={url} alt="img-book-title" className={styles.img_book} />
    <h2>{title}</h2>
    <div className={styles.description_book}>
      <p>Author: {author}</p>
      <p>Publisher: {publisher}</p>
      <p>PublishedDate: {publishedDate}</p>
      <p>PageCount: {pageCount} pages</p>
      <p>Rating: {rating}</p>
    </div>
  </div>
);

BookListItem.defaultProps = {
  rating: 0,
  pageCount: 100,
  publisher: '',
  publishedDate: '',
};

BookListItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.number,
};

export default BookListItem;
