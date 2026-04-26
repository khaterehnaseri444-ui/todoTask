import { useTodo } from "../../core/context/TodoContext";

function AddTask() {
  const { valueInput, setValueInput } = useTodo();
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <form
        onSubmit={AddTask}
        className="w-300 h-30 flex items-center justify-center gap-3"
      >
        <input
          type="text"
          placeholder="Write your task ..."
          onChange={(e) => setValueInput(e.target.value)}
          value={valueInput}
          className="w-270 h-12 rounded-3xl p-5 border border-fuchsia-400 outline-none rounded-r-none"
        />
        <button
          type="submit"
          className="w-20 h-12 bg-fuchsia-400 rounded-l-none rounded-3xl"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
