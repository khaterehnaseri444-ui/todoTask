import React, { useState } from 'react';

function TodoForm() {
  const [valueInput, setValueInput] = useState("");
    return (
           <div className="w-full h-auto flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Write your task ..."
        onChange={(e) => setValueInput(e.target.value)}
        className="w-300 h-12 rounded-3xl p-5 border border-fuchsia-400 outline-none"
      />
    </div>
    );
}

export default TodoForm;