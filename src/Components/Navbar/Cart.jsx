import React from "react";
import { FaCartPlus } from "react-icons/fa6";

function Cart() {
  var number = 4;
  return (
    <div>
      <div className="relative">
        <div>
          <FaCartPlus className="text-2xl text-green-500 " />
        </div>
        <div className="absolute w-[15px] h-[15px] bg-red-400 rounded-full flex items-center justify-center text-white -top-1 -right-2">
          <p className="text-xs ">{number}</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
