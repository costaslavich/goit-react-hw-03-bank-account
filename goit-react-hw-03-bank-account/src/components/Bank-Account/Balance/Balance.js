import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, income, expense }) => (
  <section className={styles.balance}>
    <span className={styles.balance_downward}>
      <i className={styles.material_icons}>thumb_up</i>
      {income} $
    </span>

    <span className={styles.balance_upward}>
      <i className={styles.material_icons}>thumb_down</i>
      {expense} $
    </span>

    <span className={styles.balance_item}>
      <i className="material-icons">account_balance</i>
      Balance: {balance} $
    </span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expense: PropTypes.number.isRequired,
};

export default Balance;
