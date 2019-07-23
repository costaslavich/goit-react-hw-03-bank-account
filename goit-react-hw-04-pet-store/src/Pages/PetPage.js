import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PetPageComponent from '../Components/PetPageComponent';
import petsJson from '../pets.json';
import styles from './PetPage.module.css';

const activeStyle = {
  color: 'white',
  backgroundColor: 'black',
  textDecoration: 'none',
  padding: '10px 40px',
};

const getIdFromProps = props => props.match.params.id;

export default class PetPage extends Component {
  state = {
    pets: null,
  };

  componentDidMount() {
    const id = getIdFromProps(this.props);
    const petsId = petsJson.find(item => item.id === id);

    this.setState({ pets: petsId });
  }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <h2 className={styles.return}>
          <NavLink to="/pets" activeStyle={activeStyle}>
            <i className="material-icons">keyboard_backspace</i>
            &nbsp; Return
          </NavLink>
        </h2>
        {pets && <PetPageComponent {...pets} />}
      </div>
    );
  }
}
