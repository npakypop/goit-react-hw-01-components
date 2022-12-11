import PropTypes from "prop-types"
export default function Stats({ label, percentage }) {
    return (
        <li className="item">  
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
}
Stats.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number
}
