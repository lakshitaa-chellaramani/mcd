import React from "react";
import { useState, useEffect } from "react";

const CardGenerator = ({ imagesrc, imagealt, title, price, desc, veg }) => {
  const [addToCart, setAddToCart] = useState(false);
  let [count, setCount] = useState(0);
  const handlecartbutton = () => {
    setAddToCart(true);
  };
  const handleAddButton = () => {
    setCount(count+1);
  };
  const handleRemoveButton = () => {
    
    setCount(count!=0?count-1:count=0);
  };
  return (
    <div>
      <div class=" m-10   flex w-full max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md">
        <div class="w-full p-12  flex h-60 overflow-hidden ">
          <img
            className="w-6 h-6 relative -top-4 left-[16rem]"
            src={veg == true ? "src/assets/veg.svg" : "src/assets/nonveg.svg"}
          />
          <img class="object-cover w-full" src={imagesrc} alt={imagealt} />
        </div>
        <div class="mt-4 px-5 pb-5">
          <h1>
            <h5 class="text-xl font-bold tracking-tight text-slate-900">
              {title}
            </h5>
            <h2 className=" py-2 font-medium text-zinc-400 text-md truncate text-sm">
              {desc}
            </h2>
          </h1>
          <div class="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span class="text-2xl font-bold text-slate-900">₹{price}</span>
            </p>
          </div>
          {
            addToCart==true ?  (
        
          <div  class="flex justify-center mb-6 items-center">
            <button
            onClick={handleRemoveButton}
             class="bg-[#E3D1BD] text-black px-2 py-2 mr-1 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>

            <button class=" text-gray-700 px-4 py-2">{count}</button>

            <button 
            onClick={handleAddButton}
            class="bg-[#FFBC0B] ml-1 text-black px-2 py-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
  ) :
  <button
            onClick={handlecartbutton}
            class="flex items-center w-full justify-center rounded-md bg-[#FFBC0B] px-5 py-2.5 text-center text-sm font-bold text-zinc-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
 }

          
        </div>
      </div>
    </div>
  );
};

export default CardGenerator;
