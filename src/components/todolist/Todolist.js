import Todo from "../todo/Todo";
import "./todolist.css";
import { useSelector } from "react-redux";

function Todolist() {
  let todos = useSelector((state) => state.todos);

  //Khi không có todo
  const handleClickBell = (e) => {
    e.target.classList.add("ring");
    setTimeout(() => {
      e.target.classList.remove("ring");
    }, 800);
  };

  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <>
          {todos
            .slice(0)
            .reverse()
            .map((todo) => (
              <Todo key={todo.id} todo={todo} />
            ))}
        </>
      ) : (
        <div className="todo-list-empty-container">
          <h1 className="bell-icon" onClick={handleClickBell}>
            🛎️
          </h1>
          <h1>Todo list is empty</h1>
          <h2>Let's do something right now!!!</h2>
        </div>
      )}
    </div>
  );
}

export default Todolist;
