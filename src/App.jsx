import Layout from "./layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Done from "./pages/done/Done";
import Todos from "./pages/todos/Todos";
import Inprogress from "./pages/inProgress/Inprogress";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/done" element={<Done />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/inprogress" element={<Inprogress />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
