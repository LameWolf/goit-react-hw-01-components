import { Profile } from 'components/Profile';
import { Statistics } from 'components/Statistics';
import { FriendList } from 'components/FriendList';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="content">
        <Profile
          key={user.tag}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
      </div>
    </div>
  );
};

export default App;
