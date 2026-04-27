import React from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../taskCard/TaskCard";
import AddTask from "../addTask/AddTask";

function Done() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.done;
  return (
    <div className="w-95 h-auto min-h-118 bg-fuchsia-100 p-3 flex flex-col items-center justify-center">
      <h1>Done Tasks</h1>
      <AddTask currentCondition={"done"} />
      {tasks.map((T) => (
        <React.Fragment key={T.id}>
          <TaskCard task={T} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Done;
