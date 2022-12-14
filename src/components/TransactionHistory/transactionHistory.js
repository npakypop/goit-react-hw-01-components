// import PropTypes from "prop-types"
import Transaction from './trasaction';
import css from './transactionHistory.module.css'

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({id, type, amount, currency}) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

// TransactionHistory.propTypes = {
//   transactions: PropTypes.shape({
//     map: PropTypes.func
//   })
// }