type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

export default function LoadingSpinner({
  className = "",
  label = "Loading",
}: LoadingSpinnerProps) {
  const segments = Array.from({ length: 12 });

  return (
    <div
      role="status"
      aria-label={label}
      className={`flex min-h-60 w-full items-center justify-center ${className}`}
    >
      <span className="relative h-7 w-7 animate-spin" aria-hidden="true">
        {segments.map((_, index) => (
          <span
            key={index}
            className="absolute left-1/2 top-0 h-2 w-0.75 origin-[50%_14px] -translate-x-1/2 rounded-full bg-black"
            style={{
              opacity: 1 - index * 0.065,
              transform: `rotate(${index * 30}deg)`,
            }}
          />
        ))}
      </span>
    </div>
  );
}
