import PropTypes from "prop-types";
import React from "react";
import defaultImg from "./default-img.jpg";
import styles from "./Profile.module.css";
import { Title, List } from "./ProfileStyled";
import StatsList from "./statsList";

const Profile = ({ name, tag, location, avatar, stats }) => {
  const getNewData = (data) => {
    const newData = Object.keys(data).map((key) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: data[key],
    }));
    return newData;
  };

  return (
    <div className={styles.profile}>
      <Title> Hello! I am a title styled with styled.components </Title>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={` avatar ${styles.avatar}`}
        />
        <p className="name">{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <List>
        {getNewData(stats).map((item, index) => (
          <StatsList newData={index} item={item} />
        ))}
      </List>
    </div>
  );
};

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
