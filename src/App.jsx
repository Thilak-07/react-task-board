import { useEffect, useState } from "react";
import "./styles.css";
import InputForm from "./components/InputForm";
import ListSection from "./components/ListSection";

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null) return []
    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

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
      <InputForm addTodo={addTodo} />
      <h1 className="Header">Todo List</h1>
      <ListSection
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App;
