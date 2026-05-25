import Image from "next/image";
import { LogOut, Trash2 } from "lucide-react";
import type { ProfileSection, UserProfile } from "@/types/account-settings";

const missingValue = "-";

// Keeping the long profile page as data makes it easier to scan and edit later.
const profileSections: ProfileSection[] = [
  {
    title: "Bio",
    canEdit: true,
    fields: [{ label: "Bio", value: missingValue }],
  },
  {
    title: "Personal",
    canEdit: true,
    fields: [
      { label: "Full Name", value: "Shahriar Syeed" },
      { label: "Date of Birth", value: missingValue },
      { label: "Zodiac Sign", value: missingValue },
      { label: "Gender", value: missingValue },
      { label: "Location", value: missingValue },
      { label: "Height", value: missingValue },
      { label: "Religion", value: missingValue },
      { label: "Relationship", value: missingValue },
    ],
  },
  {
    title: "Contact",
    canEdit: true,
    fields: [
      {
        label: "Email",
        value: "shahariarsyeed2026@gmail.com",
        helpText: "This email will be used to log in to your account",
      },
      { label: "Phone", value: "+1" },
    ],
  },
  {
    title: "Education",
    canEdit: true,
    fields: [{ label: "Studied", value: missingValue }],
  },
  {
    title: "Work/Career",
    canEdit: true,
    fields: [
      { label: "Job Title", value: missingValue },
      { label: "Industry", value: missingValue },
    ],
  },
  {
    title: "Family Status",
    canEdit: true,
    fields: [
      { label: "Pets", value: missingValue },
      { label: "Kids", value: missingValue },
      { label: "Want Kids?", value: missingValue },
    ],
  },
  {
    title: "Conversation Starters",
    canEdit: true,
    fields: [
      { label: "Interests", value: missingValue },
      { label: "Music", value: missingValue },
      { label: "Movies", value: missingValue },
      { label: "Books", value: missingValue },
    ],
  },
  {
    title: "Personality & Quirks",
    canEdit: true,
    fields: [
      { label: "Sense of Humor", value: missingValue },
      { label: "Energy Level", value: missingValue },
      { label: "Typical Weekend", value: missingValue },
      { label: "Communication Style", value: missingValue },
      { label: "Love Style", value: missingValue },
      { label: "Workout", value: missingValue },
      { label: "Social Media", value: missingValue },
    ],
  },
  {
    title: "Account Security",
    canEdit: true,
    fields: [{ label: "Password", value: missingValue }],
  },
];

export default function AccountProfilePanel({
  userProfile,
}: {
  userProfile: UserProfile;
}) {
  return (
    <div className="w-full min-w-0">
      <h1 className="text-[22px] font-semibold leading-7 text-black">
        My Profile
      </h1>

      <div className="mt-8 space-y-7">
        <PhotosCard userProfile={userProfile} />

        {profileSections.map((section) => (
          <ProfileSectionCard key={section.title} section={section} />
        ))}
      </div>
    </div>
  );
}

function PhotosCard({ userProfile }: { userProfile: UserProfile }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <h2 className="text-[17px] font-semibold leading-6 text-black">Photos</h2>

      <div className="mt-6 flex items-center gap-4 lg:gap-5">
        <div className="rounded-lg border border-gray-200 p-2">
          <Image
            src={userProfile.image}
            alt={userProfile.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:flex lg:gap-3 lg:mt-20">
          <button
            type="button"
            className="h-10 rounded-full bg-gray-100 px-4 text-xs  text-black hover:bg-gray-200 sm:text-sm  lg:px-5 mb-4"
          >
            Upload New Photo
          </button>

          <button
            type="button"
            className="h-10 w-fit rounded-full bg-red-500 px-4 text-sm  sm:text-xs font-semibold text-white hover:bg-red-600 lg:px-5"
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
}

function ProfileSectionCard({ section }: { section: ProfileSection }) {
  if (section.title === "Account Security") {
    return <AccountSecurityCard />;
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-semibold leading-6 text-black">
          {section.title}
        </h2>

        {section.canEdit && (
          <button
            type="button"
            className="text-[14px] font-semibold text-black underline"
          >
            Edit
          </button>
        )}
      </div>

      <div className="mt-8">
        {section.fields.map((field, index) => (
          <div
            key={field.label}
            className={index > 0 ? "border-t border-gray-200 pt-5 mt-5" : ""}
          >
            <div className="grid gap-2 text-[14px] leading-5 text-black lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-5">
              <span>{field.label}</span>
              <span className="break-words">{field.value}</span>
            </div>

            {field.helpText && (
              <p className="mt-1 text-[12px] leading-5 text-gray-500 lg:pl-[200px]">
                {field.helpText}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function AccountSecurityCard() {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-7 shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <h2 className="text-[17px] font-semibold leading-6 text-black">
        Account Security
      </h2>

      <div className="mt-7 flex flex-wrap items-center gap-4 lg:gap-8">
        <button
          type="button"
          className="flex h-12 items-center gap-3 rounded-full border border-gray-200 px-5 text-[15px] text-black hover:bg-gray-50"
        >
          <LogOut className="h-5 w-5" strokeWidth={1.8} />
          <span>Sign Out</span>
        </button>

        <button
          type="button"
          className="flex h-12 items-center gap-3 text-[15px] text-red-500 hover:text-red-600"
        >
          <Trash2 className="h-5 w-5" strokeWidth={1.8} />
          <span>Delete Account</span>
        </button>
      </div>
    </section>
  );
}
