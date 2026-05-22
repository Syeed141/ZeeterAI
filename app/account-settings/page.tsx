import AccountSettings from "@/components/AccountSettings";
import type { SettingsPanel } from "@/types/account-settings";

const panels: SettingsPanel[] = [
  "profile",
  "tokens",
  "preferences",
  "notifications",
  "social-connect",
];

type AccountSettingsPageProps = {
  searchParams: Promise<{
    currentPanel?: string;
  }>;
};

export default async function AccountSettingsPage({
  searchParams,
}: AccountSettingsPageProps) {
  const currentPanel = getCurrentPanel((await searchParams).currentPanel);

  return <AccountSettings currentPanel={currentPanel} />;
}

function getCurrentPanel(panel?: string): SettingsPanel | null {
  if (panels.includes(panel as SettingsPanel)) {
    return panel as SettingsPanel;
  }

  return null;
}
