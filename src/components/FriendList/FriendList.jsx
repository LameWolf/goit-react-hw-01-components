import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import { FriendListItem } from './FriendListItem/FriendListItem';
import style from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <ul className={style.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            src={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </Container>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
