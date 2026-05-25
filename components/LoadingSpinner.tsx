import { LoaderCircle } from "lucide-react";

type LoadingSpinnerProps = {
  className?: string;
  label?: string;
};

export default function LoadingSpinner({
  className = "",
  label = "Loading",
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={`flex min-h-60 w-full items-center justify-center ${className}`}
    >
      <LoaderCircle className="h-5 w-5 animate-spin text-black" strokeWidth={2.4} />
    </div>
  );
}
