import { useState } from "react";
import { useTodo } from "../../core/context/TodoContext";

function TaskCard({ task }) {
  const { removeTask, editText, changeCondition } = useTodo();
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(task.title);
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
    <div className="w-90 min-h-15 bg-fuchsia-400 flex items-center justify-between p-2 gap-2">
      {edit ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="w-70 h-10 bg-fuchsia-400 p-2"
        />
      ) : (
        <p className="w-70 text-white text-[18px]">{task.title}</p>
      )}
      <button
        className="w-10 h-5 cursor-pointer flex items-center justify-center"
        onClick={editHandler}
      >
        {edit ? "Save" : "Edit"}
      </button>
      <button
        className="w-5 h-5 bg-red-600 text-white font-bold flex items-center justify-center cursor-pointer"
        onClick={removeHandler}
      >
        X
      </button>
      {task.condition !== "done" && (
        <button
          className="w-6 h-5 bg-fuchsia-100 flex items-center justify-center cursor-pointer"
          onClick={changeConditionHandler}
        >
          {"->"}
        </button>
      )}
    </div>
  );
}

export default TaskCard;
