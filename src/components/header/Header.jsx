const navBar = [
  { id: 1, title: "All" },
  { id: 2, title: "Done" },
  { id: 3, title: "In progress" },
  { id: 4, title: "Todos" },
];

function Header() {
  return (
    <div className="w-full lg:h-18 md:h-12 bg-fuchsia-400 flex flex-col items-center justify-center">
      <h1 className="lg:text-[15px] lg:h-6 md:text-[25px] flex items-center justify-center font-extralight text-white">
        Your Todo List
      </h1>
      <div className="lg:w-full lg:h-13 bg-lime-300"></div>
    </div>
  );
}

export default Header;
