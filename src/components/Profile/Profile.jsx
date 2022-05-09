import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import style from './Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt="User avatar" className={style.avatar} />
          <p className={style.username}>{username}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{followers}</span>
          </li>
          <li>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{views}</span>
          </li>
          <li>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
