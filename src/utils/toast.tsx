"use client";

import clsx from "clsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-600",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      {children}

      <ToastContainer
        bodyClassName="text-sm font-white font-medium block p-3"
        toastClassName={(context) => {
          const { type = "default" } = { ...context };
          return clsx(
            "rounded-md p-1 min-h-10 flex justify-between overflow-hidden cursor-pointer",
            contextClass[type]
          );
        }}
        position="bottom-left"
        autoClose={3000}
      />
    </>
  );
}
