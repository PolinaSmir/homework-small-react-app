import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/usersApi/getUsers";
import UserCard from "../../components/UserCard/UserCard";
import styles from "../../components/UserCard/UserCard.module.css";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [userCount, setUserCount] = useState(5);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers(userCount)
      .then((user) => {
        const { results } = user;
        setUsers(results);
      })
      .catch((error) => {
        setIsError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const changeHandler = ({ target: { value } }) => {
    setUserCount(value);
  };

  const renderUsers = () => {
    return users.map((user) => <UserCard key={user.login.uuid} user={user} />);
  };

  return (
    <>
      <section className={styles.header}>
        <h1>Users List</h1>
        <div className={styles.inputButtonWrapper}>
          <input type="number" min={1} max={1000} placeholder="Type amount of users" onChange={changeHandler} />
          <button onClick={() => loadUsers()}>Load users</button>
        </div>
      </section>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{isError.message}</h2>}
      <section className={styles.container}>{renderUsers()}</section>
    </>
  );
};

export default UserListPage;
