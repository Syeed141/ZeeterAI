const tokenPackages = [
  {
    name: "Starter Package",
    description: "Try compatibility with a few people",
    price: "$9",
    cents: ".99",
    tokens: "3 Tokens",
    rate: "$3.33 per token",
    bestFor: "Best for: First-time users, curious daters, testing the experience",
    features: [
      "Check compatibility with up to 6 people",
      "Perfect for a first date or someone you're genuinely curious about",
      "Low commitment, instant value",
    ],
  },
  {
    name: "Core Package",
    description: "Enough for real dating exploration",
    price: "$15",
    cents: ".99",
    tokens: "6 Tokens",
    rate: "$2.67 per token",
    badge: "Most Popular",
    active: true,
    bestFor: "Best for: Active daters, speed dating follow-ups, sharing your link",
    features: [
      "Check compatibility with up to 12 people",
      "Designed for real-world dating and social events",
      "Best value for discovering patterns and strong matches",
    ],
  },
  {
    name: "Power User Package",
    description: "Dating actively? Save per match",
    price: "$25",
    cents: ".99",
    tokens: "12 Tokens",
    rate: "$2.17 per token",
    badge: "Best Value",
    bestFor: "Best for: Power users, event attendees, high-intent daters",
    features: [
      "Check compatibility with up to 24 people",
      "Lowest cost per match",
      "Ideal for frequent events or sharing your compatibility link widely",
    ],
  },
];

export default function AccountTokensPanel() {
  return (
    <div className="w-full min-w-0 pb-6">
      <h1 className="text-[26px] font-semibold leading-8 text-black">Tokens</h1>

      <div className="mt-4 grid gap-5 rounded-3xl bg-[#fff6e9] p-5 lg:mt-7 lg:grid-cols-3 lg:p-4">
        {tokenPackages.map((tokenPackage) => (
          <section
            key={tokenPackage.name}
            className={
              tokenPackage.active
                ? "min-w-0 rounded-2xl border border-[#1da1f2] bg-white p-5 md:border-orange-500 lg:border-[#1da1f2]"
                : "min-w-0 rounded-2xl p-5"
            }
          >
            <div className="flex min-h-7 items-center gap-2">
              <h2 className="text-[17px] font-medium leading-6 text-black lg:hidden">
                {tokenPackage.name}
              </h2>

              {tokenPackage.badge && (
                <span
                  className={
                    tokenPackage.active
                      ? "inline-flex rounded-full bg-[#159fe6] px-4 py-1 text-xs font-semibold text-white"
                      : "inline-flex rounded-full bg-[#ffedcf] px-4 py-1 text-xs font-semibold text-orange-600"
                  }
                >
                  {tokenPackage.badge}
                </span>
              )}
            </div>

            <h2 className="mt-5 hidden text-[17px] font-medium leading-6 text-black lg:block">
              {tokenPackage.name}
            </h2>
            <p className="mt-2 min-h-10 break-words text-[15px] leading-5 text-gray-500">
              {tokenPackage.description}
            </p>

            <div className="mt-5 flex items-center justify-between gap-4 lg:block">
              <div className="min-w-0">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-[44px] font-medium leading-10 text-black">
                    {tokenPackage.price}
                  </span>
                  <span className="pb-1 text-[18px] text-black">
                    {tokenPackage.cents}
                  </span>
                  <span className="mb-0.5 rounded-full bg-[#ffedcf] px-3 py-1 text-xs font-medium text-black">
                    {tokenPackage.tokens}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-5 text-gray-500">
                  {tokenPackage.rate}
                </p>
              </div>

              <button
                type="button"
                className={
                  tokenPackage.active
                    ? "h-11 shrink-0 rounded-full bg-orange-600 px-7 text-[16px] font-semibold text-white hover:bg-orange-700 lg:mt-4 lg:w-full"
                    : "h-11 shrink-0 rounded-full border border-gray-200 bg-white px-7 text-[16px] font-medium text-black hover:bg-gray-50 lg:mt-4 lg:w-full"
                }
              >
                Buy Now
              </button>
            </div>

            <p className="mt-4 break-words rounded-xl bg-[#ffedcf] p-3 text-[15px] leading-5 text-black">
              {tokenPackage.bestFor}
            </p>

            <ul className="mt-4 space-y-3 pl-5 text-[15px] leading-6 text-black">
              {tokenPackage.features.map((feature) => (
                <li key={feature} className="list-disc pl-2 break-words">
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
