const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tokenshelf.vercel.app";

export const siteUrl = configuredUrl.replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
