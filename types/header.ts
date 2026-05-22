import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";

export type HeaderIcon = LucideIcon | ComponentType<IconProps>;

export type IconProps = {
  className?: string;
  strokeWidth?: number;
};

export type NavItem = {
  label: string;
  href: string;
  Icon: HeaderIcon;
};

export type ProfileMenuItem = {
  label: string;
  Icon: LucideIcon;
  href?: string;
};
