import React from "react";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  const {
    user: {
      name: { first, last },
      email,
      picture: { large },
    },
  } = props;
  return (
    <article className={styles.wrapper}>
      <img src={large} alt={first} />
      <p>
        {first} {last}
      </p>
      <p>{email}</p>
    </article>
  );
};

export default UserCard;
