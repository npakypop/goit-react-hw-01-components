import PropTypes from "prop-types"
import Friend from '../Friend/friend'
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

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}
