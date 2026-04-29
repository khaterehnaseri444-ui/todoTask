import Done from "../../components/done/Done";
import Inprogress from "../../components/inprogress/Inprogress";
import ItemsList from "../../components/itemsList/ItemsList";
import Todos from "../../components/todos/Todos";

function Home() {
  return (
    <>
      <div className="w-full h-auto md:flex lg:flex items-center justify-center hidden">
        <div className="lg:w-300 md:w-full h-auto flex items-center justify-between">
          <Todos />
          <Inprogress />
          <Done />
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <ItemsList />
      </div>
    </>
  );
}

export default Home;
