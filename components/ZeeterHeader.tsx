"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, CalendarDays, Heart, Home, MessageCircle } from "lucide-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Events",
    href: "/events",
    icon: CalendarDays,
  },
  {
    label: "Matches",
    href: "/matches",
    icon: null,
  },
];

function MatchesIcon() {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center md:h-4 md:w-4 lg:h-5 lg:w-5">
      <MessageCircle className="h-full w-full" strokeWidth={2} />
      <Heart className="absolute h-2 w-2 lg:h-2.5 lg:w-2.5" strokeWidth={2.5} />
    </span>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white">
      <div className="mx-auto grid h-19 w-full grid-cols-[24px_1fr_auto] items-center gap-4 px-5 md:flex md:h-14 md:justify-between md:px-6 lg:h-20 lg:max-w-400 lg:px-40">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          {/* Mobile logo */}
          <div className="relative h-6 w-6 overflow-hidden md:hidden">
            <Image
              src="/Z.svg"
              alt="Zeeter AI"
              fill
              priority
              sizes="24px"
              className="object-cover object-left"
            />
          </div>

          {/* Tablet and desktop full logo */}
          <Image
            src="/Z.svg"
            alt="Zeeter AI"
            width={170}
            height={20}
            priority
            className="hidden h-6  md:block lg:h-10"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center justify-center gap-5 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 lg:gap-12">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center text-xs font-medium transition md:text-sm lg:text-base ${
                  isActive ? "text-black" : "text-gray-500 hover:text-black"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full md:h-auto md:w-auto md:rounded-none ${
                    isActive
                      ? "h-12 w-12 bg-orange-100 text-orange-600 md:h-auto md:w-auto md:bg-transparent md:text-black"
                      : ""
                  }`}
                >
                  {Icon ? (
                    <Icon
                      className="h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5"
                      strokeWidth={2}
                    />
                  ) : (
                    <MatchesIcon />
                  )}
                </span>

                <span className="ml-2 hidden md:inline">{item.label}</span>

                {isActive && (
                  <span className="absolute -bottom-3 hidden h-0.5 w-full bg-orange-600 md:block lg:-bottom-6.75" />
                )}
              </Link>
            );
          })}

          <button
            type="button"
            aria-label="Notifications"
            className="text-gray-500 hover:text-black md:hidden"
          >
            <Bell className="h-5 w-5" strokeWidth={2} />
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center justify-end gap-5 md:gap-6 lg:gap-8">
          <button
            type="button"
            aria-label="Notifications"
            className="hidden text-gray-500 hover:text-black md:block"
          >
            <Bell
              className="h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5"
              strokeWidth={2}
            />
          </button>


            <button
              type="button"
              aria-label="Profile"
              className="relative h-8 w-8 overflow-hidden rounded-full bg-gray-100 p-1 lg:h-10 lg:w-10"
            />
          
        </div>
      </div>
    </header>
  );
}
