import Layout from "./layout/Layout";
import { TodoProvider } from "./core/context/TodoContext";
import AddTask from "./components/addTask/AddTask";

function App() {
  return (
    <Layout>
      <TodoProvider>
        <AddTask />
      </TodoProvider>
    </Layout>
  );
}
export default App;
