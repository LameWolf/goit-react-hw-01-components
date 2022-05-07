import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';
import defaultAvatar from './defaultAvatar.png';

export const FriendListItem = ({ src, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span
        className={style.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img
        className={style.avatar}
        src={src || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
