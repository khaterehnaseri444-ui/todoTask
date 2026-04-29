import React from "react";
import { useTodo } from "../../core/context/TodoContext";
import TaskCard from "../../components/taskCard/TaskCard";

function Inprogress() {
  const { filterByCondition } = useTodo();
  const tasks = filterByCondition.inprogress;
  return (
    <div className="w-full h-auto min-h-170 lg:min-h-100 md:min-h-90 flex flex-col items-center justify-center">
      <p className="lg:text-[30px] md:text-[20px] text-fuchsia-700 md:mt-2 mb-5 lg:mb-5 md:mb-0">
        Your In Progress Tasks
      </p>
      <div className="lg:w-300 md:w-180 lg:min-h-50 md:min-h-30 flex flex-col items-center justify-center lg:gap-5">
        {tasks.length === 0 ? (
          <p className="lg:h-100 md:h-50 md:text-[16px] text-[14px] lg:text-[20px] text-fuchsia-700 flex items-center justify-center">
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
