import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [sideMenu, setMenu] = useState(false);

  const navLinks = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Product",
      link: "/product",
    },
  ];
  return (
    <div className="px-8 py-4 flex justify-between bg-slate-400 items-center">
      <section className="flex ">
        <FiMenu
          onClick={() => setMenu(true)}
          className=" text-4xl cursor-pointer lg:hidden mr-2"
        />
        <h1 className="font-bold text-2xl">MegaMart</h1>
      </section>
      {sideMenu && (
        <div className="bg-black/50 w-screen h-full backdrop-blur-sm top-0 right-0 fixed translate-x-0  transition-all ">
          <section className="text-black bg-white flex-col absolute left-0 top-0 w-48 h-screen p-8 gap-8 z-50 flex  ">
            <IoClose
              onClick={() => setMenu(false)}
              className="text-4xl cursor-pointer"
            />
            <h1>musab</h1>
            <h1>musab</h1>
            <h1>musab</h1>
            <h1>musab</h1>
            <h1>musab</h1>
          </section>
        </div>
      )}

      {/* {navLinks.map()} */}
      <section className="flex">
        <FaShoppingCart className="text-3xl mr-3" />
        <img
          width={40}
          height={40}
          className="h-8 w-8 rounded-full"
          src="https://i.pravatar.cc/150?img=52"
          alt="avatar-img"
        />
      </section>
    </div>
  );
}
