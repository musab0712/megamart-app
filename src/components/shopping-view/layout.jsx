import React from "react";
import ShoppingHeader from "./header";
import { Outlet } from "react-router-dom";

function ShoppingLayput() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShoppingHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default ShoppingLayput;
