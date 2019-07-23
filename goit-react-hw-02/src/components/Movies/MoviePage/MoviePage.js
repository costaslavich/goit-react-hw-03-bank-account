import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from '../MovieGrid/MovieGrid';
import SearchBar from '../SearchBar/SearchBar';
import styles from '../../../stylesMovie.css';

const filterItemsByQuery = (items, typedText) =>
  items.filter(item =>
    item.title.toLowerCase().includes(typedText.toLowerCase()),
  );

export default class MoviePage extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(Object).isRequired,
  };

  state = {
    items: this.props.items,
    typedText: '',
  };

  changeFilter = e => {
    this.setState({
      typedText: e.target.value,
    });
  };

  render() {
    const { items, typedText } = this.state;
    const filteredItemsByQuery = filterItemsByQuery(items, typedText);

    return (
      <div className={styles.container}>
        <SearchBar value={typedText} onChange={this.changeFilter} />
        <MovieGrid items={filteredItemsByQuery} />
      </div>
    );
  }
}
