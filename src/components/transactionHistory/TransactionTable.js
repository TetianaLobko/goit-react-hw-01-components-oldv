import React from "react";
import PropTypes from "prop-types";

import styles from "./TransactionHistory.module.css";

const TransactionTable = ({ type, amount, currency }) => (
  <tr>
    <td className={styles.type}>{type}</td>
    <td className={styles.amount}>{amount}</td>
    <td className={styles.currency}>{currency}</td>
  </tr>
);

TransactionTable.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionTable;
