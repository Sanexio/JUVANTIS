import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

// IconBox = Quadrat mit Icon drin. Wird in Feature-Karten als visueller Akzent genutzt.

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeStyles = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const iconSizes = { sm: 18, md: 24, lg: 28 };

export function IconBox({ icon: Icon, size = "md", className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "rounded-xl flex items-center justify-center bg-teal/15",
        sizeStyles[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} className="text-teal-bright" />
    </div>
  );
}
