import PropTypes from "prop-types"
import css from './title.module.css'
export default function Title({ title }) { 
    return (
        <h2 className={css.title}>{title}</h2>
    )
}
Title.propTypes = {
  title: PropTypes.string
}
