import React, { useState } from "react";
import { Link } from "react-router-dom";
import HambergerMenu from "../hambergerMenu/HambergerMenu";

const navBar = [
  { id: 1, title: "All", path: "/" },
  { id: 2, title: "Todos", path: "/todos" },
  { id: 3, title: "In progress", path: "/inprogress" },
  { id: 4, title: "Done", path: "/done" },
];

function Header() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="w-full lg:h-18 md:h-12 h-16 flex flex-col items-center justify-center">
      <div className="w-full bg-fuchsia-100 h-16 lg:text-[15px] md:text-[10px] lg:h-6 flex items-center justify-center font-extralight text-fuchsia-500 gap-4 mb-2 md:mb-0 lg:mb-0">
        <button
          onClick={() => setOpenNav(!openNav)}
          className="md:hidden lg:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300`}
            ></span>
          </div>
        </button>
        <Link to={"/"}>Your Todo List</Link>
      </div>
      <div className="w-full lg:h-13 md:h-9 flex items-center justify-center bg-fuchsia-400">
        <div className="lg:w-300 lg:h-12 md:h-6 md:flex lg:flex hidden items-center justify-start gap-16">
          {navBar.map((item) => (
            <React.Fragment key={item.id}>
              <Link to={item.path}>
                <p className="text-white md:text-[14px] font-extralight cursor-pointer hover:text-fuchsia-700">
                  {item.title}
                </p>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
      {openNav && <HambergerMenu setOpenNav={setOpenNav} navBar={navBar} />}
    </div>
  );
}

export default Header;
