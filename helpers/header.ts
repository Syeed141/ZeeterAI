export function classNames(...classes: Array<string | false>) {
  return classes.filter(Boolean).join(" ");
}

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname.startsWith(href);
}
