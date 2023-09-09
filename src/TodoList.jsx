import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {/*React short circuiting returns if true, will use as placeholder*/}
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
          // React requires a key to know which todo to change if a
          // change is requested, otherwise console errors appear.
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}
