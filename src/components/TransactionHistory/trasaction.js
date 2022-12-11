import PropTypes from "prop-types"
export default function Transaction({type, amount, currency}) {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    )
}
Transaction.propTypes = {
  amount: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string
}
