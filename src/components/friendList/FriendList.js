import React from "react";
import PropTypes from 'prop-types';

import FriendsListItem from "./FriendListItem";
import styles from './FriendList.module.css';

const FriendsList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendsListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
      />
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
  ),
};

export default FriendsList;
