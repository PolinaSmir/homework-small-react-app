import React from "react";

const TodoItem = (props) => {
  const { taskId, text, deleteFn, completed } = props;

  // const completedTask = (event) => {
  //   const {
  //     target: { checked },
  //   } = event;
  //   console.dir(checked);
  //   console.log(completed);
  // };

  return (
    <li className="task-item">
      {text}
      {/* <input type="checkbox" onChange={completedTask} checked={completed} /> */}
      <button onClick={() => deleteFn(taskId)} className="delete-button">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
