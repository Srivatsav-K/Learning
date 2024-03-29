import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("en-in", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
