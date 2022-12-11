import Friend from './friend'

export default function FriendList({friends}) { 
    return (
        <ul>
            {friends.map(el => (
                <li key={el.id}>
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