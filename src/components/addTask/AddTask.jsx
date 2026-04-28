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
        className="lg:w-90 md:w-55 lg:h-30 md:h-25 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder={`Write your ${currentCondition} task ...`}
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          className="lg:w-70 md:w-43 lg:h-12 md:h-8 rounded-3xl lg:p-5 md:p-2 border border-fuchsia-400 outline-none rounded-r-none md:text-[12px]"
        />
        <button
          type="submit"
          className="w-15 md:hidden h-12 bg-fuchsia-400 rounded-l-none rounded-3xl cursor-pointer"
        >
          Add
        </button>
        <button
          type="submit"
          className="w-7 lg:hidden h-8 bg-fuchsia-400 rounded-l-none rounded-3xl cursor-pointer flex items-center justify-center text-white font-black"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddTask;
