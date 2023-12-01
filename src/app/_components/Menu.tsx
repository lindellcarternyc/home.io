"use client";

import { usePathname } from "next/navigation";
import type { ILink } from "./interfaces";
import { isCurrentLink } from "./utils";

interface MenuProps {
  links: ILink[];
  onClick: (href: string) => void;
}

export default function Menu({ links, onClick }: MenuProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white">
      <ul className="flex flex-col items-end gap-4 p-4">
        {links.map(({ title, href }) => {
          return (
            <li key={title}>
              <button
                type="button"
                onClick={() => onClick(href)}
                className={`${
                  isCurrentLink(pathname, href) ? "border-b pb-2" : ""
                }`}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
