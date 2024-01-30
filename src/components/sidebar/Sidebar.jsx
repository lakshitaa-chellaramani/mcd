import React from "react";
import { SidebarListData } from "./SidebarListData";
import SidebarList from "./SidebarList";
import Cards from "../cards/Cards";
import CardGenerator from "../cards/CardGenerator";
const Sidebar = () => {
  return (
    <div>
      <div class="flex h-screen bg-[#fbf7f1]">
        <div class="hidden md:flex flex-col w-64 bg-zinc-800">
          <div class="flex items-center border-r border-zinc-200  justify-center h-16 bg-[#fbf7f1]">
            <span class="text-zinc-700 font-bold uppercase">Meal Log</span>
          </div>
          <div class="flex flex-col flex-1 scrollbar-hide overflow-y-auto">
            <nav class="flex-1  px-2 py-4 bg-white">
              {SidebarListData.map((data, indexes) => (
                <SidebarList key={indexes} {...data} />
              ))}
            </nav>
          </div>
        </div>

        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="flex items-center justify-between h-16 bg-[#fbf7f1] border-b border-gray-200">
            <div class="flex items-center px-4">
              <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <input
                class="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div class="flex items-center pr-4">
              <button class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-4">
            <div className="grid grid-cols-7">
              <div className="col-span-4 ">
                <h1 className="font-bold text-zinc-800 text-2xl">
                  Sharing Combos
                </h1>

                <button className="mt-4 transition duration-500 border-2 font-bold hover:bg-[#FCECC7] hover:border-[#FFC72C] hover:text-zinc-800 rounded-3xl bg-[#FFF8E6] text-[#B79B83] border-[#B79B83] px-8 py-2 border-rounded">
                  Veg
                </button>
                <button className="mt-4 transition duration-500 border-2 font-bold hover:bg-[#FCECC7] hover:border-[#FFC72C] hover:text-zinc-800 rounded-3xl bg-[#FFF8E6] text-[#B79B83] border-[#B79B83] px-8 py-2 border-rounded ml-4">
                  Non-Veg
                </button>
                <div>
                  <Cards />
                </div>
              </div>
              <span className=" border-r "></span>

              <div className="col-span-2 ">hello</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
