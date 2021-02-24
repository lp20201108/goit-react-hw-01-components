import styles from "./FriendList.module.css";

const Friend = ({ avatar, name, isOnline }) => (
  <li className={styles.list__item}>
    <span className={isOnline ? styles.status : styles.status__offline}></span>

    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={isOnline ? styles.online : styles.name}>{name}</p>
  </li>
);

export default Friend;
