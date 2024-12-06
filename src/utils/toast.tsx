"use client";

import clsx from "clsx";
import {
  type Id,
  Slide,
  ToastContainer,
  type ToastContent,
  type ToastOptions,
  toast,
} from "react-toastify";

export const defaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Slide,
};

/**
 * Display toast
 *
 * @param {ToastType} type
 * @param {ToastContent} content
 * @param {ToastOptions} [options=defaultToastOption]
 * @return {Id}
 */
const toastStyles = {
  success: "bg-green-500 text-white font-bold",
  error: "bg-red-500 text-white font-bold",
  info: "bg-blue-500 text-white font-bold",
  warning: "bg-yellow-500 text-black font-bold",
  default: "bg-gray-500 text-white font-bold",
};

export type ToastType = keyof typeof toastStyles;

export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {},
): Id => {
  const className = toastStyles[type];
  const optionsOverride = { ...defaultOptions, ...options, className };
  return toast(content, optionsOverride);
};

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
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
            contextClass[type],
          );
        }}
        position="bottom-left"
        autoClose={3000}
      />
    </>
  );
}
