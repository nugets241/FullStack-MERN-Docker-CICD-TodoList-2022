import React from "react";

const ToDoListItem = ({ todo, toggleTodo, deleteTodo }) => {

  const text = todo.done? <strike>{todo.name}</strike>: todo.name;

  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  function handleDelete() {
    deleteTodo(todo.id)
  }

  return (
    <>
      <div data-testid={`todo-${todo.id}`} className="todo">

        <label className="text">
          <input type="checkbox" className="icons" checked={todo.done} onChange={handleTodoClick} />
          {text}
        </label>

        <div className="icons">
          <i class="fa fa-trash" onClick={handleDelete} aria-hidden="true"></i>
        </div>

      </div>
    </>
  )
};
export default ToDoListItem;
