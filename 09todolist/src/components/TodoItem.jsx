import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { deleteTodo } = useTodo()

  // const editTodo = () => {
  //   updateTodo(todo.id, { ...todo, todo: todoMsg })
  //   setIsTodoEditable(false)
  // }
  // const toggleCompleted = () => {
  //   //console.log(todo.id);
  //   toggleComplete(todo.id)
  // }

  return (
    <div

    >
      <input
        type="checkbox"
      />
      <input
        type="text"
        value={"todoMsg"}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      {/* Edit, Save Button */}
      {/* <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button> */}
      {/* Delete Todo Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;