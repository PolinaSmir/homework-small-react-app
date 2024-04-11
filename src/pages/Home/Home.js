import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1 className={styles.header}>Home</h1>
      <section className={styles.wrapper}>
        <p>Это главная страница приложения.</p>
        <p>
          Ви можете сверху нажав на кнопку "Users" перейти на страницу с юзерами. На странице юзеров у вас есть возможность задать кол-во юзеров,
          которое вы хотите посмотреть.
        </p>
        <p>Нажав сверху на "Todo" вы перейдёте на страницу со списком задач. Там вы можете удалять и добавлять свои задачи.</p>
      </section>
    </>
  );
};

export default Home;
