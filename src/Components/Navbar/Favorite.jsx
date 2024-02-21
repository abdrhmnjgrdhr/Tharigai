import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
function Favorite() {
  var number = 5;
  return (
    <div>
      <div className="relative">
        <div>
          <MdOutlineFavoriteBorder className="text-2xl text-green-500 " />
        </div>
        <div className="absolute w-[15px] h-[15px] bg-red-400 rounded-full flex items-center justify-center text-white -top-1 -right-2">
          <p className="text-xs ">{number}</p>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
