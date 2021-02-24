import PropTypes from "prop-types";
import React from "react";
import defaultImg from "./default-img.jpg";
import Friend from "./FriendItem";

const FriendList = ({ friends }) => (
  <section>
    <ul>
      {friends.map((item) => (
        <Friend {...item} key={item.id} />
      ))}
    </ul>
  </section>
);

Friend.defaultProps = {
  avatar: defaultImg,
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

export default FriendList;
