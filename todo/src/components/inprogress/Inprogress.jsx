import React, { useState } from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../taskCard/TaskCard";

function Inprogress() {
  const [inprogressInput, setInprogressInput] = useState("");
  const { addTask, filterByCondition } = useTodo();
  const addTaskHandler = (event) => {
    if (!inprogressInput.trim()) return;
    event.preventDefault();
    addTask("inprogress", inprogressInput);
    setInprogressInput("");
  };
  const tasks = filterByCondition.inprogress;
  return (
    <div className="w-95 h-auto min-h-118 p-3 bg-fuchsia-100 flex flex-col items-center justify-center">
      <h1>In Progress</h1>
      <form
        onSubmit={addTaskHandler}
        className="w-90 h-30 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder={`Write your inprogress task ...`}
          onChange={(e) => setInprogressInput(e.target.value)}
          value={inprogressInput}
          className="w-70 h-12 rounded-3xl p-5 border border-fuchsia-400 outline-none rounded-r-none"
        />
        <button
          type="submit"
          className="w-15 h-12 bg-fuchsia-400 rounded-l-none rounded-3xl"
        >
          Add
        </button>
      </form>
      {tasks.map((T) => (
        <React.Fragment key={T.id}>
          <TaskCard task={T} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Inprogress;
