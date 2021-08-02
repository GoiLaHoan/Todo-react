import { init } from "./states";
import * as actions from "./actions";
import storage from "../storage/storage";

export const reducer = (state = init, action) => {
  let newState = [];
  switch (action.type) {
    case actions.ADD_TODOS: {
      console.log(action.payload);
      newState = {
        ...state,
        todos: [...state.todos],
      };
      newState.todos.push(action.payload);
      
      storage.set(newState.todos);
      return newState;
    }

    case actions.DELETE_TODOS: {
      console.log(action.payload);
      newState = { ...state, todos: [...state.todos] };
      newState.todos = newState.todos.filter(
        (todo) => todo.id !== action.payload
        
      );

      storage.set(newState.todos);
      return newState;
    }

    case actions.CHECK_TODOS: {
      newState = { ...state, todos: [...state.todos] };
      console.log(action.payload);

      newState.todos.map((todo) => {
        todo.id === action.payload && (todo.isDone = !todo.isDone);
      });
      storage.set(newState.todos);
      return newState;
    }
    case actions.UPDATE_TODOS: {
      let result = -1;
      newState = { ...state, todos: [...state.todos] };
      newState.todos.map((todo, index) => {
        todo.id === action.payload.id && (result = index);
        
      });
      newState.todos[result] = action.payload;
      storage.set(newState.todos);
      return newState;
    }
    default:
      return state;
  }
};
