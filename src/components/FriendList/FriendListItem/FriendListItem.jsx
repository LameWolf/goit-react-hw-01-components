import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';
import defaultAvatar from './defaultAvatar.png';

export const FriendListItem = ({ src, name, isOnline }) => {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}></span>
      <img
        className={s.avatar}
        src={src || defaultAvatar}
        alt="User avatar"
        width="48"
      />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
