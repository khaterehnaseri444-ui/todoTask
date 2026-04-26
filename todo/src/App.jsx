import Layout from "./layout/Layout";
import { TodoProvider } from "./core/context/TodoContext";
import AddTask from "./components/addTask/AddTask";
import Todos from "./components/todos/Todos";
import Inprogress from "./components/inprogress/Inprogress";
import Done from "./components/done/Done";

function App() {
  return (
    <Layout>
      <TodoProvider>
        <AddTask />
        <div className="w-full h-auto bg-amber-400 flex items-center justify-center">
          <div className="w-300 h-auto flex items-center justify-between">
            <Todos />
            <Inprogress />
            <Done />
          </div>
        </div>
      </TodoProvider>
    </Layout>
  );
}
export default App;
