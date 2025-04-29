import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#E8EEF2] px-8 py-4 top-0 flex gap-9 items-center relative h-full shadow-sm shadow-gray-400">
      {/* Logo/Home link */}
      <div className="flex items-center gap-2 text-[#144463] ">
        <Image alt="" src={"/guardian_logo.png"} height={150} width={120} />
        <div className="h-6 w-0.5 bg-[#144463]"></div>
        <h1 className="text-xl text-[#144463] tracking-wider">PORTAL</h1>
      </div>

      {/* Navigation */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-9">
        <h2 className="hover:bg-[#144463] hover:cursor-pointer hover:text-[#E8EEF2] rounded-lg px-4 py-2">
          Org 1
        </h2>
        <h2 className="hover:bg-[#144463] hover:cursor-pointer hover:text-[#E8EEF2] rounded-lg px-4 py-2">
          Org 2
        </h2>
        <h2 className="hover:bg-[#144463] hover:cursor-pointer hover:text-[#E8EEF2] rounded-lg px-4 py-2">
          Org 3
        </h2>
      </div>

      {/* User Info */}
      <div className="flex ml-auto justify-end items-center gap-3">
        <div className="rounded-full overflow-hidden">
          <Image alt="" src={"/me.png"} height={50} width={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
