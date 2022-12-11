import Friend from './friend'

export default function FriendList({friends}) { 
    return (
        <ul className="friends-list">
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