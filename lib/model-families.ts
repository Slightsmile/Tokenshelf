export type ModelFamily = "chatgpt" | "claude" | "gemini" | "glm" | "grok" | "deepseek" | "qwen" | "minimax" | "nemotron" | "mistral";

export const modelFamilyOrder: ModelFamily[] = ["chatgpt", "claude", "gemini", "glm", "grok", "deepseek", "qwen", "minimax", "nemotron", "mistral"];

export const modelFamilyInfo: Record<ModelFamily, { name: string; logo: string; match: RegExp }> = {
  chatgpt: { name: "ChatGPT / OpenAI", logo: "chatgpt.svg", match: /chatgpt|openai|\bgpt(?:[-\s]|$)/i },
  claude: { name: "Claude", logo: "claude.svg", match: /claude|anthropic/i },
  gemini: { name: "Gemini", logo: "gemini.svg", match: /gemini/i },
  glm: { name: "GLM / Z.ai", logo: "glm.svg", match: /\bglm|chatglm|z\.ai|\bzai\b/i },
  grok: { name: "Grok", logo: "grok.svg", match: /grok/i },
  deepseek: { name: "DeepSeek", logo: "deepseek.svg", match: /deepseek/i },
  qwen: { name: "Qwen", logo: "qwen.svg", match: /qwen/i },
  minimax: { name: "MiniMax", logo: "minimax.svg", match: /minimax|minmax/i },
  nemotron: { name: "Nemotron / NVIDIA", logo: "nemotron.svg", match: /nemotron/i },
  mistral: { name: "Mistral", logo: "mistral.svg", match: /mistral|ministral|codestral|devstral/i },
};

export function getModelFamilies(offer: { models: string[]; modelFamilies?: ModelFamily[]; availability?: "offline" }): ModelFamily[] {
  if (offer.availability === "offline") return [];
  return modelFamilyOrder.filter((family) => offer.modelFamilies ? offer.modelFamilies.includes(family) : offer.models.some((model) => modelFamilyInfo[family].match.test(model)));
}
