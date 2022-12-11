import Friend from './friend'

export default function FriendList({friends}) { 
    return (
        <ul className="friends-list">
            {friends.map(el => (
                <li key={el.id} className="friends-item">
                    <Friend
                        name={el.name}
                        avatar={el.avatar}
                        isOnline={el.isOnline}
                    />
                </li>
            ))}
        </ul>
    )
}