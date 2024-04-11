import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const {
    taskState: { tasks, isLoading, error },
    func: deleteFn,
  } = props;

  const tasksArray = tasks.map((task) => {
    const { id, todo, completed } = task;
    return <TodoItem key={id} taskId={id} text={todo} completed={completed} deleteFn={deleteFn} />;
  });

  return (
    <ul className="task-list">
      {isLoading && <h2>Tasks are loading...</h2>}
      {error && <h2>ERROR</h2>}
      {tasksArray}
    </ul>
  );
};

export default TodoList;
