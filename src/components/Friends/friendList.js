import Friend from './friend'
import css from './friendList.module.css'

export default function FriendList({friends}) { 
    return (
        <ul className={ css.friends__list }>
            {friends.map(el => (              
                <Friend
                    key={el.id}
                    name={el.name}
                    avatar={el.avatar}
                    isOnline={el.isOnline}
                />
            ))}
        </ul>
    )
}