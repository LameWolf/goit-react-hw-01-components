import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import { Transaction } from './Transaction';
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
              <Transaction
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              ></Transaction>
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
