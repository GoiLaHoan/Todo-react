export const ADD_TODOS = "ADD_TODOS";
export const DELETE_TODOS = "DELETE_TODOS";
export const CHECK_TODOS = "CHECK_TODOS";
export const UPDATE_TODOS = "UPDATE_TODOS";

export const addTodo = (todo) => {
  return {
    type: ADD_TODOS,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODOS,
    payload: todoId,
  };
};

export const checkTodo = (todoId) => {
  return {
    type: CHECK_TODOS,
    payload: todoId,
  };
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODOS,
    payload: todo,
  };
};
