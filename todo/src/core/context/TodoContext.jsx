import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);
  const [valueInput, setValueInput] = useState("");
  useEffect(() => {
    const getTodos = localStorage.getItem("task");
    if (getTodos) {
      try {
        setTodoList(JSON.parse(getTodos));
      } catch (error) {
        console.error("Error in localstorage");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
  }, [todoList]);
  const addTask = useCallback((condition, title) => {
    const newTask = {
      id: Date.now(),
      condition,
      title,
    };
    setTodoList((prevTodo) => [...prevTodo, newTask]);
  }, []);

  const removeTask = useCallback((id) => {
    setTodoList((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }, []);

  const editText = useCallback((id, newText) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, title: newText } : todo,
      ),
    );
  }, []);

  const changeCondition = useCallback((id, newCondition) => {
    setTodoList((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, condition: newCondition } : todo,
      ),
    );
  }, []);

  const filterByCondition = useMemo(() => {
    return {
      todos: todoList.filter((todo) => todo.condition === "todo"),
      inprogress: todoList.filter((todo) => todo.condition === "inprogress"),
      done: todoList.filter((todo) => todo.condition === "done"),
    };
  }, [todoList]);
  return (
    <TodoContext.Provider
      value={{
        todoList,
        addTask,
        removeTask,
        editText,
        changeCondition,
        valueInput,
        setValueInput,
        filterByCondition
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
