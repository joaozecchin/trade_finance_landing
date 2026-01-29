import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "default" | "senior" | "junior" | "success" | "warning";
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-slate-800 text-slate-300",
    senior: "bg-blue-500/20 text-blue-400 border border-blue-500/30",
    junior: "bg-purple-500/20 text-purple-400 border border-purple-500/30",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
