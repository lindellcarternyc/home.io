"use client";

import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface ModalProps {
  children: JSX.Element;
  onClose: () => void;
  isOpen: boolean;
}

export default function Modal({ children, onClose, isOpen }: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, onClose);

  return isOpen ? (
    <div className="fixed left-0 top-0 h-screen w-screen bg-slate-500 bg-opacity-80 p-4">
      <div
        ref={ref}
        className="flex h-full w-full flex-grow items-center justify-center border border-red-500"
      >
        {children}
      </div>
    </div>
  ) : null;
}
