// import PropTypes from "prop-types"
import Friend from './friend'
import css from './friendList.module.css'

export default function FriendList({friends}) { 
    return (
        <ul className={ css.friendsList }>
            {friends.map(({id, name, avatar, isOnline}) => (              
                <Friend
                    key={id}
                    name={name}
                    avatar={avatar}
                    isOnline={isOnline}
                />
            ))}
        </ul>
    )
}

// FriendList.propTypes = {
//   friends: PropTypes.shape({
//     map: PropTypes.func
//   })
// }
