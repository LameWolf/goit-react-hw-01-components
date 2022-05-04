import { Profile } from 'components/Profile';
import user from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import './App.css';
import { Statistics } from 'components/Statistics';

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
        <Statistics title="Upload stats" stats={data} />;
      </div>
    </div>
  );
};

export default App;
