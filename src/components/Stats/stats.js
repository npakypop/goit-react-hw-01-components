import PropTypes from "prop-types"
import css from './stats.module.css'

export default function Stats({ label, percentage }) {
    return (
        <li className={css.item}>  
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
    )
}

Stats.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}
