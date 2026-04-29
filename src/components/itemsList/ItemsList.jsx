import React from "react";
import { Link } from "react-router-dom";
const itemsList = [
  { id: 1, title: "Todos", path: "/todosM" },
  { id: 2, title: "In Progress", path: "/inprogressM" },
  { id: 3, title: "Done", path: "/doneM" },
];
function ItemsList() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center gap-8 mt-3 p-3 mb-10">
      <p>Add Your Tasks</p>
      {itemsList.map((item) => (
        <React.Fragment key={item.id}>
          <Link to={item.path}>
            <div className="w-80 h-8 p-3 flex items-center justify-start bg-fuchsia-100">
              <p className="text-fuchsia-700">{item.title}</p>
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}

export default ItemsList;
