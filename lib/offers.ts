import type { ModelFamily } from "./model-families";

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
  dailyLogin?: boolean;
  access: string;
  tone: "blue" | "violet" | "green" | "orange" | "slate";
  mark: string;
  url: string;
  verification: Verification;
  checkedAt: string;
  benefits: string[];
  models: string[];
  modelFamilies?: ModelFamily[];
  modelNote: string;
  steps: ClaimStep[];
  conditions: string[];
  sourceNote: string;
  sources: { label: string; url: string }[];
  apiBase?: string;
  docsUrl?: string;
  modelsUrl?: string;
  availability?: "offline";
  code?: string;
  codeLabel?: string;
  deadline?: string;
  notice?: { title: string; description: string };
  featured?: number;
};

const checkedAt = "2026-11-23";

const offerEntries: Offer[] = [
  {
    id: "mlai",
    provider: "ML.ai",
    title: "30-day Infinite coding-agent trial",
    description: "Try ML.ai's coding tools free for 30 days with a card on file. Unlimited own-model usage; Opus 5.5 and GPT 6.1 SOL are community-listed.",
    category: "AI agents",
    amount: "30 days free",
    rewardLabel: "Card required · tool-only access",
    requirement: "New account + payment card",
    refresh: "One free 30-day trial per person",
    access: "ML.ai tools; no standalone model API in this offer",
    tone: "violet",
    mark: "ML",
    url: "https://ml.ai/",
    verification: "partial",
    checkedAt: "2026-11-24",
    docsUrl: "https://ml.ai/docs",
    notice: {
      title: "Card required; check the current model allowance",
      description: "The first 30 days are free, then the plan becomes paid unless you cancel. Current pricing makes ML.ai's own models unlimited and lists 50 trial credits for other models. The submitted unlimited-credit claim for Opus 5.5 and GPT 6.1 SOL is not confirmed by those terms.",
    },
    benefits: [
      "The official site confirms an Infinite trial with the first 30 days free and a payment card required.",
      "Current public pricing includes unlimited usage of ML.ai's own models and cloud build time with no hourly limit.",
      "The community submission lists Opus 5.5 and GPT 6.1 SOL, unlimited credits for 30 days, unlimited cloud CPU hours, two parallel sessions, and all modes.",
      "The submission also lists CLI access, API-key features, Computer Use, and 600 PR reviews per month. These specific allowances are not confirmed on the public pricing page; the homepage currently lists the CLI as coming in December.",
      "Use the promotion inside ML.ai's own coding tools. This listing does not include standalone model API access.",
    ],
    models: ["Claude Opus 5.5", "GPT 6.1 SOL"],
    modelNote: "These two model names come from the community submission. Current public pricing distinguishes unlimited ML.ai models from other models using frontier credits, with 50 credits for other models in the trial. Check which models and allowances your account actually includes.",
    steps: [
      { title: "Open ML.ai and choose the free month", description: "Visit ML.ai and select the 30-day Infinite trial. Review the current plan, model allowances, and supported tools before starting.", link: { label: "View the ML.ai trial", url: "https://ml.ai/" } },
      { title: "Create an account and add a card", description: "Register and add the payment card required for the trial. The official site says nothing is charged for the first 30 days.", link: { label: "Start the Infinite trial", url: "https://code.ml.ai/start?plan=infinite" } },
      { title: "Use the included ML.ai tools", description: "Open ML.ai's workspace or supported app and check the model selector for Opus 5.5 and GPT 6.1 SOL. Review your cloud sessions, Computer Use, and PR-review allowances in the account; this is tool access rather than a free standalone model API.", link: { label: "Read the tool documentation", url: "https://ml.ai/docs" } },
      { title: "Manage the trial before it ends", description: "Cancel from Settings before the free month ends if you do not want a paid subscription. The advertised opening price is $50 per month for three months, then $99 per month." },
    ],
    conditions: [
      "A payment card is required for the 30-day trial. It becomes a paid subscription unless cancelled before the trial ends.",
      "The official pricing page limits the free month to one per person and lists 50 trial credits for models other than ML.ai's own unlimited models.",
      "The submitted two-session limit, 600 monthly PR reviews, Computer Use, API-key features, and named frontier models are community-reported; review the current account entitlements.",
      "The homepage currently marks the CLI and Windows desktop app as coming in December, so the submission's CLI access should not be assumed available today.",
      "A card-free Free Forever plan is mentioned in the community submission, but the public pricing page currently advertises Infinite and Enterprise. Check whether the free option is still offered and what limits apply.",
      "This offer is for ML.ai's own tools; it is not a free standalone API-credit promotion. ML.ai's separately advertised Inference product is outside this trial listing.",
    ],
    sourceNote: "The 30-day trial, card requirement, renewal pricing, unlimited own-model usage, and 50-credit frontier-model allowance were checked on ML.ai's public pages. Model names, two parallel sessions, Computer Use, 600 monthly PR reviews, API-key features, and the Free Forever option come from the community submission. Public pages currently list the CLI as coming in December.",
    sources: [
      { label: "Official ML.ai trial and tools", url: "https://ml.ai/" },
      { label: "Current pricing and trial allowances", url: "https://ml.ai/pricing" },
      { label: "Infinite trial signup", url: "https://code.ml.ai/start?plan=infinite" },
      { label: "ML.ai tool documentation", url: "https://ml.ai/docs" },
    ],
  },
  {
    id: "clixad",
    provider: "Clixad",
    title: "Invite bonus + daily credits and surveys",
    description: "25,000 credits on sign-up through the invite link, 300 credits for daily login, and 10,000 credits per completed survey.",
    category: "Text & chat",
    amount: "25,000 credits",
    rewardLabel: "+ 300 daily · 10,000 per survey",
    requirement: "New account through the invite link",
    refresh: "Daily login + daily surveys, community-reported",
    dailyLogin: true,
    access: "Multi-model AI access",
    tone: "blue",
    mark: "CX",
    url: "https://app.clixad.io/account?invite=C8WNRV44",
    verification: "community",
    checkedAt: "2026-11-24",
    code: "C8WNRV44",
    codeLabel: "Invite code",
    benefits: [
      "The submitted offer lists a 25,000-credit bonus when you join through the supplied invite link.",
      "Log in each day to receive 300 free credits.",
      "The submission describes free surveys arriving daily, with 10,000 credits for each completed survey.",
      "Use credits with the seven model routes listed in the submission.",
    ],
    models: ["deepseek-v4-flash", "claude-haiku-5.5", "gemini-2.5-flash-lite", "gpt-5-nano", "gemini-3.5-flash-lite", "glm-5.3-flash", "kimi-k2.5"],
    modelNote: "These exact model IDs come from the community submission. Check the current model list in your Clixad account for availability and credit costs.",
    steps: [
      { title: "Join through the invite link", description: "Open the full invitation URL with C8WNRV44 applied, create your account, and check for the 25,000-credit bonus.", link: { label: "Join Clixad with the invitation", url: "https://app.clixad.io/account?invite=C8WNRV44" } },
      { title: "Collect your daily login credits", description: "Log in each day and check your account for the 300-credit daily reward." },
      { title: "Complete available free surveys", description: "Check your account for the daily surveys described in the submission. Complete an available survey and check for its 10,000-credit reward." },
      { title: "Choose a supported model", description: "Select one of the listed model routes and review its credit cost before using your balance." },
    ],
    conditions: [
      "The 25,000-credit sign-up bonus is described as an invitation offer; use the supplied link when joining.",
      "Daily login rewards, daily survey availability, and the 10,000-credit survey reward are community-reported.",
      "The submission does not specify credit expiry, daily reset time, survey eligibility, or the number of surveys available per account.",
    ],
    sourceNote: "The invite link, reward amounts, daily survey information, and model IDs were supplied in a community submission. They have not been independently verified.",
    sources: [
      { label: "Clixad account invitation", url: "https://app.clixad.io/account?invite=C8WNRV44" },
    ],
  },
  {
    id: "freegg",
    provider: "FreeGG",
    title: "GPT-6.1 Sol credits + daily login",
    description: "$100 in sign-up credit and $20 daily for the gateway's only listed model, gpt-6.1-sol.",
    category: "Text & chat",
    amount: "$100 credit",
    rewardLabel: "+ $20 daily",
    requirement: "GitHub sign-up",
    refresh: "$20 daily login credit",
    dailyLogin: true,
    access: "API gateway",
    tone: "blue",
    mark: "FG",
    url: "https://freegg.app/sign-up?aff=pCLT",
    verification: "partial",
    checkedAt,
    benefits: [
      "$100 in free API credit on sign-up through the supplied referral link.",
      "$20 in additional daily credit, according to the latest community update.",
      "The current pricing catalogue lists gpt-6.1-sol as the only available model.",
    ],
    models: ["gpt-6.1-sol"],
    modelNote: "Only gpt-6.1-sol is currently listed in FreeGG's pricing catalogue. Use that exact model ID when configuring your client.",
    modelsUrl: "https://freegg.app/pricing",
    steps: [
      { title: "Join through the referral link", description: "Open the supplied sign-up link, register with GitHub, and check your $100 starter balance." },
      { title: "Collect the daily $20 credit", description: "Sign in each day and check the daily reward and updated balance in your account.", link: { label: "Open the dashboard", url: "https://freegg.app/dashboard" } },
      { title: "Create a key for gpt-6.1-sol", description: "Generate an API key and select gpt-6.1-sol. The pricing page currently lists no other model routes.", link: { label: "See current model pricing", url: "https://freegg.app/pricing" } },
    ],
    conditions: [
      "The sign-up and daily rewards are API credit balances; consumption follows the selected model's pricing.",
      "The daily reset time and credit expiry are not specified in the submitted update.",
    ],
    sourceNote: "The single available model and GitHub registration were checked against the provider's pricing and public configuration. The $100 sign-up and $20 daily amounts come from the latest community update.",
    sources: [
      { label: "FreeGG sign-up", url: "https://freegg.app/sign-up?aff=pCLT" },
      { label: "Current model pricing", url: "https://freegg.app/pricing" },
      { label: "Public gateway configuration", url: "https://freegg.app/api/status" },
    ],
  },
  {
    id: "hcnsec",
    provider: "HCNSEC API",
    title: "Free Chinese model APIs",
    description: "A ¥29,200 sign-up bonus for Chinese model APIs, with daily sign-in rewards for WeChat users.",
    category: "Text & chat",
    amount: "¥29,200 credit",
    rewardLabel: "Daily sign-in with WeChat",
    requirement: "Account; WeChat for daily rewards",
    refresh: "Daily sign-in with WeChat",
    dailyLogin: true,
    access: "OpenAI-compatible API",
    tone: "orange",
    mark: "HN",
    url: "https://api.hcnsec.cn/sign-up?aff=TIO2",
    verification: "partial",
    checkedAt,
    benefits: [
      "The latest community update lists a ¥29,200 sign-up bonus.",
      "Daily sign-in is available when you have a WeChat account.",
      "One API key can access the supported Chinese model families through an OpenAI-compatible format.",
      "The public page lists Claude Code, Cursor, Codex, GitHub Copilot, ChatBox, and Cherry Studio as supported tools.",
    ],
    models: ["DeepSeek-V4.1-Flash", "glm-5.3", "glm-5.3-flash", "kimi-k3", "kimi-k3.1-pro", "MiniMax-M3.1-Flash", "Qwen3-Embedding-8B", "Qwen3.6-35B-A3B", "Qwen3.8-27B", "Qwen3.8-Flash-Next"],
    modelNote: "These routes were visible on the current pricing page. The complete catalogue also includes other text, multimodal, and audio models; copy each exact model ID and rate from the provider.",
    modelsUrl: "https://api.hcnsec.cn/pricing",
    steps: [
      { title: "Create an account and check the bonus", description: "Register through the supplied sign-up link and check the ¥29,200 starter credit in your account." },
      { title: "Use WeChat for daily sign-in", description: "A WeChat account is needed for the daily reward. Follow the provider's WeChat sign-in or verification flow.", link: { label: "Open the reward dashboard", url: "https://api.hcnsec.cn/dashboard" } },
      { title: "Choose a model and connect your client", description: "Create an API key, check the model's rate, and use the provider's documented endpoint in your tool.", link: { label: "Browse available models", url: "https://api.hcnsec.cn/pricing" } },
    ],
    conditions: [
      "The sign-up allowance is denominated in yuan (¥), so compare usage against the provider's yuan-denominated model prices.",
      "WeChat is required for the daily sign-in workflow described in the community update.",
      "Model versions and daily rewards depend on the provider's current gateway settings.",
    ],
    sourceNote: "Model routes and client compatibility were checked on the official site. The ¥29,200 sign-up amount and WeChat requirement for daily rewards come from the latest community update.",
    sources: [
      { label: "HCNSEC public offer page", url: "https://api.hcnsec.cn/" },
      { label: "Current models and pricing", url: "https://api.hcnsec.cn/pricing" },
    ],
    docsUrl: "https://api.hcnsec.cn/free-api/",
  },
  {
    id: "vyceai",
    provider: "Vyce AI",
    title: "Referral credit + daily login",
    description: "Referral API credit for GLM 5.3 Flash, Nemotron, GPT-OSS, and Wave.",
    category: "Developer APIs",
    amount: "$50 credit",
    rewardLabel: "+ $10 daily, community-reported",
    requirement: "New account + referral",
    refresh: "Reported daily login reward",
    dailyLogin: true,
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
    models: ["GLM 5.3 Flash", "nemotron-3.5-super-vl", "gpt-oss-120b", "wave"],
    modelNote: "The latest community availability update lists these models. Check Vyce's dashboard for their exact route IDs and current prices.",
    steps: [
      { title: "Open the referral sign-up page", description: "Keep referral code VYCE_SU74QS in the form to qualify for the displayed $50 starter balance." },
      { title: "Create your account", description: "Enter your name, email, and password. The provider may review new accounts or request additional verification." },
      { title: "Use the balance in the dashboard", description: "Confirm the credited amount, create an API key, and check whether the daily login reward is available to your account." },
    ],
    conditions: [
      "Disposable email addresses are blocked. Multiple accounts and trial-balance abuse are prohibited by the sign-up form.",
      "The public form does not publish a credit expiry date or confirm the reported daily reward.",
    ],
    sourceNote: "The $50 referral balance was confirmed on the official sign-up form. The daily amount and updated GLM, Nemotron, GPT-OSS, and Wave model list are community-provided.",
    sources: [
      { label: "Vyce referral sign-up", url: "https://vyceai.com/signup?ref=VYCE_SU74QS" },
      { label: "Vyce gateway", url: "https://vyceai.com/" },
    ],
  },
  {
    id: "agentrouter",
    provider: "Agent Router",
    title: "Coding credits + daily login",
    description: "Coding API credits for gpt-6.1-sol and gpt-5.6-sol, plus a $25 daily check-in reward.",
    category: "Developer APIs",
    amount: "$150 credit",
    rewardLabel: "Reported starter + $25 daily",
    requirement: "Account + supported coding tool",
    refresh: "$25 daily check-in",
    dailyLogin: true,
    access: "OpenAI & Anthropic-compatible API",
    tone: "green",
    mark: "AR",
    url: "https://agentrouter.org/register?aff=xUOT",
    verification: "partial",
    checkedAt,
    benefits: [
      "The community offer reports $150 in starter credit through the referral link.",
      "The provider's public FAQ confirms $25 in daily check-in credit. It says to log out and log back in to activate the reward.",
      "Official integration guides cover Claude Code, Codex, OpenCode, Cline, Roo Code, and other coding tools.",
    ],
    models: ["gpt-6.1-sol", "gpt-5.6-sol"],
    modelNote: "The current pricing page lists these two GPT routes. Use the exact model IDs shown here or copy them from the provider's live pricing page.",
    modelsUrl: "https://agentrouter.org/pricing",
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
      "A depleted shared model pool can return HTTP 402. Wait for the next allocation or check the other currently listed GPT route.",
    ],
    sourceNote: "The two current GPT model IDs were confirmed on the pricing page. Daily rewards and client support are described in the provider's FAQ and documentation; the $150 starter amount is community-reported.",
    sources: [
      { label: "Current available models", url: "https://agentrouter.org/pricing" },
      { label: "Official FAQ and announcements", url: "https://agentrouter.org/api/status" },
      { label: "Model and client setup guide", url: "https://agentrouter.org/docs/claude-code.html" },
    ],
  },
  {
    id: "wusrouter",
    provider: "WusRouter",
    title: "Telegram gift codes + daily tokens",
    description: "Join WusRouter's Telegram channel and verify membership for a gift code, then collect daily token bonuses.",
    category: "Developer APIs",
    amount: "Gift codes + daily tokens",
    rewardLabel: "Join Telegram and verify",
    requirement: "Account + Telegram verification",
    refresh: "Daily sign-in token bonus",
    dailyLogin: true,
    access: "OpenAI-compatible API & playground",
    tone: "blue",
    mark: "WR",
    url: "https://wusrouter.com/",
    verification: "partial",
    checkedAt,
    apiBase: "https://wusrouter.com/v1",
    docsUrl: "https://wusrouter.com/docs",
    modelsUrl: "https://wusrouter.com/models",
    benefits: [
      "Join the official @wusrouter Telegram channel and complete WusRouter's membership verification to receive a gift code.",
      "Use Daily Sign In Token Bonus to collect the account's daily token reward.",
      "The official guide supports custom OpenAI-compatible clients and API keys with configurable quotas and expiration.",
    ],
    models: ["codex/gpt-5:free", "ws/gpt-5.6-terra:free", "zai-org/glm-5.3-flash:free", "mimo-v2.5:free", "claude-opus-5-5", "claude-sonnet-5", "deepseek-v4.1-flash", "kimi-k3.1-pro", "qwen3.8-omni-flash"],
    modelFamilies: ["chatgpt", "claude", "glm", "deepseek", "qwen", "minimax"],
    modelNote: "These are selected routes from the current model library, which includes both free and paid models. Some routes also require a plan; check the price and eligibility of the exact model you select.",
    steps: [
      { title: "Open WusRouter and sign in", description: "Use the dashboard or playground to access your account." },
      { title: "Join Telegram and verify membership", description: "Join the official @wusrouter channel, then follow the verification prompts in WusRouter to obtain your gift code.", link: { label: "Join the official Telegram channel", url: "https://t.me/wusrouter" } },
      { title: "Redeem the code and collect daily tokens", description: "Redeem the issued code in your account and use Daily Sign In Token Bonus each day. Create an API key and choose an eligible model when you are ready to use the allowance.", link: { label: "Browse current models", url: "https://wusrouter.com/models" } },
    ],
    conditions: [
      "Gift-code values and verification eligibility follow the current Telegram promotion. The update does not specify a fixed daily token amount.",
      "The model library includes paid routes as well as free ones. Review the selected route's price and eligibility.",
    ],
    sourceNote: "The official Telegram link, model routes, and integration details were checked on WusRouter. Membership verification for gift codes and the daily token-bonus workflow come from the latest community update.",
    sources: [
      { label: "Official Telegram channel", url: "https://t.me/wusrouter" },
      { label: "WusRouter homepage", url: "https://wusrouter.com/" },
      { label: "WusRouter quick start", url: "https://wusrouter.com/docs" },
      { label: "Current model library", url: "https://wusrouter.com/models" },
    ],
  },
  {
    id: "synterolink",
    provider: "Synterolink",
    title: "Email codes for API credit",
    description: "Access GPT and Claude models with redeemable dollar-credit codes sent to your email.",
    category: "Developer APIs",
    amount: "Email credit codes",
    rewardLabel: "Redeem for dollar credit",
    requirement: "Account + registered email",
    refresh: "Email code promotions",
    access: "API gateway with key-scoped models",
    tone: "slate",
    mark: "S",
    url: "https://synterolink.com/",
    verification: "partial",
    checkedAt,
    modelsUrl: "https://synterolink.com/home#models",
    benefits: [
      "Synterolink sends redeemable credit codes to your registered email, according to the latest update.",
      "Redeem a received code to add its stated dollar value to your API balance.",
      "The public catalogue includes GPT and Claude model routes.",
      "The gateway includes API-key management, quota controls, and usage tracking in one console.",
    ],
    models: ["GPT", "Claude"],
    modelNote: "The live catalogue includes GPT and Claude versions. Your exact callable routes depend on your API key, group permissions, and service health.",
    steps: [
      { title: "Create an account with a usable email", description: "Register with email, GitHub, or Google and make sure you can access the email address attached to the account.", link: { label: "Open registration", url: "https://synterolink.com/register" } },
      { title: "Check your email for a credit code", description: "Look in your registered inbox, including Promotions or Spam, for Synterolink's redeemable dollar-credit code." },
      { title: "Redeem the code and choose a model", description: "Enter the received code in the account's redemption area, confirm its credited value, then create an API key for an eligible GPT or Claude route." },
    ],
    conditions: [
      "Use the value and redemption conditions stated in the email. The update does not specify a fixed credit amount or delivery schedule.",
      "A model appearing in the public catalogue does not guarantee access for every key or account group.",
    ],
    sourceNote: "GPT and Claude routes, registration options, and gateway features were checked on the official site. The email-delivered credit-code process comes from the latest community update.",
    sources: [
      { label: "Live gateway and model catalogue", url: "https://synterolink.com/" },
      { label: "Registration requirements", url: "https://synterolink.com/register" },
    ],
  },
  {
    id: "qronos",
    provider: "Qronos AI",
    title: "Starter tokens + daily rewards",
    description: "10 million starter tokens and a random Daily Compute Claim of up to $2.00, once per UTC day.",
    category: "Developer APIs",
    amount: "10 million tokens",
    rewardLabel: "+ up to $2.00 daily",
    requirement: "Free account; no card",
    refresh: "Daily Compute Claim (UTC)",
    dailyLogin: true,
    access: "Anthropic-compatible LLM gateway",
    tone: "green",
    mark: "Q",
    url: "https://qronos.me/signup?aff=pns6",
    verification: "partial",
    checkedAt,
    docsUrl: "https://qronos.me/docs",
    modelsUrl: "https://qronos.me/models",
    benefits: [
      "The official Starter plan is $0 and includes a 10-million-token grant.",
      "Daily Compute Claim awards a random compute bonus of up to $2.00 when you check in once per UTC day.",
      "The supplied claim details say the funds are credited instantly and have no expiration.",
      "The free Starter plan requires no credit card and covers eligible open routes and GLM.",
    ],
    models: ["claude-opus-5.5", "claude-sonnet-5.5", "claude-haiku-5.5", "gpt-6-sol", "gpt-6-luna", "gpt-6-astra", "gemini-4-argon", "glm-5.3", "glm-5.3-flash", "deepseek-v4-flash", "deepseek-v4-pro", "claude-opus-5", "qwen3.8-max", "claude-fable-5.1", "kimi-k3"],
    modelNote: "These routes were visible in the current model catalogue. Model and plan eligibility vary; the Starter token grant covers eligible open routes and GLM.",
    steps: [
      { title: "Create a free Qronos account", description: "Use the provider link and choose Starter. A card is not required." },
      { title: "Use Daily Compute Claim", description: "Open Daily Compute Claim in your account and check in once per UTC day. The random bonus is up to $2.00, is credited instantly, and has no expiration." },
      { title: "Choose an eligible model", description: "Check the current model catalogue and your plan's eligibility, then create an API key and follow the client setup documentation.", link: { label: "See available models", url: "https://qronos.me/models" } },
    ],
    conditions: [
      "Daily Compute Claim is random and capped at $2.00 per claim, with one check-in per UTC day.",
      "The no-expiration statement applies to the credited Daily Compute Claim funds in the supplied update.",
      "Starter uses a shared key pool with standard throughput. Its token grant should not be treated as access to every paid model.",
    ],
    sourceNote: "The Starter token grant, no-card access, and model catalogue were checked on the official site. The updated Daily Compute Claim amount, instant crediting, and no-expiration terms come from the community-provided claim details.",
    sources: [
      { label: "Current available models", url: "https://qronos.me/models" },
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
    title: "$1,000 credit through Telegram redemption",
    description: "Redeem a personal Telegram bot code for $1,000 in credit, with a previously reported $300 daily sign-in reward. Model routes are currently offline.",
    category: "Developer APIs",
    amount: "$1,000 credit",
    rewardLabel: "+ $300 daily · Telegram redemption",
    requirement: "Telegram bot + group membership + account",
    refresh: "$300 daily sign-in + one-time code redemption",
    dailyLogin: true,
    access: "API gateway; models offline",
    tone: "blue",
    mark: "XC",
    url: "https://ln.run/PWhey",
    verification: "community",
    checkedAt: "2026-11-24",
    availability: "offline",
    notice: {
      title: "Models are currently offline",
      description: "Model routes remain offline. The redemption guide is available below, but credit in your balance does not mean model access has returned. Group membership may be needed, bot replies may be delayed, and you must use your own redemption code.",
    },
    benefits: [
      "The latest community guide reports $1,000 in credit after you complete the Telegram and account-redemption process.",
      "The supplied guide lists gpt-6-astra and gpt-6.1-sol, but model routes are still reported offline.",
      "An earlier community update reports $300 in credit for daily sign-in.",
      "The Telegram bot supplies a personal redemption code to copy into your account.",
    ],
    models: ["gpt-6-astra", "gpt-6.1-sol"],
    modelNote: "The supplied guide lists these two exact model IDs, but routes are currently offline. Check the dashboard for recovery before trying either model.",
    steps: [
      { title: "Activate the Telegram bot", description: "Start with the supplied bot link. Open the bot in Telegram and send /start inside the bot chat.", link: { label: "Start the Xingchi bot", url: "https://ln.run/PWhey" } },
      { title: "Join the Telegram group", description: "Join the linked group before redeeming your credit. The guide says the credit may not activate without group membership.", link: { label: "Join the Xingchi group", url: "https://sw.run/s7ifk" } },
      { title: "Copy your personal redemption code", description: "After sending /start, wait for the bot to send your code and copy it exactly. Replies may be delayed because the bot is under heavy load. Example codes in shared guides are placeholders, not valid codes." },
      { title: "Create an account and redeem the code", description: "Open the supplied account link, create your account, and paste the personal code from the bot into the redemption field. The guide reports that $1,000 is added to your balance after successful redemption.", link: { label: "Create an account and redeem", url: "https://sw.run/KO4By" } },
      { title: "Check model status before using your credit", description: "Model routes are still offline. Check the dashboard for recovery before selecting gpt-6-astra or gpt-6.1-sol; a credited balance does not establish that either route is working.", link: { label: "Check model status", url: "https://xingchiapi.com/dashboard" } },
    ],
    conditions: [
      "Complete the full process in order: activate the bot, send /start, join the group, copy your personal code, and redeem it in your account.",
      "Use only the redemption code issued to you by the bot. The example in the shared guide is not a working code.",
      "Bot replies may be delayed under heavy demand; wait for your personal code before continuing.",
      "The $1,000 reward and previously reported $300 daily sign-in reward are community-reported. The submission does not specify credit expiry or repeat-redemption eligibility.",
      "Model routes remain offline according to the latest status correction, even if redemption adds credit to your balance.",
    ],
    sourceNote: "The community submission supplies the $1,000 redemption guide, bot and group requirements, delay notice, and two model IDs. The latest status correction says routes are still offline; the $300 daily sign-in reward comes from an earlier community update. The group link opens Xingchi's Telegram group and the account link opens its API gateway. The bot short link could not be independently opened, and the reward has not been independently redeemed.",
    sources: [
      { label: "Supplied Telegram bot link", url: "https://ln.run/PWhey" },
      { label: "Xingchi Telegram group", url: "https://sw.run/s7ifk" },
      { label: "Account registration and redemption", url: "https://sw.run/KO4By" },
      { label: "Xingchi gateway homepage", url: "https://xingchiapi.com/" },
      { label: "Account dashboard", url: "https://xingchiapi.com/dashboard" },
    ],
  },
  {
    id: "budsin",
    provider: "BudsAI",
    title: "Sign-up credits + daily check-in",
    description: "$5–$20 in free sign-up credit, plus $1–$5 daily from the Profile check-in page.",
    category: "Developer APIs",
    amount: "$5–$20 credit",
    rewardLabel: "+ $1–$5 daily",
    requirement: "Account + Profile check-in",
    refresh: "$1–$5 daily check-in",
    dailyLogin: true,
    access: "Web chat, MCP & separate API panel",
    tone: "orange",
    mark: "B",
    url: "https://apichat.budsin.dev/sign-up?aff=P3o7",
    verification: "partial",
    checkedAt,
    apiBase: "https://apichat.budsin.dev/v1",
    docsUrl: "https://chat.budsin.dev/docs.html",
    modelsUrl: "https://apichat.budsin.dev/pricing",
    benefits: [
      "New accounts receive $5–$20 in free sign-up credit, according to the supplied update.",
      "Collect an additional $1–$5 each day using check-in on the Profile page.",
      "The API panel manages the account's keys, credit balance, model routing, and billing.",
    ],
    models: ["gpt-6.1-sol", "gpt-5.6-sol", "claude-sonnet-5.5", "claude-opus-5.5", "deepseek-v4.1-flash", "glm-5.3-flash", "minimax-m3", "gemini-4-argon", "gpt-image-2"],
    modelFamilies: ["chatgpt", "claude", "gemini", "glm", "grok", "deepseek", "qwen", "minimax", "nemotron", "mistral"],
    modelNote: "These are selected routes from the provider's current pricing catalogue. Open the full model list for additional routes, exact prices, and the models available to your account.",
    steps: [
      { title: "Join through the sign-up link", description: "Create an account with the supplied referral link and check the $5–$20 starter credit in your panel balance." },
      { title: "Check in from Profile", description: "Sign in, open Profile, and use daily check-in to collect $1–$5.", link: { label: "Open Profile for daily check-in", url: "https://apichat.budsin.dev/profile" } },
      { title: "Choose a model and create a key", description: "Check the available model list and prices, then create a panel token and use https://apichat.budsin.dev/v1 in your API client.", link: { label: "See available models", url: "https://apichat.budsin.dev/pricing" } },
    ],
    conditions: [
      "Signup and daily rewards vary within the listed ranges.",
      "Profile check-in requires an authenticated account. Model prices and account permissions determine how the credit is consumed.",
      "The panel API uses apichat.budsin.dev/v1; the older chat.budsin.dev/v1 REST endpoint is retired.",
    ],
    sourceNote: "The model IDs were checked in the provider's public pricing catalogue. The $5–$20 signup and $1–$5 daily values come from the latest community update; Profile requires sign-in to inspect or claim the reward.",
    sources: [
      { label: "Daily check-in in Profile", url: "https://apichat.budsin.dev/profile" },
      { label: "Current models and pricing", url: "https://apichat.budsin.dev/pricing" },
      { label: "Public pricing catalogue", url: "https://apichat.budsin.dev/api/pricing" },
    ],
  },
  {
    id: "seekai",
    provider: "SeekAI",
    title: "Starter credit + daily check-in",
    description: "$200 in sign-up credit and $20 daily from Profile, for claude-sonnet and MiniMax-M3.",
    category: "Developer APIs",
    amount: "$200 credit",
    rewardLabel: "+ $20 daily",
    requirement: "Account + Profile check-in",
    refresh: "$20 daily check-in",
    dailyLogin: true,
    access: "API gateway & playground",
    tone: "violet",
    mark: "SK",
    url: "https://seekai.cc/sign-up?aff=WS3w",
    verification: "partial",
    checkedAt,
    modelsUrl: "https://seekai.cc/pricing",
    benefits: [
      "$200 in sign-up credit through the supplied referral link.",
      "$20 daily credit collected by checking in from Profile.",
      "The current pricing page lists only claude-sonnet and MiniMax-M3.",
    ],
    models: ["claude-sonnet", "MiniMax-M3"],
    modelNote: "Only these two model routes are listed in the current pricing catalogue. Use the exact identifiers shown by the provider.",
    steps: [
      { title: "Register with the referral link", description: "Create an account and check the $200 signup credit. Complete email verification if your registration method requires it." },
      { title: "Collect $20 daily in Profile", description: "Open Profile from your account menu and use daily check-in.", link: { label: "Open Profile for check-in", url: "https://seekai.cc/profile" } },
      { title: "Choose claude-sonnet or MiniMax-M3", description: "Review either currently listed model, then create an API key and connect a compatible client.", link: { label: "See current model pricing", url: "https://seekai.cc/pricing" } },
    ],
    conditions: [
      "The signup and daily credit amounts come from the latest community update; check your Profile balance after claiming.",
      "Email verification and a browser challenge are enabled for registration.",
    ],
    sourceNote: "The two model IDs and Profile page link were checked on SeekAI. The $200 signup amount and $20 daily reward come from the latest community update.",
    sources: [
      { label: "SeekAI sign-up", url: "https://seekai.cc/sign-up?aff=WS3w" },
      { label: "Daily check-in in Profile", url: "https://seekai.cc/profile" },
      { label: "Current available models", url: "https://seekai.cc/pricing" },
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
  {
    id: "gwarden",
    provider: "Gwarden AI",
    title: "Daily free API limit",
    description: "A community-reported $6 daily free limit for an AI gateway with web and Telegram access.",
    category: "Developer APIs",
    amount: "$6 daily limit",
    rewardLabel: "Community-reported free allowance",
    requirement: "Account via Telegram or website",
    refresh: "Daily limit, community-reported",
    access: "OpenAI, Anthropic & Responses APIs",
    tone: "green",
    mark: "GW",
    url: "https://gwarden.su/cabinet?ref=ZSPLFME01U",
    verification: "partial",
    checkedAt,
    apiBase: "https://gwarden.su/v1",
    modelsUrl: "https://gwarden.su/",
    benefits: [
      "The submitted offer lists a $6 daily free API limit.",
      "The official website advertises a $6 starter balance and a 7-day free trial after signing in.",
      "One API key supports OpenAI-compatible chat, Anthropic Messages, and the Responses API for coding tools and agents.",
    ],
    models: ["Claude", "GPT", "Gemini", "DeepSeek", "Grok", "Kimi", "GLM"],
    modelNote: "The public catalogue includes these model families. It also advertises DeepSeek V4.1 Flash 1017 and Gemini 4 Argon as zero-price promotional routes for a limited time. Check the current catalogue for exact model IDs, prices, and eligibility.",
    steps: [
      { title: "Start Gwarden in Telegram", description: "Open the supplied Telegram referral link and press Start to access Gwarden AI.", link: { label: "Open the Telegram referral", url: "https://t.me/GwardenAgent?start=ref_ZSPLFME01U" } },
      { title: "Open your Cabinet with the referral link", description: "Use the web referral link, sign in through the provider's Telegram or code flow, and check the free allowance, trial window, and reset schedule shown for your account.", link: { label: "Open your Cabinet", url: "https://gwarden.su/cabinet?ref=ZSPLFME01U" } },
      { title: "Connect an eligible model", description: "Copy your API key from the Cabinet and use https://gwarden.su/v1 in a compatible client. Select an eligible model and monitor the daily free limit in your account.", link: { label: "View the model catalogue", url: "https://gwarden.su/" } },
    ],
    conditions: [
      "The $6 daily limit is community-reported. The public website describes a 7-day starter trial, so check the Cabinet for your account's current free-access terms.",
      "The provider describes plan limits replenishing every five hours. Your account's actual free-limit and reset rules should be checked separately from the reported daily amount.",
      "The catalogue includes free and paid routes; zero-price model promotions are advertised as limited-time offers.",
    ],
    sourceNote: "Both referral links were checked on their public pages. API compatibility, the $6 starter balance, and the 7-day trial are published by Gwarden. The $6 daily free-limit claim comes from the community submission.",
    sources: [
      { label: "Web Cabinet referral", url: "https://gwarden.su/cabinet?ref=ZSPLFME01U" },
      { label: "Telegram bot referral", url: "https://t.me/GwardenAgent?start=ref_ZSPLFME01U" },
      { label: "Official gateway, models, and trial terms", url: "https://gwarden.su/" },
    ],
  },
  {
    id: "wajo",
    provider: "Wajo",
    title: "Free OG Fo invite",
    description: "A free Muse alternative. The invite-only OG Fo plan includes unlimited tasks and call time.",
    category: "AI agents",
    amount: "Free OG Fo access",
    rewardLabel: "Unlimited tasks & call time",
    requirement: "Invite-only account",
    refresh: "OG Fo has no daily task limit",
    access: "Fo personal action agent",
    tone: "orange",
    mark: "W",
    url: "https://wajo.ai/join?code=GT7YYCVS&utm_source=referral&utm_medium=invite_link",
    verification: "confirmed",
    checkedAt,
    code: "GT7YYCVS",
    codeLabel: "Invite code",
    notice: {
      title: "OG Fo is invite-only",
      description: "Use the provided invitation while a spot is available. The join page applies GT7YYCVS and currently offers access without a waitlist.",
    },
    benefits: [
      "The public pricing page lists OG Fo as free and invite-only, with unlimited tasks and unlimited call time.",
      "OG Fo also includes group chats with Fo and access to Fo from other AI tools.",
      "Fo can make calls, send emails, and book appointments, with human help for tasks that need it.",
    ],
    models: ["Fo personal action agent"],
    modelNote: "Wajo describes Fo's agent capabilities rather than publishing an underlying model catalogue for this invitation. It is an AI-agent alternative to Muse.",
    steps: [
      { title: "Open the provided invitation", description: "Use the full referral link so invite code GT7YYCVS and its tracking parameters are retained.", link: { label: "Claim the OG Fo invitation", url: "https://wajo.ai/join?code=GT7YYCVS&utm_source=referral&utm_medium=invite_link" } },
      { title: "Claim your spot", description: "The join page offers Google, Microsoft, Apple, or email registration. Complete registration with the invitation already applied." },
      { title: "Start using OG Fo", description: "Confirm your account is on the invite-only OG Fo plan, then give Fo a task such as making a call, arranging an appointment, or managing an email conversation." },
    ],
    conditions: [
      "OG Fo requires an invitation. The supplied update describes limited invite availability; no remaining-invite count or fixed expiry is published.",
      "The free Mini plan has a daily task limit. The public pricing page describes the invited OG Fo plan as having unlimited tasks and call time.",
    ],
    sourceNote: "The provided join page confirms GT7YYCVS is applied and identifies OG Fo as invite-only. Free pricing, unlimited tasks, and call time are confirmed on Wajo's public pricing section.",
    sources: [
      { label: "OG Fo referral invitation", url: "https://wajo.ai/join?code=GT7YYCVS&utm_source=referral&utm_medium=invite_link" },
      { label: "Fo features and free plan pricing", url: "https://wajo.ai/" },
    ],
  },
];

export const featuredOfferOrder = ["seekai", "freegg", "muse", "hcnsec", "qronos", "vyceai", "agentrouter", "wusrouter", "synterolink", "wajo", "tokenharbor"];

export function compareOffers(a: Offer, b: Offer) {
  return Number(a.id === "xingchi") - Number(b.id === "xingchi") || (a.featured ?? Number.MAX_SAFE_INTEGER) - (b.featured ?? Number.MAX_SAFE_INTEGER) || b.checkedAt.localeCompare(a.checkedAt) || a.provider.localeCompare(b.provider);
}

const featuredRanks = new Map(featuredOfferOrder.map((id, index) => [id, index + 1] as const));
export const offers: Offer[] = offerEntries.map((offer) => ({ ...offer, featured: featuredRanks.get(offer.id) })).sort(compareOffers);

export const categories: { name: OfferCategory; description: string; icon: "code" | "chat" | "sparkles" | "layers" }[] = [
  { name: "Developer APIs", description: "Credits and gateways for your next build.", icon: "code" },
  { name: "Text & chat", description: "Language models, chat, and assistants.", icon: "chat" },
  { name: "AI agents", description: "An extra pair of hands for everyday tasks.", icon: "sparkles" },
  { name: "Multimodal", description: "Explore text, images, video, and audio.", icon: "layers" },
];

export const featuredOffers = offers
  .filter((offer) => offer.featured !== undefined)
  .sort((a, b) => a.featured! - b.featured!);

export const otherOffers = offers.filter((offer) => offer.featured === undefined);

export const getOffer = (id: string) => offers.find((offer) => offer.id === id);

export function formatCheckedDate(date: string, includeYear = true) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    ...(includeYear ? { year: "numeric" as const } : {}),
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
