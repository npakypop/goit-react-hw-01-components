import PropTypes from "prop-types"
import css from './Transaction.module.css'

export default function Transaction({type, amount, currency}) {
    return (
        <tr className={css.tableRow}>
            <td className={css.column}>{type}</td>
            <td className={css.column}>{amount}</td>
            <td className={css.column}>{currency}</td>
        </tr>
    )
}

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}
