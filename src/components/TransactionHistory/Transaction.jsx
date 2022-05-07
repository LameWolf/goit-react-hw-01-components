import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr className={style.currentTransaction}>
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
