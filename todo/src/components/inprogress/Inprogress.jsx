import React from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../taskCard/TaskCard";
import AddTask from "../addTask/AddTask";

function Inprogress() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.inprogress;
  return (
    <div className="w-95 h-auto min-h-118 p-3 bg-fuchsia-100 flex flex-col items-center justify-center relative">
      <div className="w-full h-40 flex items-center justify-center flex-col absolute top-2.5">
        <h1 className="text-[20px] font-extralight">In Progress</h1>
        <AddTask currentCondition={"inprogress"} />
      </div>
      {tasks.length === 0 ? (
        <p>No Data</p>
      ) : (
        tasks.map((T) => (
          <React.Fragment key={T.id}>
            <TaskCard task={T} />
          </React.Fragment>
        ))
      )}
    </div>
  );
}

export default Inprogress;
