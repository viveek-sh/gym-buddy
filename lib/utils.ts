import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBasePath = () => process.env.NEXT_PUBLIC_BASE_PATH || "";

export const basePath = (path: string) => {
  const base = getBasePath();
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
};
