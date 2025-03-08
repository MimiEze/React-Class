import { Store } from 'lucide-react';
import React from 'react'
import { Outlet } from 'react-router';
import shopping from "../assets/freestock.jpg";

export default function AuthLayout() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-[50%] h-screen">
        <img src={shopping} className="w-full h-full object-cover" />
      </div>
      <div className="w-[50%]">
        <Outlet />
      </div>
    </div>
  );
}

