import { useState } from "react";
import Layout from "./layout/Layout";
import TodoForm from "./components/todoForm/TodoForm";

function App() {
  return (
    <Layout>
      <TodoForm />
    </Layout>
  );
}
export default App;
