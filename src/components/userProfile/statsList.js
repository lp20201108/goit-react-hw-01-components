import React from "react";
import styles from "./Profile.module.css";
import PropTypes from "prop-types";

const StatsList = ({ item }) => {
  return (
    <li className={styles.item}>
      <span className={styles.label}>{item.name}</span>
      <span className={styles.quantity}>{item.value}</span>
    </li>
  );
};

export default StatsList;

StatsList.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  }).isRequired,
};
