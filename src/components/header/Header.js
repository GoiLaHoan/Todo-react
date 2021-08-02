import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

import "./header.css";

export default function Header() {
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState("");

  const handleOnChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim()) {
      dispatch(
        actions.addTodo({
          id: Date.now(),
          title: todo.trim(),
          isDone: false,
        })
      );
      setTodo("");
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 800);
    }
  };

  const handleOnChangeEnter =(e) => {
    if (e.key === "Enter") {
      if (todo.trim()) {
        dispatch(
          actions.addTodo({
            id: Date.now(),
            title: todo.trim(),
            isDone: false,
          })
        );
        setTodo("");
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 800);
      }
    }

  }

  const dispatch = useDispatch();

  return (
    <div className="header-container">
      <h1>Todos</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={handleOnChange}
          onKeyUp={handleOnChangeEnter}
          value={todo}
          placeholder="What do you wanna do ? my friend 🚀"
        />
        {error ? (
          <button className="error-button">⚠️</button>
        ) : (
          <button onClick={handleAddTodo} className="add-button">
            ➕
          </button>
        )}
      </div>
    </div>
  );
}
