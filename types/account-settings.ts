import type { LucideIcon } from "lucide-react";

export type SettingsPanel =
  | "profile"
  | "tokens"
  | "preferences"
  | "notifications"
  | "social-connect";

export type UserProfile = {
  name: string;
  email: string;
  image: string;
  setupPercent: number;
};

export type TokenSummary = {
  available: number;
};

export type SettingsOption = {
  label: string;
  panel: SettingsPanel;
  Icon: LucideIcon;
};

export type ProfileField = {
  label: string;
  value: string;
  helpText?: string;
};

export type ProfileSection = {
  title: string;
  fields: ProfileField[];
  canEdit?: boolean;
};
