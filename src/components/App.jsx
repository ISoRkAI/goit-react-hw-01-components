import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './Friend/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';
import profiles from '../collectionData/user.json';
import data from '../collectionData/data.json';
import friends from '../collectionData/friends.json';
import transactions from '../collectionData/transactions.json';
export const App = () => {
  const { username, tag, location, avatar, stats } = profiles;
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
// export const Statistic = () => {
//   return
// };
// export const Friend = () => {};
// export const Transaction = () => {};
