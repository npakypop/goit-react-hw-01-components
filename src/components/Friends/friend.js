import PropTypes from "prop-types"
import css from './friend.module.css'
export default function Friend({ avatar, name, isOnline}) { 
    return (
        <li className={css.friends__item}>
            {/* <span className={css.status}>{ isOnline ? "is Online" : "ïs Offline"}</span> */}
            <span className={`${css.status} ${css[isOnline]}` }></span>
            <img className={css.avatar} src={ avatar } alt={ name } width="48" />
            <p className={css.name}>{ name }</p>
        </li>
    )
}
Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string
}
