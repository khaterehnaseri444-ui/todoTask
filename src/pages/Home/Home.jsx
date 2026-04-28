import Done from "../../components/done/Done";
import Inprogress from "../../components/inprogress/Inprogress";
import Todos from "../../components/todos/Todos";

function Home() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className="lg:w-300 md:w-full h-auto flex items-center justify-between">
        <Todos />
        <Inprogress />
        <Done />
      </div>
    </div>
  );
}

export default Home;
