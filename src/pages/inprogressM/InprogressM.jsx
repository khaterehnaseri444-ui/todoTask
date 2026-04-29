import React from "react";
import AddTask from "../../components/addTask/AddTask";
import TaskCard from "../../components/taskCard/TaskCard";
import { useTodo } from "../../core/context/TodoContext";

function InprogressM() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.done;
  return (
    <div className="w-full h-auto min-h-170 p-3 flex flex-col items-center justify-center relative">
      <div className="w-full h-40 flex items-center justify-center flex-col absolute top-2.5">
        <h1 className="text-[20px] font-extralight">In Progress Tasks</h1>
        <AddTask currentCondition={"done"} />
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

export default InprogressM;
