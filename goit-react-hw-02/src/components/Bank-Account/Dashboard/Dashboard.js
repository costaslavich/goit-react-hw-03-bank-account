import React, { Component } from 'react';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from '../../../stylesBank.css';

const shortid = require('shortid');

const date = new Date();

const Transaction = {
  DEPOSIT: 'Deposit',
  WITHDRAW: 'Withdraw',
};

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 0,
  };

  income = () => {
    const { history } = this.state;
    return history
      .filter(transaction => transaction.type === 'Deposit')
      .reduce((item, itemOperation) => item + itemOperation.amount, 0);
  };

  expense = () => {
    const { history } = this.state;
    return history
      .filter(transaction => transaction.type === 'Withdraw')
      .reduce((item, itemOperation) => item + itemOperation.amount, 0);
  };

  onClickButtonDeposit = value => {
    const item = {
      id: shortid.generate(),
      type: Transaction.DEPOSIT,
      amount: value,
      date: date.toLocaleString(),
    };

    if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else
      this.setState(prevState => ({
        balance: prevState.balance + value,
        history: [...prevState.history, item],
      }));
  };

  onClickButtonWithdraw = value => {
    const item = {
      id: shortid.generate(),
      type: Transaction.WITHDRAW,
      amount: value,
      date: date.toLocaleString(),
    };

    if (value === 0) {
      alert('Введите сумму для проведения операции!');
    } else if (value > this.state.balance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else
      this.setState(prevState => ({
        balance: prevState.balance - value,
        history: [...prevState.history, item],
      }));
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div className={styles.dashboard}>
        <Controls
          onClickDeposit={this.onClickButtonDeposit}
          onClickWithdraw={this.onClickButtonWithdraw}
        />
        <Balance
          balance={balance}
          income={this.income(history)}
          expense={this.expense(history)}
        />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
