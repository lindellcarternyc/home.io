"use client";

import Link from "next/link";
import type { ILink } from "./interfaces";
import { usePathname } from "next/navigation";
import { isCurrentLink } from "./utils";

interface NavbarProps {
  links: ILink[];
}

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-black text-white">
      <ul className="flex justify-center gap-8 p-4">
        {links.map(({ title, href }) => (
          <li
            key={title}
            className={`${isCurrentLink(pathname, href) ? "border-b" : ""}`}
          >
            <Link href={href}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
