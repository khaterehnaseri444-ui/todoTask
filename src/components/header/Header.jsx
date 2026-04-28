import React from "react";
import { Link } from "react-router-dom";

const navBar = [
  { id: 1, title: "All", path: "/" },
  { id: 2, title: "Done", path: "/done" },
  { id: 3, title: "In progress", path: "/inprogress" },
  { id: 4, title: "Todos", path: "/todos" },
];

function Header() {
  return (
    <div className="w-full lg:h-18 md:h-12 flex flex-col items-center justify-center">
      <h1 className="w-full bg-fuchsia-100 lg:text-[15px] lg:h-6 md:text-[25px] flex items-center justify-center font-extralight text-fuchsia-500">
        Your Todo List
      </h1>
      <div className="w-full h-13 flex items-center justify-center bg-fuchsia-400">
        <div className="lg:w-300 lg:h-12 md:hidden lg:flex items-center justify-start gap-16">
          {navBar.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={item.path}>
                <p className="text-white font-extralight cursor-pointer hover:text-fuchsia-700">
                  {item.title}
                </p>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
