import React from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../../components/taskCard/TaskCard";

function Inprogress() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.inprogress;
  return (
    <div className="lg:w-full lg:h-auto flex flex-col items-center justify-center">
      <p className="lg:text-[30px] text-fuchsia-700">Your In progress Tasks</p>
      <div className="lg:w-300 lg:min-h-50 flex flex-col items-center justify-center lg:gap-5">
        {tasks.length === 0 ? (
          <p className="lg:h-100 lg:text-[20px] text-fuchsia-700 flex items-center justify-center">
            Your List Is Empty
          </p>
        ) : (
          tasks.map((T) => (
            <React.Fragment key={T.id}>
              <TaskCard task={T} />
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}

export default Inprogress;
