import React, { Component } from 'react';
import PetPageList from '../Components/PetPageList';
import petsJson from '../pets.json';
import styles from './PetsPage.module.css';

export default class PetsPage extends Component {
  state = {
    pets: [],
  };

  componentDidMount() {
    this.setState({
      pets: petsJson,
    });
  }

  render() {
    const { pets } = this.state;

    return (
      <div>
        <h2 className={styles.available}>Available pets !!!</h2>
        <PetPageList items={pets} />
      </div>
    );
  }
}
