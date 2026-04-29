import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Done from "./pages/done/Done";
import Todos from "./pages/todos/Todos";
import Inprogress from "./pages/inProgress/Inprogress";
import DoneM from "./pages/doneM/DoneM";
import TodosM from "./pages/todosM/TodosM";
import InprogressM from "./pages/inprogressM/InprogressM";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/done" element={<Done />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/inprogress" element={<Inprogress />} />
          <Route path="/doneM" element={<DoneM />} />
          <Route path="/todosM" element={<TodosM />} />
          <Route path="/inprogressM" element={<InprogressM />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
