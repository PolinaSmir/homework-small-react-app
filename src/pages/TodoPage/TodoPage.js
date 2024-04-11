import React, { useEffect, useReducer, useState } from "react";
import { getTodo } from "../../api/todosApi/getTodo";
import { todoReducer } from "../../reducers/todoReducer";
import TodoList from "../../components/TodoItem/TodoList";
import TodoContext from "../../contexts/TodoContext";
import styles from "./TodoPage.module.css";
import CONSTANTS from "../../constants";
const { ACTIONS } = CONSTANTS;

const initialState = {
  tasks: [],
  isLoading: true,
  error: null,
};

const TodoPage = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  useEffect(() => {
    getTodo()
      .then((todos) => {
        dispatch({
          type: ACTIONS.LOAD_TASKS,
          payload: todos,
        });
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.ERROR_LOADING_TASKS,
          payload: error,
        });
      });
  }, []);

  const createTask = () => {
    const newTask = {
      id: state.tasks.length + 1,
      todo: text,
      completed: false,
    };

    dispatch({
      type: ACTIONS.ADD_NEW_TASK,
      payload: newTask,
    });
  };

  const changeHandler = ({ target: { value } }) => {
    setText(value);
  };

  const deleteTask = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TASK,
      payload: id,
    });
  };

  return (
    <TodoContext.Provider value={deleteTask}>
      <h1 className={styles.header}>Todo</h1>
      <section className={styles.wrapper}>
        <input onChange={changeHandler} type="text" placeholder="Type your task" className="input-task" />
        <button onClick={createTask} className="task-button">
          Add new task
        </button>
        <TodoList taskState={state} func={deleteTask} />
      </section>
    </TodoContext.Provider>
  );
};

export default TodoPage;
