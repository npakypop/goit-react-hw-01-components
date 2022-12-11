import PropTypes from "prop-types"
export default function Friend({ avatar, name, isOnline}) { 
    return (
        <li className="friends-item">
            <span className="status">{ isOnline ? "is Online" : "ïs Offline"}</span>
            <img className="avatar" src={ avatar } alt={ name } width="48" />
            <p className="name">{ name }</p>
        </li>
    )
}
Friend.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string
}
