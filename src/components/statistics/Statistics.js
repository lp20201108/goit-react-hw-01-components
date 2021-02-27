import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";
import bgColor from "../../utils/colorRandom";

const Statistics = ({ title, stats }) => (
  <section className={styles.section}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map((stat) => (
        <li
          className={styles.item}
          key={stat.id}
          style={{
            backgroundColor: bgColor(),
          }}
        >
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: "",
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
