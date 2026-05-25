import AccountSettings from "@/components/AccountSettings";
import { getCurrentPanel } from "@/helpers/account-settings";

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
