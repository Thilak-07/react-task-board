import { useState } from "react";
import "./styles.css";
import InputForm from "./InputForm";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function handleDelete(id) {
    setTodos((currTodos) => {
      return currTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <InputForm addTodo={addTodo}/>

      <h1 className="Header">Todo List</h1>

      <ul className="list">
        {todos.length === 0 && "List is Empty"}
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                onClick={() => handleDelete(todo.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
