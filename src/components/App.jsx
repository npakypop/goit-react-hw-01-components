import user from '../user.json'
import Profile from './Profile/Profile'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }} 
    >
      <Profile
        src={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.likes}
      />
    </div>
  );
};
