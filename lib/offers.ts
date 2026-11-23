export type OfferCategory = "Developer APIs" | "Text & chat" | "AI agents" | "Multimodal";
export type Verification = "confirmed" | "partial" | "community";

export type ClaimStep = {
  title: string;
  description?: string;
  items?: string[];
  link?: { label: string; url: string };
};

export type Offer = {
  id: string;
  provider: string;
  title: string;
  description: string;
  category: OfferCategory;
  amount: string;
  rewardLabel: string;
  requirement: string;
  refresh: string;
  access: string;
  tone: "blue" | "violet" | "green" | "orange" | "slate";
  mark: string;
  url: string;
  verification: Verification;
  checkedAt: string;
  benefits: string[];
  models: string[];
  modelNote: string;
  steps: ClaimStep[];
  conditions: string[];
  sourceNote: string;
  sources: { label: string; url: string }[];
  apiBase?: string;
  docsUrl?: string;
  code?: string;
  deadline?: string;
  notice?: { title: string; description: string };
  featured?: number;
};

const checkedAt = "2026-11-23";

export const offers: Offer[] = [
  {
    id: "freegg",
    provider: "FreeGG",
    title: "GPT API credits",
    description: "A community-listed starter credit for exploring GPT through an API gateway.",
    category: "Text & chat",
    amount: "$100 credit",
    rewardLabel: "Reported sign-up credit",
    requirement: "GitHub sign-up",
    refresh: "One-time starter credit",
    access: "API gateway",
    tone: "blue",
    mark: "FG",
    url: "https://freegg.app/sign-up?aff=pCLT",
    verification: "partial",
    checkedAt,
    benefits: [
      "The submitted offer describes $100 in API credit after joining through the referral link.",
      "FreeGG's public configuration confirms registration is open and GitHub sign-in is enabled.",
      "Client integrations include Cherry Studio, DeepChat, and other OpenAI-compatible tools.",
    ],
    models: [],
    modelNote: "GPT access is community-reported. The provider's model pricing page requires an account, so the current model IDs and credit eligibility need to be checked there.",
    steps: [
      { title: "Open the referral sign-up link", description: "Use the provider link on this page to retain the submitted referral ID." },
      { title: "Join with GitHub", description: "GitHub registration is enabled; password-based registration is currently disabled in the public configuration." },
      { title: "Check your balance and create an API key", description: "Confirm the starter credit in your account, then choose a model from the pricing page before connecting your client." },
    ],
    conditions: [
      "The $100 amount and its expiry are not published in the public configuration.",
      "Daily check-in is currently disabled, so this listing describes a starter offer only.",
    ],
    sourceNote: "Registration methods and check-in status are provider-confirmed. The $100 reward comes from the community submission.",
    sources: [
      { label: "FreeGG sign-up", url: "https://freegg.app/sign-up?aff=pCLT" },
      { label: "Public gateway configuration", url: "https://freegg.app/api/status" },
    ],
  },
  {
    id: "hcnsec",
    provider: "HCNSEC API",
    title: "Free Chinese model APIs",
    description: "Try GLM, DeepSeek, Qwen, and more with starter credit and daily check-ins.",
    category: "Text & chat",
    amount: "Free API credit",
    rewardLabel: "Sign-up + daily check-in",
    requirement: "New account",
    refresh: "Daily check-in",
    access: "OpenAI-compatible API",
    tone: "orange",
    mark: "HN",
    url: "https://api.hcnsec.cn/sign-up?aff=TIO2",
    verification: "confirmed",
    checkedAt,
    benefits: [
      "The provider advertises free credit for new registrations and ongoing daily check-in rewards.",
      "One API key can access the supported Chinese model families through an OpenAI-compatible format.",
      "The public page lists Claude Code, Cursor, Codex, GitHub Copilot, ChatBox, and Cherry Studio as supported tools.",
    ],
    models: ["GLM", "DeepSeek", "Qwen", "Kimi", "Step", "MiniMax"],
    modelNote: "These model families are listed on the provider's public page. Exact versions, available routes, and reward amounts are shown in the account or documentation.",
    steps: [
      { title: "Create an account", description: "Open the supplied sign-up link and complete the provider's registration process." },
      { title: "Claim the starter credit and check in", description: "Check the initial balance, then use the account's daily check-in feature for additional credit." },
      { title: "Connect a supported tool", description: "Create an API key and use the provider's documented endpoint and model ID in your client.", link: { label: "Provider documentation", url: "https://api.hcnsec.cn/free-api/" } },
    ],
    conditions: [
      "The public page confirms free access but does not state a fixed dollar or token amount.",
      "Model versions and daily rewards depend on the provider's current gateway settings.",
    ],
    sourceNote: "The free starter credit, daily check-ins, supported model families, and client compatibility are described on the official public page. The documentation link did not load during this check.",
    sources: [{ label: "HCNSEC public offer page", url: "https://api.hcnsec.cn/" }],
    docsUrl: "https://api.hcnsec.cn/free-api/",
  },
  {
    id: "vyceai",
    provider: "Vyce AI",
    title: "Referral credit + daily login",
    description: "One API for Claude, GPT, DeepSeek, and more, with a confirmed referral starter balance.",
    category: "Developer APIs",
    amount: "$50 credit",
    rewardLabel: "+ $10 daily, community-reported",
    requirement: "New account + referral",
    refresh: "Reported daily login reward",
    access: "Multi-provider API proxy",
    tone: "violet",
    mark: "V",
    url: "https://vyceai.com/signup?ref=VYCE_SU74QS",
    verification: "partial",
    checkedAt,
    benefits: [
      "The official sign-up form offers $40 as the standard starter balance and $50 with a referral code.",
      "The referral form says the new user receives $50 and the referrer receives $10.",
      "A further $10 daily login reward is included in the community submission, but is not confirmed on the public sign-up page.",
    ],
    models: ["Claude", "GPT", "DeepSeek", "GLM", "MiniMax", "Qwen"],
    modelNote: "Vyce's public homepage lists these providers and advertises more than 20 models. Check the dashboard for the currently available model IDs.",
    steps: [
      { title: "Open the referral sign-up page", description: "Keep referral code VYCE_SU74QS in the form to qualify for the displayed $50 starter balance." },
      { title: "Create your account", description: "Enter your name, email, and password. The provider may review new accounts or request additional verification." },
      { title: "Use the balance in the dashboard", description: "Confirm the credited amount, create an API key, and check whether the daily login reward is available to your account." },
    ],
    conditions: [
      "Disposable email addresses are blocked. Multiple accounts and trial-balance abuse are prohibited by the sign-up form.",
      "The public form does not publish a credit expiry date or confirm the reported daily reward.",
    ],
    sourceNote: "The $50 referral balance and model providers are confirmed on the official site. The $10 daily amount remains community-reported.",
    sources: [
      { label: "Vyce referral sign-up", url: "https://vyceai.com/signup?ref=VYCE_SU74QS" },
      { label: "Vyce model providers", url: "https://vyceai.com/" },
    ],
  },
  {
    id: "agentrouter",
    provider: "Agent Router",
    title: "Coding credits + daily login",
    description: "Free API access for coding tools, with a confirmed $25 daily check-in reward.",
    category: "Developer APIs",
    amount: "$150 credit",
    rewardLabel: "Reported starter + $25 daily",
    requirement: "Account + supported coding tool",
    refresh: "$25 daily check-in",
    access: "OpenAI & Anthropic-compatible API",
    tone: "green",
    mark: "AR",
    url: "https://agentrouter.org/register?aff=xUOT",
    verification: "partial",
    checkedAt,
    featured: 2,
    benefits: [
      "The community offer reports $150 in starter credit through the referral link.",
      "The provider's public FAQ confirms $25 in daily check-in credit. It says to log out and log back in to activate the reward.",
      "Official integration guides cover Claude Code, Codex, OpenCode, Cline, Roo Code, and other coding tools.",
    ],
    models: ["GPT-5.6 Sol", "GPT-6 Astra", "Claude Opus 5", "Claude Opus 4.8", "GLM 5.3", "DeepSeek V4 Flash"],
    modelNote: "These models are listed in the integration guide. The provider changes availability as resources fluctuate; GPT and Claude routes may have shared supply limits.",
    apiBase: "https://agentrouter.org/v1",
    docsUrl: "https://agentrouter.org/docs/",
    steps: [
      { title: "Join through the referral link", description: "Create an account using one of the available sign-in methods, then check the starter balance." },
      { title: "Collect your daily credit", description: "Log out and log back in as directed by the provider's FAQ to activate the $25 daily check-in reward." },
      { title: "Create a token and connect your coding tool", description: "Use an official integration guide. OpenAI-compatible tools use a /v1 base URL; Anthropic clients use the root URL without /v1.", link: { label: "Read the setup guides", url: "https://agentrouter.org/docs/" } },
    ],
    conditions: [
      "The $150 starter amount is community-reported; the $25 daily reward is provider-confirmed.",
      "This gateway is intended for supported coding clients. Unsupported or non-coding use can change your account's usage multiplier.",
      "A depleted shared model pool can return HTTP 402. The provider recommends waiting for the next release or choosing DeepSeek or GLM.",
    ],
    sourceNote: "Daily rewards, client support, and supply limits are confirmed in the public FAQ and documentation. The starter-credit amount is supplied by the community.",
    sources: [
      { label: "Official FAQ and announcements", url: "https://agentrouter.org/api/status" },
      { label: "Model and client setup guide", url: "https://agentrouter.org/docs/claude-code.html" },
    ],
  },
  {
    id: "wusrouter",
    provider: "WusRouter",
    title: "Gift code + daily quota",
    description: "An OpenAI-compatible gateway with a shared gift code and free daily quota.",
    category: "Developer APIs",
    amount: "Gift code + free quota",
    rewardLabel: "Community code included",
    requirement: "Account + code redemption",
    refresh: "Daily quota; streak reported",
    access: "OpenAI-compatible API & playground",
    tone: "blue",
    mark: "WR",
    url: "https://wusrouter.com/",
    verification: "partial",
    checkedAt,
    code: "WR-RCHwf-Bb1XX-FqZE",
    apiBase: "https://wusrouter.com/v1",
    docsUrl: "https://wusrouter.com/docs",
    benefits: [
      "The homepage advertises free daily quota for the gateway.",
      "The submitted gift code can be tried in the account's gift-code or redemption area. Its value and remaining redemptions are not public.",
      "The official guide supports custom OpenAI-compatible clients and API keys with configurable quotas and expiration.",
    ],
    models: ["GPT", "Claude", "DeepSeek", "Gemini", "Qwen", "GLM"],
    modelNote: "The homepage lists these families and the setup guide gives example model IDs. Free eligibility varies by route and account, so choose a model from the current library.",
    steps: [
      { title: "Open WusRouter and sign in", description: "Use the dashboard or playground to access your account." },
      { title: "Redeem the shared gift code", description: "Find the account's gift-code redemption area and enter WR-RCHwf-Bb1XX-FqZE. Check the resulting allowance and available daily rewards." },
      { title: "Create an API key", description: "Generate a key in API Keys, set your client's base URL to https://wusrouter.com/v1, and select an available model.", link: { label: "Open the quick-start guide", url: "https://wusrouter.com/docs" } },
    ],
    conditions: [
      "The gift code and daily-streak claim are community-submitted. Code validity, value, and redemption limits have not been independently confirmed.",
      "The model library includes paid routes as well as free ones. Review the selected route's price and eligibility.",
    ],
    sourceNote: "The daily-quota promotion and integration details are provider-confirmed. The redemption code comes from the community.",
    sources: [
      { label: "WusRouter homepage", url: "https://wusrouter.com/" },
      { label: "WusRouter quick start", url: "https://wusrouter.com/docs" },
      { label: "Current model library", url: "https://wusrouter.com/models" },
    ],
  },
  {
    id: "synterolink",
    provider: "Synterolink",
    title: "Starter API credit",
    description: "A small starter balance for exploring a unified Claude and GPT gateway.",
    category: "Developer APIs",
    amount: "$10 credit",
    rewardLabel: "Reported starter balance",
    requirement: "New account",
    refresh: "One-time starter credit",
    access: "API gateway with key-scoped models",
    tone: "slate",
    mark: "S",
    url: "https://synterolink.com/",
    verification: "partial",
    checkedAt,
    benefits: [
      "The community submission reports a $10 starter balance after registration.",
      "The public catalogue currently lists 24 model identifiers across Anthropic and OpenAI.",
      "The gateway includes API-key management, quota controls, and usage tracking in one console.",
    ],
    models: ["Claude Fable 5", "Claude Fable 5.1", "Claude Opus", "Claude Sonnet", "GPT-5.4", "GPT-5.5", "GPT-6 Astra"],
    modelNote: "These names come from the live public catalogue. Your callable models also depend on your API key, group permissions, and service health.",
    steps: [
      { title: "Create your account", description: "Register with email and a password, or use the available GitHub or Google sign-in.", link: { label: "Open registration", url: "https://synterolink.com/register" } },
      { title: "Check the starter balance", description: "Confirm whether the reported $10 credit has been applied and review any account-specific conditions." },
      { title: "Create a key and choose a model", description: "Use the console to create a key, confirm its model scope, and copy the endpoint shown in your account." },
    ],
    conditions: [
      "The public registration page does not confirm the $10 amount or an expiry date.",
      "A model appearing in the public catalogue does not guarantee access for every key or account group.",
    ],
    sourceNote: "Model identifiers, registration options, and gateway features were checked on the official site. The starter balance is community-reported.",
    sources: [
      { label: "Live gateway and model catalogue", url: "https://synterolink.com/" },
      { label: "Registration requirements", url: "https://synterolink.com/register" },
    ],
  },
  {
    id: "qronos",
    provider: "Qronos AI",
    title: "Starter tokens + daily rewards",
    description: "10 million free starter tokens for open models, plus a daily UTC check-in reward.",
    category: "Developer APIs",
    amount: "10 million tokens",
    rewardLabel: "+ up to $0.10 daily",
    requirement: "Free account; no card",
    refresh: "Daily UTC check-in",
    access: "Anthropic-compatible LLM gateway",
    tone: "green",
    mark: "Q",
    url: "https://qronos.me/signup?aff=pns6",
    verification: "confirmed",
    checkedAt,
    docsUrl: "https://qronos.me/docs",
    benefits: [
      "The official Starter plan is $0 and includes a 10-million-token grant.",
      "Daily UTC check-ins can award up to $0.10. The plan explicitly requires no credit card.",
      "Starter access includes verified open-weight models and GLM, standard throughput, and community support.",
    ],
    models: ["GLM", "Verified open-weight models"],
    modelNote: "The free plan covers open routes and GLM. The wider catalogue also includes Claude, GPT, DeepSeek, Qwen, and other providers, but premium routes are described under paid plans.",
    steps: [
      { title: "Create a free Qronos account", description: "Use the provider link and choose Starter. A card is not required." },
      { title: "Check your token grant and daily reward", description: "Confirm the 10 million starter tokens, then use the daily check-in feature. The provider uses UTC for the daily schedule." },
      { title: "Connect an eligible model", description: "Create an API key and follow the Messages API or client setup documentation. Choose a model included in Starter.", link: { label: "Qronos documentation", url: "https://qronos.me/docs" } },
    ],
    conditions: [
      "The daily amount is advertised as up to $0.10, not a guaranteed fixed $0.10.",
      "Starter uses a shared key pool with standard throughput. Its token grant should not be treated as access to every paid model.",
    ],
    sourceNote: "The 10-million-token grant, daily reward ceiling, no-card requirement, and Starter model scope are confirmed on the official pricing page.",
    sources: [
      { label: "Qronos Starter plan", url: "https://qronos.me/pricing" },
      { label: "Gateway features", url: "https://qronos.me/" },
    ],
  },
  {
    id: "tokenharbor",
    provider: "Token Harbor",
    title: "Free rolling API allowance",
    description: "Try DeepSeek and MiMo with a free allowance that resets every seven days.",
    category: "Developer APIs",
    amount: "Free weekly allowance",
    rewardLabel: "No card needed",
    requirement: "Free account; no card",
    refresh: "Rolling 7-day reset",
    access: "OpenAI-compatible API & web chat",
    tone: "orange",
    mark: "TH",
    url: "https://tokenharbor.ai/pricing",
    verification: "confirmed",
    checkedAt,
    featured: 3,
    apiBase: "https://tokenharbor.ai/v1",
    docsUrl: "https://tokenharbor.ai/docs/getting-started/quickstart",
    benefits: [
      "The $0 Free plan includes a rotating model allowance that resets on a rolling seven-day period.",
      "DeepSeek V4.1 Flash and MiMo V2.6 Flash are listed in the current free lineup.",
      "The free allowance is separate from the wallet, which starts at $0. Model IDs ending in :free do not charge the wallet balance.",
    ],
    models: ["DeepSeek V4.1 Flash", "MiMo V2.6 Flash"],
    modelNote: "These are the free-tier models on the current pricing page. Additional promotional models may be added over time; copy the exact :free model ID from the live catalogue.",
    steps: [
      { title: "Create a free account", description: "Choose Start free on the pricing page. No payment card is needed." },
      { title: "Enable free models and copy your key", description: "Review and enable the free-model access in your dashboard, then copy the Universal Key when it is shown." },
      { title: "Use a free model route", description: "Set the base URL to https://tokenharbor.ai/v1 and choose an eligible model ID ending in :free.", link: { label: "Read the quick start", url: "https://tokenharbor.ai/docs/getting-started/quickstart" } },
    ],
    conditions: [
      "Free accounts allow 60 requests per minute and 1,800 per hour per account, with a 4 MB request-size limit.",
      "The pricing page does not publish a fixed token amount for the rolling free allowance.",
      "Free-route prompts may be retained and reviewed under the free-model policy. That policy is separate from paid-route handling.",
      "The Black Friday $0.99-for-12-months Agent Pass promotion is sold out. Regular Agent Pass is a paid subscription, not part of this free offer.",
    ],
    sourceNote: "Free-tier models, reset rules, no-card access, and API limits are confirmed by the official pricing and documentation pages.",
    sources: [
      { label: "Official free-tier pricing", url: "https://tokenharbor.ai/pricing" },
      { label: "Free-account rate limits", url: "https://tokenharbor.ai/docs/api/rate-limits" },
      { label: "Account and API quick start", url: "https://tokenharbor.ai/docs/getting-started/quickstart" },
    ],
  },
  {
    id: "xingchi",
    provider: "Xingchi API",
    title: "Daily login reward",
    description: "A multi-model gateway with a community-reported reward for daily logins.",
    category: "Developer APIs",
    amount: "Daily login reward",
    rewardLabel: "Amount shown in your account",
    requirement: "Account + daily login",
    refresh: "Daily, community-reported",
    access: "Multi-provider API gateway",
    tone: "blue",
    mark: "XC",
    url: "https://xingchiapi.com/dashboard",
    verification: "partial",
    checkedAt,
    benefits: [
      "The submitted offer describes a daily login reward in the dashboard.",
      "The public gateway supports one API key for multiple model providers and automatic upstream failover.",
      "The provider advertises usage-based billing, quota limits, and visible consumption tracking.",
    ],
    models: ["Claude", "GPT", "Gemini", "Antigravity"],
    modelNote: "These providers are listed publicly. Exact model versions and which routes qualify for the reward are account-dependent.",
    steps: [
      { title: "Open the dashboard", description: "Sign in or complete the provider's account registration." },
      { title: "Find the daily reward", description: "Look for the login or check-in reward, then confirm the amount and reset time shown for your account." },
      { title: "Create a key and check model eligibility", description: "Copy the endpoint and key from the dashboard, and review the selected model's price before making a request." },
    ],
    conditions: [
      "The public homepage does not confirm the daily reward's amount, expiry, or reset timezone.",
      "Supported model families do not establish that every model is free or eligible for a login reward.",
    ],
    sourceNote: "Gateway features and model providers are confirmed on the public homepage. The daily login reward is community-reported.",
    sources: [
      { label: "Xingchi gateway homepage", url: "https://xingchiapi.com/" },
      { label: "Account dashboard", url: "https://xingchiapi.com/dashboard" },
    ],
  },
  {
    id: "layso",
    provider: "LAYSO",
    title: "Free model activities",
    description: "Try featured models using a free activity key and a shared token allowance.",
    category: "Multimodal",
    amount: "Free model access",
    rewardLabel: "Allowance varies by activity",
    requirement: "Account + eligible activity",
    refresh: "Per-activity dates and limits",
    access: "Chat, image, video & audio API",
    tone: "green",
    mark: "L",
    url: "https://layso.ai/activities",
    verification: "confirmed",
    checkedAt,
    docsUrl: "https://docs.laysoai.com",
    benefits: [
      "Eligible calls with a key bound to a free activity cost 0 and do not deduct the ordinary platform balance.",
      "Each activity has a designated model and a token pool shared by participants, with visible used and remaining amounts.",
      "Activity calls stop when the activity ends, pauses, or reaches a limit. They do not automatically switch to paid calls.",
    ],
    models: ["Chat", "Image", "Video", "Audio"],
    modelNote: "The platform supports these modalities, but each free activity covers only its designated model. The paid catalogue lists Claude Fable 5, GPT Image 2, GPT-5.6, Grok 4.6, GPT-6.1 Sol, and Seedream 5.5; those listings do not establish current free eligibility.",
    steps: [
      { title: "Choose an available activity", description: "Check its designated model, dates, remaining shared allowance, and participation requirements.", link: { label: "See current activities", url: "https://layso.ai/activities" } },
      { title: "Bind an activity key", description: "Sign in and create or bind the fixed key for that activity. Follow any eligibility conditions shown on the activity page." },
      { title: "Use the exact activity model", description: "Connect your tool with the activity key, displayed API address, and matching model ID. Send a small test request and monitor the remaining allowance." },
    ],
    conditions: [
      "Each account binds one fixed key per activity. That key is for the activity's designated model only.",
      "Account request limits, token limits, and reset periods are activity-specific. Some activities may require a top-up to qualify.",
      "A published programme does not guarantee an activity is currently open or has remaining tokens.",
    ],
    sourceNote: "The free-activity rules, shared pools, key requirements, and stop-without-paid-fallback behaviour are confirmed by the official programme guide.",
    sources: [
      { label: "Free activity rules and eligibility", url: "https://layso.ai/blog/model-offers" },
      { label: "Current free activities", url: "https://layso.ai/activities" },
    ],
  },
  {
    id: "budsin",
    provider: "BudsAI",
    title: "Free web & MCP access",
    description: "A documented free tier for web chat and MCP, with daily check-in enabled on the API panel.",
    category: "Developer APIs",
    amount: "60 requests / day",
    rewardLabel: "Free web & MCP tier",
    requirement: "Account + panel API key",
    refresh: "15 per hour; 60 per day",
    access: "Web chat, MCP & separate API panel",
    tone: "orange",
    mark: "B",
    url: "https://apichat.budsin.dev/sign-up?aff=P3o7",
    verification: "partial",
    checkedAt,
    apiBase: "https://apichat.budsin.dev/v1",
    docsUrl: "https://chat.budsin.dev/docs.html",
    benefits: [
      "The documentation lists a Free tier with 15 requests per hour and 60 per day for BudsAI web and MCP use.",
      "The API panel is the source of account keys, balance, and billing. Its public configuration has daily check-in enabled.",
      "The MCP server exposes model discovery and model-generation tools through a Streamable HTTP endpoint.",
    ],
    models: ["Text models", "Image-capable models", "Tool-calling models"],
    modelNote: "Use model discovery to check the models available to your key and tier. The documentation's example models are not a guaranteed free-tier catalogue.",
    steps: [
      { title: "Join the API panel", description: "The public configuration enables GitHub registration. Create an account, then check its balance and daily check-in options." },
      { title: "Create a panel key", description: "Generate a token at apichat.budsin.dev. The supplied offer does not specify a fixed sign-up credit amount." },
      { title: "Choose web, MCP, or the panel API", description: "Use https://chat.budsin.dev/mcp for MCP, or https://apichat.budsin.dev/v1 for the REST API. The old chat.budsin.dev/v1 REST endpoint is retired.", link: { label: "Read BudsAI's current API notes", url: "https://chat.budsin.dev/docs.html" } },
    ],
    conditions: [
      "The 60-per-day figure describes the documented web/MCP Free tier. API-panel credit billing and model permissions are separate.",
      "The community sign-up offer does not specify a credit amount. Daily check-in being enabled does not establish its reward value.",
      "The documentation retains older code examples, so use the current panel API base URL stated at the top of the guide.",
    ],
    sourceNote: "The free-tier request limits and current endpoint split are provider-documented. Check-in is enabled in the public panel configuration; a numeric sign-up credit has not been published.",
    sources: [
      { label: "BudsAI documentation and free-tier limits", url: "https://chat.budsin.dev/docs.html" },
      { label: "Public API-panel configuration", url: "https://apichat.budsin.dev/api/status" },
    ],
  },
  {
    id: "seekai",
    provider: "SeekAI",
    title: "Starter credit + daily check-in",
    description: "A community-reported starter balance with daily check-in enabled on the gateway.",
    category: "Developer APIs",
    amount: "$200 credit",
    rewardLabel: "+ daily check-in",
    requirement: "Account + email verification",
    refresh: "Daily check-in enabled",
    access: "API gateway & playground",
    tone: "violet",
    mark: "SK",
    url: "https://seekai.cc/sign-up?aff=WS3w",
    verification: "partial",
    checkedAt,
    benefits: [
      "The community submission reports $200 in starter credit through the referral sign-up link.",
      "The public configuration confirms registration and daily check-in are enabled.",
      "The gateway supports API-key integrations such as Cherry Studio, DeepChat, and other compatible clients.",
    ],
    models: [],
    modelNote: "The Model Square requires authentication. Sign in to confirm the current model list and which models your starter balance can cover.",
    steps: [
      { title: "Register using the supplied link", description: "Create an account and complete email verification if using email registration. GitHub and Telegram sign-in are also enabled." },
      { title: "Check your starter balance and daily check-in", description: "Confirm the reported $200 balance and inspect the daily reward amount and account-specific rules." },
      { title: "Choose a model and create a key", description: "Review Model Square while signed in, then copy your key and endpoint into a compatible client." },
    ],
    conditions: [
      "The $200 starter value, credit expiry, and daily reward amount are not confirmed by the public configuration.",
      "Email verification and a browser challenge are enabled for registration.",
    ],
    sourceNote: "Account requirements and check-in availability are provider-confirmed. The $200 starter balance remains community-reported.",
    sources: [
      { label: "SeekAI sign-up", url: "https://seekai.cc/sign-up?aff=WS3w" },
      { label: "Public gateway configuration", url: "https://seekai.cc/api/status" },
    ],
  },
  {
    id: "muse",
    provider: "Muse from Meta",
    title: "1 billion free Muse tokens",
    description: "Try a personal AI agent with a shared invite code. Redeem within 48 hours of joining.",
    category: "AI agents",
    amount: "1 billion tokens",
    rewardLabel: "Community invite reward",
    requirement: "New Muse account",
    refresh: "One-time invite reward",
    access: "Web, iOS & Android",
    tone: "violet",
    mark: "m",
    url: "https://muse.ai/join",
    verification: "partial",
    checkedAt,
    featured: 1,
    code: "JDRVEQ",
    deadline: "Within 48 hours of joining",
    notice: {
      title: "Redeem within 48 hours",
      description: "The submitted invite guide says to enter JDRVEQ within 48 hours of creating your Muse account. After successful redemption, you and the inviter each receive 1 billion Muse tokens.",
    },
    benefits: [
      "The shared invitation offers 1 billion Muse tokens to both the new user and the inviter after successful redemption.",
      "Muse is Meta's personal AI agent for tasks such as email, calendars, research, shopping, and planning.",
      "The official site describes a persistent cloud computer for each user and access through web and mobile apps.",
    ],
    models: ["Muse personal AI agent"],
    modelNote: "Muse's public pages describe the agent and its capabilities, but do not publish a separate model catalogue for this invitation. The tokens in the submitted offer are Muse tokens.",
    steps: [
      {
        title: "Get a US IP address",
        items: [
          "Install Proton VPN (free) and create a free account.",
          "Keep switching between free servers until you get a US server. Use the app's Change server option.",
          "Proton assigns free servers randomly and has a cooldown between changes, so wait for its countdown before switching again.",
        ],
        link: { label: "Get Proton VPN", url: "https://protonvpn.com/download" },
      },
      {
        title: "Create a Muse account",
        items: [
          "Visit https://muse.ai/join.",
          "Sign up using a temporary Gmail account, as described in the submitted guide.",
        ],
        link: { label: "Join Muse", url: "https://muse.ai/join" },
      },
      {
        title: "Redeem JDRVEQ",
        items: [
          "Once your account is created, open Settings.",
          "Go to General and find Redeem Code.",
          "Enter JDRVEQ within 48 hours of joining.",
          "After successful redemption, you and the inviter each receive 1 billion Muse tokens.",
        ],
      },
    ],
    conditions: [
      "The invitation is described as a new-user offer with a 48-hour redemption window.",
      "The US-IP and temporary Gmail steps come from the submitted guide. They are not requirements confirmed by Muse's public join page.",
      "The code, reward, and redemption window have not been independently redeemed or verified.",
    ],
    sourceNote: "The reward and redemption guide are community-submitted. Muse's product and supported platforms are confirmed on its official site; Proton's free-server switching behaviour is confirmed in its support guide.",
    sources: [
      { label: "Official Muse join page", url: "https://muse.ai/join" },
      { label: "Muse's features and agent access", url: "https://muse.ai/" },
      { label: "Proton free-server switching guide", url: "https://protonvpn.com/support/change-server-free-plan" },
    ],
  },
];

export const categories: { name: OfferCategory; description: string; icon: "code" | "chat" | "sparkles" | "layers" }[] = [
  { name: "Developer APIs", description: "Credits and gateways for your next build.", icon: "code" },
  { name: "Text & chat", description: "Language models, chat, and assistants.", icon: "chat" },
  { name: "AI agents", description: "An extra pair of hands for everyday tasks.", icon: "sparkles" },
  { name: "Multimodal", description: "Explore text, images, video, and audio.", icon: "layers" },
];

export const featuredOffers = offers
  .filter((offer) => offer.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);

export const recentOffers = ["qronos", "vyceai", "layso", "hcnsec"]
  .map((id) => offers.find((offer) => offer.id === id)!)
  .sort((a, b) => b.checkedAt.localeCompare(a.checkedAt));

export const getOffer = (id: string) => offers.find((offer) => offer.id === id);

export function formatCheckedDate(date: string, includeYear = true) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    ...(includeYear ? { year: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
