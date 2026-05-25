import AccountSettings from "@/components/AccountSettings";
import { getCurrentPanel } from "@/helpers/account-settings";
import { delay } from "@/helpers/loading";

type AccountSettingsPageProps = {
  searchParams: Promise<{
    currentPanel?: string;
  }>;
};

export default async function AccountSettingsPage({
  searchParams,
}: AccountSettingsPageProps) {
  await delay(1000);

  const currentPanel = getCurrentPanel((await searchParams).currentPanel);

  return <AccountSettings currentPanel={currentPanel} />;
}
