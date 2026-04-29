import React from "react";
import { Link } from "react-router-dom";

function HambergerMenu({ setOpenNav, navBar }) {
  return (
    <div className="md:hidden lg:hidden fixed inset-0 z-50 flex justify-start">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpenNav(false)}
      />
      <div className="relative w-64 h-150 bg-white shadow-xl flex flex-col p-8 gap-8">
        {navBar.map((item) => (
          <React.Fragment key={item.id}>
            <Link to={item.path} onClick={() => setOpenNav(false)}>
              <p className="text-fuchsia-700 text-[20px]">{item.title}</p>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HambergerMenu;
