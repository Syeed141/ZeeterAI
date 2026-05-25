import LoadingSpinner from "@/components/LoadingSpinner";

export default function AccountSettingsLoading() {
  return (
    <section className="min-h-[calc(100vh-76px)] bg-[#faf9f7] px-6 py-6 md:h-[calc(100vh-56px)] md:min-h-0 lg:h-[calc(100vh-80px)] lg:px-0 lg:py-4.5">
      <div className="mx-auto grid h-full w-full max-w-310 gap-5 md:grid-cols-[340px_minmax(0,1fr)]">
        <div className="hidden min-w-0 md:block">
          <div className="h-[284px] rounded-2xl border border-gray-200 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)]" />
          <div className="mt-5 space-y-2">
            <div className="h-11 bg-transparent" />
            <div className="h-11 bg-transparent" />
            <div className="h-11 bg-transparent" />
            <div className="h-11 bg-transparent" />
            <div className="h-11 bg-transparent" />
          </div>
        </div>

        <div className="min-w-0 md:overflow-y-auto md:pr-1">
          <LoadingSpinner className="min-h-[calc(100vh-124px)] md:min-h-full" />
        </div>
      </div>
    </section>
  );
}
