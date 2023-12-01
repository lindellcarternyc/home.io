export const isCurrentLink = (pathname: string, href: string): boolean => {
  if (href === "/") {
    if (pathname === "/" || pathname.startsWith("/items")) return true;
    return false;
  }
  return pathname.startsWith(href);
};
