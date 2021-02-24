import PropTypes from "prop-types";
import styles from "./Transaction.module.css";

const TransactionHistory = ({ items }) => (
  <section>
    <table className={styles.table}>
      <thead>
        <tr className={styles.headRow}>
          <th className={styles.headData}>Type</th>
          <th className={styles.headData}>Amount</th>
          <th className={styles.headData}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.tableBody}>
        {items.map((item) => (
          <tr key={item.id} className={styles.tableRow}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
