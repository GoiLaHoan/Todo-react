import React, { useState, useEffect, useRef } from "react";
import "./todo.css";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";

export default function Todo(props) {
  const [value, setValue] = useState(props.todo.title);
  const todoEl = useRef(null);
  const todoInputEl = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(props.todo.title);
  }, [props.todo.title]);

  const handleDeleteTodo = () => {
    todoEl.current.classList.add("remove");
    setTimeout(() => {
      dispatch(actions.deleteTodo(props.todo.id));
    }, 400);
  };

  const handleCheckTodo = () => {
    dispatch(actions.checkTodo(props.todo.id));
  };
  const handleEditTodo = (e) => {
    if (props.todo.isDone) {
      e.target.blur();
      // console.log("Khong");
    } else {
      e.preventDefault();
      setValue(e.target.value);
    }
  };

  const handleUpdateTodo = () => {
    if (value !== props.todo.title) {
      dispatch(
        actions.updateTodo({
          ...props.todo,
          title: value,
        })
      );
    }
  };
  return (
    <div className="todo-container" ref={todoEl}>
      <input
        type="checkbox"
        checked={props.todo.isDone}
        onClick={handleCheckTodo}
        className="checkbox"
      />
      <input
        // className={`text ${props.todo.isDone && "done"}`}
        className={props.todo.isDone ? `text done` : `text ${props.todo.isDone}`}
        type="text"
        value={value}
        onChange={handleEditTodo}
        onBlur={handleUpdateTodo}
        ref={todoInputEl}
      />
      <button onClick={handleDeleteTodo}>🗑️</button>
    </div>
  );
}
