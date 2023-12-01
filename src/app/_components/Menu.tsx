"use client";

import type { ILink } from "./interfaces";

interface MenuProps {
  links: ILink[];
  onClick: (href: string) => void;
}

export default function Menu({ links, onClick }: MenuProps) {
  return (
    <nav className="bg-black text-white">
      <ul className="flex flex-col items-end gap-4 p-4">
        {links.map(({ title, href }) => (
          <li key={title}>
            <button type="button" onClick={() => onClick(href)}>
              {title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
