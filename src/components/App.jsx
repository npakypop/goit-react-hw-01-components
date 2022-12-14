// import user from '../user.json'
import data from '../data.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
// import Profile from './Profile/profile.js'
import Statistics from './Statistics/statistics.js'
import FriendList from './Friends/friendList.js'
import TransactionHistory from './TransactionHistory/transactionHistory.js'

export const App = () => {
  return (
    <>
      {/* <>
        <Profile
          avatar={user.avatar}
          username={user.username}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </> */}
      <>
          <Statistics
            title="dratuti"
            stats={data} />
      </>
      <>
        <FriendList
          friends={friends}
        />
      </>
      <>
        <TransactionHistory
          transactions={transactions}
        />
      </>
    </>
  );
};
