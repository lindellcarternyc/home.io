"use client";

import { GrMenu } from "react-icons/gr";

interface MenuButtonProps {
  onClick: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps) {
  return (
    <button type="button" title="Menu Toggle" onClick={onClick}>
      <GrMenu />
    </button>
  );
}
