import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  Link2,
  ShieldCheck,
  SlidersHorizontal,
  UserRound,
  Wallet,
} from "lucide-react";
import AccountProfilePanel from "@/components/AccountProfilePanel";
import AccountTokensPanel from "@/components/AccountTokensPanel";
import {
  getMenuClassName,
  getSelectedSettingsOption,
} from "@/helpers/account-settings";
import type {
  SettingsOption,
  SettingsPanel,
  TokenSummary,
  UserProfile,
} from "@/types/account-settings";

const userProfile: UserProfile = {
  name: "Shahriar Syeed",
  email: "shahriarsyeed2026@gmail.com",
  image: "/Syeed.jpg",
  setupPercent: 5,
};

const tokenSummary: TokenSummary = {
  available: 0,
};

const settingsOptions: SettingsOption[] = [
  {
    label: "Profile",
    panel: "profile",
    Icon: UserRound,
  },
  {
    label: "Tokens",
    panel: "tokens",
    Icon: Wallet,
  },
  {
    label: "Preferences",
    panel: "preferences",
    Icon: SlidersHorizontal,
  },
  {
    label: "Notifications",
    panel: "notifications",
    Icon: Bell,
  },
  {
    label: "Social Connect",
    panel: "social-connect",
    Icon: Link2,
  },
];

export default function AccountSettings({
  currentPanel,
}: {
  currentPanel: SettingsPanel | null;
}) {
  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#faf9f7] px-6 py-6 md:h-[calc(100vh-56px)] md:min-h-0 lg:h-[calc(100vh-80px)] lg:px-0 lg:py-4.5">
      <div className="mx-auto grid h-full min-h-0 w-full max-w-310 gap-5 md:grid-cols-[340px_minmax(0,1fr)]">
        <div className={currentPanel ? "hidden min-w-0 md:block" : "min-w-0"}>
          <ProfileCard />
          <SettingsMenu currentPanel={currentPanel} />
        </div>

        <div className="min-w-0 md:min-h-0 md:overflow-y-auto md:pb-20 md:pr-1">
          {currentPanel && (
            <Link
              href="/account-settings"
              className="mb-3 inline-flex h-8 items-center rounded-full border border-gray-200 bg-white px-4 text-[13px] font-medium text-black shadow-sm md:hidden"
            >
              Back
            </Link>
          )}

          <SettingsPanelContent currentPanel={currentPanel} />
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_2px_4px_rgba(0,0,0,0.08)] md:h-[284px]">
      <div className="flex items-start gap-4">
        <Image
          src={userProfile.image}
          alt={userProfile.name}
          width={68}
          height={68}
          className="h-17 w-17 rounded-xl object-cover"
          priority
        />

        <div className="pt-1">
          <h1 className="text-[18px] font-semibold leading-6 text-black ">
            {userProfile.name}
          </h1>
          <p className="mt-2 text-sm leading-5 text-gray-800 ">
            {userProfile.email}
          </p>
        </div>
      </div>

      {/* This shield is just the small verified marker from the design. */}
      <ShieldCheck className="mt-3 h-5 w-5 text-green-600" strokeWidth={2.2} />

      <TokenBox />

      <div className="mt-3 inline-flex rounded-full bg-[#ffe1e1] px-3 py-1.5 text-[15px] leading-5 text-black">
        <span className="font-semibold">{userProfile.setupPercent}%</span>
        <span className="ml-1">Profile is setup</span>
      </div>

      <p className="mt-3 text-[15px] leading-5 text-gray-500">
        Finish your setup to get better match.
      </p>
    </div>
  );
}

function TokenBox() {
  return (
    <div className="mt-3 flex h-16 items-center justify-between rounded-[14px] bg-[#fbfbfb] px-2 py-3 pl-2">
      <div>
        <p className="text-[18px] font-semibold leading-5 text-black">
          {tokenSummary.available}
        </p>
        <p className="mt-2 text-[14px] leading-5 text-gray-500">
          Token Available
        </p>
      </div>

      <button
        type="button"
        className="h-10 rounded-full border border-gray-300 px-5 text-[14px] font-semibold text-black hover:bg-white"
      >
        Buy Token
      </button>
    </div>
  );
}

function SettingsMenu({ currentPanel }: { currentPanel: SettingsPanel | null }) {
  return (
    <div className="mt-5 space-y-2">
      {settingsOptions.map((option) => (
        <Link
          key={option.label}
          href={`/account-settings?currentPanel=${option.panel}`}
          className={getMenuClassName(option.panel === currentPanel)}
        >
          <option.Icon className="h-4.5 w-4.5" strokeWidth={1.8} />
          <span>{option.label}</span>
        </Link>
      ))}
    </div>
  );
}

function SettingsPanelContent({
  currentPanel,
}: {
  currentPanel: SettingsPanel | null;
}) {
  if (!currentPanel) {
    return null;
  }

  if (currentPanel === "profile") {
    return <AccountProfilePanel userProfile={userProfile} />;
  }

  if (currentPanel === "tokens") {
    return <AccountTokensPanel />;
  }

  const selectedOption = getSelectedSettingsOption(settingsOptions, currentPanel);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <h1 className="text-[26px] font-semibold leading-8 text-black">
        {selectedOption?.label}
      </h1>
      <p className="mt-4 text-[15px] text-gray-500">-</p>
    </div>
  );
}
