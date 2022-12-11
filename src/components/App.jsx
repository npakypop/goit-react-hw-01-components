import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import Profile from './Profile/profile'
import Statistics from './Statistics/statistics'
import FriendList from './Friends/friendList'
import TransactionHistory from './TransactionHistory/transactionHistory'

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
      <div
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }} >
          <Statistics
            title="dratuti"
            stats={data} />
      </div>
      <div
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }} >
        <FriendList
          friends={friends}
        />
      </div>
      <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }} >
        <TransactionHistory
          transactions={transactions}
        />
      </div>
    </div>
  );
};
