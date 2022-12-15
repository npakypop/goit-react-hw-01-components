import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics.js'
import FriendList from './FriendList/FriendList.js'
import TransactionHistory from './TransactionHistory/TransactionHistory.js'

export const App = () => {
  return (
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
      <Statistics
        title="dratuti"
        stats={data} />   
      <FriendList
        friends={friends}
      /> 
      <TransactionHistory
        transactions={transactions}
      />
    </>
  );
};
