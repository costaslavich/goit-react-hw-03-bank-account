import React, { Component } from 'react';
import genres from './genres.json';
import BookList from './components/BookList/BookList';
import Loader from './components/Loader/Loader';
import ErrorNotification from './components/ErrorNotification/ErrorNotification';
import SearchForm from './components/SearchForm/SearchForm';
import * as articleAPI from './services/api';
import styles from './styles.css';

// const Spinner = require('react-spinkit');

const mapper = items =>
  items.map(
    ({
      id,
      volumeInfo: {
        imageLinks: { thumbnail: url },
        authors: [author],
        averageRating: rating,
        pageCount,
        title,
        publisher,
        publishedDate,
      },
    }) => ({
      id,
      url,
      author,
      title,
      publisher,
      publishedDate,
      rating,
      pageCount,
    }),
  );

export default class App extends Component {
  static defaultProps = {
    query: '',
    subject: '',
  };

  state = {
    items: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchItem({ query: 'react', subject: 'computers' });
  }

  fetchItem = ({ query, subject }) => {
    this.setState({ isLoading: true });

    articleAPI
      .fetchItems(query, subject)
      .then(({ data }) => {
        this.setState({ items: mapper(data.items) });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { items, isLoading, error } = this.state;
    return (
      <div className={styles.container}>
        {error && <ErrorNotification text={error.message} />}
        <SearchForm genres={genres} onSubmit={this.fetchItem} />

        {isLoading && <Loader />}
        {items.length > 0 && <BookList items={items} />}
      </div>
    );
  }
}
// <Spinner name="ball-scale-multiple" />
