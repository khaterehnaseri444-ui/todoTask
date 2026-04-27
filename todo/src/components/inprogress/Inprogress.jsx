import React from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../taskCard/TaskCard";
import AddTask from "../addTask/AddTask";

function Inprogress() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.inprogress;
  return (
    <div className="w-95 h-auto min-h-118 p-3 bg-fuchsia-100 flex flex-col items-center justify-center">
      <h1>In Progress</h1>
      <AddTask currentCondition={"inprogress"} />
      {tasks.map((T) => (
        <React.Fragment key={T.id}>
          <TaskCard task={T} />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Inprogress;
