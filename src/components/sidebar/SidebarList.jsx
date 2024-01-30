import React from "react";
import { Link } from "react-router-dom";

const SidebarList = ({ image, name, link }) => {
  return (
    <div>
      <ul class="flex items-center px-4 py-2 bg-white hover:border-r-4 hover:border-yellow-700 text-gray-100 hover:opacity-70">
        <li className="flex items-center">
          <div className="bg-zinc-200 flex  justify-center items-center rounded-full w-14 h-14 p-1">
            <img src={image} class="h-12 w-12 object-contain" />
          </div>

          <h1 className=" text-zinc-700 text-sm tracking-tight font-bold ml-3">
            {name}
          </h1>
        </li>
      </ul>
    </div>
  );
};

export default SidebarList;
