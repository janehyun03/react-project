import { useState } from "react";
import AddTodo from "./component/AddTodo.jsx";
import TaskList from "./component/TaskList.jsx";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    //add (map기능을 쓰려면 []로 만들어야 함)
    setTodos([...todos, { id: nextId++, title: title, done: false }]);
  }

  function handleChangeTodo(nextTodo) {
    // Updating objects inside arrays
    setTodos(
      todos.map((todo) => {
        console.log("todos", todos);
        console.log("initialTodos", initialTodos);
        if (todo.id == nextTodo.id) {
          return {
            ...todo,
            title: nextTodo.title,
          };
        }
        return { ...todo };
      })
    );
    // const todo = todos.find((t) => t.id === nextTodo.id);
    // todo.title = nextTodo.title;
    // todo.done = nextTodo.done;
  }

  function handleDeleteTodo(todoId) {
    //delete
    setTodos(todos.filter((a) => a.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
