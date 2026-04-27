import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const TodoActions = {
  AddTask: "AddTask",
  RemoveTask: "RemoveTask",
  EditText: "EditTExt",
  ChangeCondition: "ChangeCondition",
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.AddTask:
      return [...state, action.payload];
    case TodoActions.RemoveTask:
      return state.filter((todo) => todo.id !== action.payload);
    case TodoActions.EditText:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.newText }
          : todo,
      );
    case TodoActions.ChangeCondition:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, condition: action.payload.newCondition }
          : todo,
      );
    default:
      return state;
  }
};

const TodoContext = createContext();
const getTodoItems = () => {
  const getTodos = localStorage.getItem("task");
  if (getTodos) {
    try {
      return JSON.parse(getTodos);
    } catch {
      console.error("Localstorage Error");
      return [];
    }
  }
  return [];
};
export const TodoProvider = ({ children }) => {
  const [todoList, dispatch] = useReducer(todoReducer, [], getTodoItems);
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
  }, [todoList]);

  const addTask = (condition, title) => {
    dispatch({
      type: TodoActions.AddTask,
      payload: { id: Date.now(), condition, title },
    });
  };

  const removeTask = (id) => {
    dispatch({ type: TodoActions.RemoveTask, payload: id });
  };

  const editText = (id, newText) => {
    dispatch({ type: TodoActions.EditText, payload: { id, newText } });
  };

  const changeCondition = (id, newCondition) => {
    dispatch({
      type: TodoActions.ChangeCondition,
      payload: { id, newCondition },
    });
  };

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
        filterByCondition,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
