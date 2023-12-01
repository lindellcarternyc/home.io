"use client";

import { useState } from "react";

import AddButton from "./AddButton";
import MenuButton from "./MenuButton";
import Navbar from "./Navbar";
import type { ILink } from "./interfaces";
import { usePathname, useRouter } from "next/navigation";

const LINKS: ILink[] = [
  {
    title: "Items",
    href: "/",
  },
  {
    title: "Categories",
    href: "/categories",
  },
  {
    title: "Purchases",
    href: "/purchases",
  },
];

export default function Header() {
  const [isNavbarOpen, setIsNavarOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClickMenuButton = () => setIsNavarOpen((current) => !current);

  const onClickNavLink = (href: string) => {
    setIsNavarOpen(false);

    if (pathname !== href) {
      router.push(href);
    }
  };

  return (
    <div>
      <header className="relative bg-black p-4 text-white">
        <h1 className="text-center text-xl">Home.io</h1>
        <div className="absolute right-4 top-4">
          <div className="md:hidden">
            <MenuButton onClick={onClickMenuButton} />
          </div>
          <div className="hidden md:block">
            <AddButton />
          </div>
        </div>
      </header>
      <div className={`md:hidden ${!isNavbarOpen ? "hidden" : ""}`}>
        <Navbar links={LINKS} onClick={onClickNavLink} />
      </div>
    </div>
  );
}
