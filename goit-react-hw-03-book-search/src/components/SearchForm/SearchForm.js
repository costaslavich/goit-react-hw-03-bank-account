import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  state = { query: '', subject: '' };

  handleChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSelect = e => {
    this.setState({
      subject: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit({ ...this.state });

    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    const { genres } = this.props;
    return (
      <form className={styles.form}>
        <input
          type="text"
          value={query}
          onChange={this.handleChange}
          className={styles.input_form}
        />
        <select onBlur={this.handleSelect} className={styles.select_form}>
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        <button
          type="button"
          onClick={this.handleSubmit}
          className={styles.button_form}
        >
          Search
        </button>
      </form>
    );
  }
}
