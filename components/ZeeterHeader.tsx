"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  CalendarDays,
  ClipboardCheck,
  Heart,
  Home,
  LogOut,
  MessageCircle,
  UserRound,
} from "lucide-react";
import { classNames, isActivePath } from "@/helpers/header";
import type { NavItem, ProfileMenuItem } from "@/types/header";

const iconClassName = "h-5 w-5 md:h-4 md:w-4 lg:h-5 lg:w-5";

function MatchesIcon({
  className = iconClassName,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <span
      className={classNames("relative flex items-center justify-center", className)}
    >
      <MessageCircle className="h-full w-full" strokeWidth={2} />
      <Heart className="absolute h-2 w-2 lg:h-2.5 lg:w-2.5" strokeWidth={2.5} />
    </span>
  );
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    Icon: Home,
  },
  {
    label: "Events",
    href: "/events",
    Icon: CalendarDays,
  },
  {
    label: "Matches",
    href: "/matches",
    Icon: MatchesIcon,
  },
];

const profileMenuItems: ProfileMenuItem[] = [
  {
    label: "My Result",
    Icon: ClipboardCheck,
  },
  {
    label: "Account Settings",
    Icon: UserRound,
    href: "/account-settings",
  },
  {
    label: "Sign Out",
    Icon: LogOut,
  },
];

export default function SiteHeader() {

  // for active nav header
  const pathname = usePathname();
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // for closing profile menu
  useEffect(() => {
    function closeProfileMenu(event: MouseEvent) {
      const clickedElement = event.target as Node;

      if (!profileMenuRef.current?.contains(clickedElement)) {
        setIsProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", closeProfileMenu);

    return () => document.removeEventListener("mousedown", closeProfileMenu);
  }, []);

  
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-background">
      <div className="mx-auto grid h-19 w-full grid-cols-[24px_1fr_auto] items-center gap-4 px-5 md:flex md:h-14 md:justify-between md:px-6 lg:h-20 lg:max-w-400 lg:px-40">
        <Link href="/" className="flex items-center">
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

          <Image
            src="/Z.svg"
            alt="Zeeter AI"
            width={170}
            height={20}
            priority
            className="hidden h-6 md:block lg:h-10"
          />
        </Link>

        <nav className="flex items-center justify-center gap-5 md:absolute md:left-1/2 md:-translate-x-1/2 md:gap-8 lg:gap-12">
          {navItems.map((item) => {
            const isActive = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={classNames(
                  "relative flex items-center text-xs font-medium transition md:text-sm lg:text-base",
                  isActive ? "text-black" : "text-gray-500 hover:text-black",
                )}
              >
                <span
                  className={classNames(
                    "flex h-8 w-8 items-center justify-center rounded-full md:h-auto md:w-auto md:rounded-none",
                    isActive
                      ? "h-12 w-12 bg-orange-100 text-orange-600 md:h-auto md:w-auto md:bg-transparent md:text-black"
                      : false,
                  )}
                >
                  <item.Icon className={iconClassName} strokeWidth={2} />
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

        <div
          ref={profileMenuRef}
          className="relative flex items-center justify-end gap-5 md:gap-6 lg:gap-8"
        >
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
            aria-expanded={isProfileMenuOpen}
            aria-haspopup="menu"
            className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full bg-gray-100 lg:h-10 lg:w-10"
            onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
          >
            <Image
              src="/Syeed.jpg"
              alt=""
              fill
              sizes="40px"
              className="object-cover"
            />
          </button>

          {isProfileMenuOpen && (
            <div
              role="menu"
              className="absolute right-0 top-12 w-50 rounded-2xl border border-gray-100 bg-white py-3 shadow-[0_8px_24px_rgba(0,0,0,0.14)] lg:top-14"
            >
              {profileMenuItems.map((item) => (
                <ProfileMenuRow
                  key={item.label}
                  item={item}
                  onClick={() => setIsProfileMenuOpen(false)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function ProfileMenuRow({
  item,
  onClick,
}: {
  item: ProfileMenuItem;
  onClick: () => void;
}) {
  const className =
    "flex w-full items-center gap-4 rounded-4xl px-5 py-2.5 text-left text-sm text-gray-800 hover:bg-gray-100";

  if (item.href) {
    return (
      <Link href={item.href} role="menuitem" className={className} onClick={onClick}>
        <item.Icon className="h-5 w-5 text-gray-500" strokeWidth={1.8} />
        <span>{item.label}</span>
      </Link>
    );
  }

  return (
    <button type="button" role="menuitem" className={className} onClick={onClick}>
      <item.Icon className="h-5 w-5 text-gray-500" strokeWidth={1.8} />
      <span>{item.label}</span>
    </button>
  );
}
