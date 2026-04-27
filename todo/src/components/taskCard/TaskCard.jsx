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
    <div className="w-80 h-10 bg-lime-200">
      {edit ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <p>{task.title}</p>
      )}
      <button onClick={editHandler}>{edit ? "save" : "✏️"}</button>
      <button onClick={removeHandler}>🗑️</button>
      {task.condition !== "done" && (
        <button onClick={changeConditionHandler}>n</button>
      )}
    </div>
  );
}

export default TaskCard;
