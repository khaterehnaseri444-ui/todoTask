import { useEffect, useRef, useState } from "react";
import { useTodo } from "../../core/context/TodoContext";

function TaskCard({ task }) {
  const { removeTask, editText, changeCondition } = useTodo();
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(task.title);
  const focusRef = useRef(null);
  useEffect(() => {
    if (edit && focusRef.current) {
      focusRef.current.focus();
    }
  }, [edit]);
  const editHandler = () => {
    if (!edit) {
      setEdit(true);
    } else {
      editText(task.id, newText);
      setEdit(false);
    }
  };

  const removeHandler = () => {
    removeTask(task.id);
  };

  const changeConditionHandler = () => {
    if (task.condition === "todo") changeCondition(task.id, "inprogress");
    else if (task.condition === "inprogress") changeCondition(task.id, "done");
  };
  return (
    <div className="lg:w-90 md:w-55 lg:min-h-15 md:h-8 bg-fuchsia-400 flex items-center justify-between p-2 gap-2">
      {edit ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="lg:w-70 md:w-38 md:h-6 lg:h-10 bg-fuchsia-400 p-2"
          ref={focusRef}
        />
      ) : (
        <p className="lg:w-70 md:w-50 text-white lg:text-[18px] md:text-[15px] overflow-hidden">{task.title}</p>
      )}
      <button
        className="lg:w-10 lg:h-5 md:w-5 md:h-3 cursor-pointer flex items-center justify-center"
        onClick={editHandler}
      >
        <p className="lg:hidden text-[13px]">{edit?'S':'E'}</p>
        <p className="md:hidden"> {edit ? "Save" : "Edit"}</p>
      </button>
      <button
        className="lg:w-5 lg:h-5 md:text-[15px] lg:bg-red-600 lg:text-white md:text-red-600 font-bold flex items-center justify-center cursor-pointer"
        onClick={removeHandler}
      >
        X
      </button>
      {task.condition !== "done" && (
        <button
          className="lg:w-6 lg:h-5 md:w-4 md:h-4 bg-fuchsia-100 flex items-center justify-center cursor-pointer"
          onClick={changeConditionHandler}
        >
          {">"}
        </button>
      )}
    </div>
  );
}

export default TaskCard;
