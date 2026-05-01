import { type ClassValue, clsx } from "clsx";

// Simple class name merger (replaces clsx+twMerge for lighter bundle)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPhone(phone: string): string {
  return phone.replace(/\s/g, "");
}
