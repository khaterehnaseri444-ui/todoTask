import React, { useState } from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../taskCard/TaskCard";

function Todos() {
  const [todoInput, setTodoInput] = useState("");
  const { filterByCondition, addTask } = useTodo();
  const addTaskHandler = (event) => {
    event.preventDefault();
    if (!todoInput.trim()) return;
    addTask("todo", todoInput);
    setTodoInput("");
  };
  const tasks = filterByCondition.todos;
  return (
    <div className="w-95 h-auto min-h-118 p-3 bg-fuchsia-100 flex flex-col items-center justify-center">
      <h1>Todos</h1>
      <form
        onSubmit={addTaskHandler}
        className="w-90 h-30 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder={`Write your task ...`}
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          className="w-70 h-12 rounded-3xl p-5 border border-fuchsia-400 outline-none rounded-r-none"
        />
        <button
          type="submit"
          className="w-15 h-12 bg-fuchsia-400 rounded-l-none rounded-3xl cursor-pointer"
        >
          Add
        </button>
      </form>
      {tasks.map((T) => (
        <React.Fragment key={T.id}>
            <TaskCard task={T}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Todos;
