import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "TokenShelf", short_name: "TokenShelf", description: "A directory of free AI credits, tokens, trials, and useful tools.", start_url: "/", display: "standalone", background_color: "#f8f7f4", theme_color: "#f8f7f4", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
