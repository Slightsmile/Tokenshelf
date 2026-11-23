import type { OfferCategory } from "./offers";

export const categories: { name: OfferCategory; description: string; icon: "code" | "chat" | "sparkles" | "layers" }[] = [
  { name: "Developer APIs", description: "Credits and gateways for your next build.", icon: "code" },
  { name: "Text & chat", description: "Language models, chat, and assistants.", icon: "chat" },
  { name: "AI agents", description: "An extra pair of hands for everyday tasks.", icon: "sparkles" },
  { name: "Multimodal", description: "Explore text, images, video, and audio.", icon: "layers" },
];
