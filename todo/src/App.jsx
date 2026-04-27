import Layout from "./layout/Layout";
import Todos from "./components/todos/Todos";
import Inprogress from "./components/inprogress/Inprogress";
import Done from "./components/done/Done";

function App() {
  return (
      <Layout>
        <div className="w-full h-auto flex items-center justify-center">
          <div className="w-300 h-auto flex items-center justify-between">
            <Todos />
            <Inprogress />
            <Done />
          </div>
        </div>
      </Layout>
  );
}
export default App;
