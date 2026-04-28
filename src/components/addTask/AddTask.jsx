import { useState } from "react";
import { useTodo } from "../../core/context/TodoContext";

function AddTask({ currentCondition }) {
  const [valueInput, setValueInput] = useState("");
  const { addTask } = useTodo();
  const addTaskHandler = (event) => {
    event.preventDefault();
    if (!valueInput.trim()) return;
    addTask(currentCondition, valueInput);
    setValueInput("");
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <form
        onSubmit={addTaskHandler}
        className="w-90 h-30 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder={`Write your ${currentCondition} task ...`}
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          className="w-70 h-12 rounded-3xl p-5 border border-fuchsia-400 outline-none rounded-r-none"
        />
        <button
          type="submit"
          className="w-15 h-12 bg-fuchsia-400 rounded-l-none rounded-3xl cursor-pointer"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
