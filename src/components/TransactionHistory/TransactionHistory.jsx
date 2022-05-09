import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import style from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <Container>
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th className={style.th}>Type</th>
            <th className={style.th}>Amount</th>
            <th className={style.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={style.currentTransaction}>
                <td className={style.td}>{type}</td>
                <td className={style.td}>{amount}</td>
                <td className={style.td}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
