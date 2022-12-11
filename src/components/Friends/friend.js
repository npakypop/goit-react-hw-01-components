export default function Friend({ avatar, name, isOnline}) { 
    return (
        <div>
            <span className="status">{ isOnline ? "is Online" : "ïs Offline"}</span>
            <img className="avatar" src={ avatar } alt={ name } width="48" />
            <p className="name">{ name }</p>
        </div>
    )
}