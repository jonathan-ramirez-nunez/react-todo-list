import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    // use a function like this to get the most recent value of todos.
    // if you just use "todos", it will get the original immutable "todos"
    // value, which in this case is []
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // returns new todo object, used when onClick event occurs on checkbox
  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // The state is immutable so you can't do:
          // todo.completed = completed
          // So we have to create a new todo object with 'completed' changed
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      {/* passing addTodo function to addTodo prop */}
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
