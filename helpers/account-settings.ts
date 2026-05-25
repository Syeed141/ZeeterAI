import type { SettingsOption, SettingsPanel } from "@/types/account-settings";

const panels: SettingsPanel[] = [
  "profile",
  "tokens",
  "preferences",
  "notifications",
  "social-connect",
];

export function getCurrentPanel(panel?: string): SettingsPanel | null {
  if (panels.includes(panel as SettingsPanel)) {
    return panel as SettingsPanel;
  }

  return null;
}

export function getMenuClassName(isActive: boolean) {
  const baseClassName =
    "flex h-11 w-full cursor-pointer items-center gap-3 px-3 text-left text-[15px] leading-5 text-black hover:bg-[#ffefd7]";

  if (!isActive) {
    return baseClassName;
  }

  return `${baseClassName} border-l-2 border-orange-500 bg-[#ffefd7]`;
}

export function getSelectedSettingsOption(
  settingsOptions: SettingsOption[],
  currentPanel: SettingsPanel,
) {
  return settingsOptions.find((option) => option.panel === currentPanel);
}
