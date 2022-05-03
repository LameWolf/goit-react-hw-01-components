import { Profile } from 'components/Profile';
import user from './components/Profile/user.json';
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
      </div>
    </div>
  );
};

export default App;
