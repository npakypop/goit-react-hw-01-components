import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/statistics'
import FriendList from './Friends/friendList'
import TransactionHistory from './TransactionHistory/transactionHistory'

export const App = () => {
  return (
    <>
      <>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </>
      <div>
          <Statistics
            title="dratuti"
            stats={data} />
      </div>
      <div>
        <FriendList
          friends={friends}
        />
      </div>
      <div>
        <TransactionHistory
          transactions={transactions}
        />
      </div>
    </>
  );
};
