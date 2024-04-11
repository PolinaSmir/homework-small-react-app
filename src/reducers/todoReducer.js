import CONSTANTS from "../constants";
const { ACTIONS } = CONSTANTS;

export function todoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOAD_TASKS: {
      const {
        payload: { todos },
      } = action;
      return {
        ...state,
        tasks: todos,
        isLoading: false,
        error: null,
      };
    }
    case ACTIONS.ERROR_LOADING_TASKS: {
      const {
        payload: { error },
      } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case ACTIONS.ADD_NEW_TASK: {
      const { payload: newTask } = action;
      const newTaskArr = [...state.tasks, newTask];
      return {
        ...state,
        tasks: newTaskArr,
      };
    }
    case ACTIONS.DELETE_TASK: {
      const { payload: id } = action;

      const filteredTasks = state.tasks.filter((task) => task.id !== id);
      return {
        ...state,
        tasks: filteredTasks,
      };
    }
    default:
      return state;
  }
}
