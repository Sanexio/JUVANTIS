import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// cn() = "class names". Kombiniert mehrere CSS-Klassen zusammen.
// Beispiel: cn("text-red", bedingung && "font-bold") → "text-red font-bold"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
