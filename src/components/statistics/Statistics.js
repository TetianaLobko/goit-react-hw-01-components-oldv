import React from 'react';
import PropTypes from "prop-types";
import StatisticsList from './StatisticsList';
import styles from './Statistics.module.css';

const Statistics = ({ stats }) => (<section className={styles.statistics}>
    <h2 className={styles.title}>Upload stats</h2>
      <ul className={styles.statList}>
      {stats.map(({id, label, percentage}) => (
          <StatisticsList
            key={id}
            label={label}
            percentage={percentage}
            />
      ))}
    </ul>
    </section>
);
  Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }),
  ),
};

export default Statistics;