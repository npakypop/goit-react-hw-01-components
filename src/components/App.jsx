import user from '../user.json'
import data from '../data.json'
import Profile from './Profile/profile'
import Statistics from './Statistics/statistics'
export const App = () => {
  return (
    <div>
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
          avatar={user.avatar}
          name={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
        <section class="statistics">
          <h2 class="title">{ title && "Upload stats"}</h2>

          <ul class="stat-list">
            {data.map(el =>  
              <Statistics
                key={data.id}
                title={data.avatar}
                label={data.lable}
                stats={data.persantage}
              />
            )}
          </ul>
        </section>
    </div>
  );
};
