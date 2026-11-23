import type { Metadata } from "next";
import CopyField from "../components/CopyField";
import PageShell from "../components/PageShell";

export const metadata: Metadata = { title: "API integration docs" };

const discovery = `curl "$BASE_URL/models" \\\n  -H "Authorization: Bearer $API_KEY"`;

const aiInstruction = [
  "Connect the API I use to the tool I am configuring.",
  "",
  "Tool: [IDE, CLI, or agent name]",
  "Protocol: [OpenAI-compatible or Anthropic-compatible]",
  "Base URL: [paste the provider's base URL]",
  "API key env var: [e.g. OPENAI_API_KEY or ANTHROPIC_AUTH_TOKEN]",
  "",
  "Do this:",
  "1. Discover the available model IDs using the provider's models endpoint (usually GET [base URL]/models).",
  "2. Configure the tool with the base URL that matches its protocol.",
  "3. Choose a model ID returned by that call.",
  "4. Read the key from an environment variable; never hardcode it.",
  "5. Tell me which file or setting you changed, and ask before guessing any missing value.",
].join("\n");

export default function IntegrationPage() {
  return (
    <PageShell
      eyebrow="Developer docs"
      title="Connect any compatible provider."
      intro="These steps work with any OpenAI- or Anthropic-compatible API. Point the tool at the provider's base URL, paste a key, and let it discover models."
    >
      <section className="docs-steps" aria-labelledby="docs-steps-title">
        <h2 id="docs-steps-title">Three things every tool needs</h2>
        <ol>
          <li><strong>An API key</strong> from your provider's dashboard.</li>
          <li><strong>A base URL</strong> that matches the protocol the tool expects.</li>
          <li><strong>A model ID</strong> from the provider's model list.</li>
        </ol>
      </section>

      <section className="docs-section" aria-labelledby="docs-base-title">
        <h2 id="docs-base-title">Pick the right base URL</h2>
        <p className="integration-copy">Use the OpenAI-compatible URL for most IDEs, CLIs, and agents. Use the Anthropic-compatible URL only when a tool explicitly asks for Anthropic Messages.</p>
        <div className="docs-code-grid">
          <div>
            <span className="protocol-chip">OpenAI-compatible</span>
            <pre className="docs-code"><code>https://&lt;provider-host&gt;/v1</code></pre>
            <p>Most providers end in <code>/v1</code>. The client adds <code>/chat/completions</code> for you.</p>
          </div>
          <div>
            <span className="protocol-chip">Anthropic-compatible</span>
            <pre className="docs-code"><code>https://&lt;provider-host&gt;</code></pre>
            <p>Usually the root URL without <code>/v1</code>. Use the exact value from the provider's docs.</p>
          </div>
        </div>
        <ul className="integration-notes">
          <li>Do not include <code>/chat/completions</code> or <code>/messages</code> in the base URL.</li>
          <li>If the provider publishes a separate compatibility URL, use that instead of guessing.</li>
          <li>Keep keys in environment variables or the tool's secret store, never in a commit.</li>
        </ul>
      </section>

      <section className="docs-section" aria-labelledby="docs-models-title">
        <h2 id="docs-models-title">Find models automatically</h2>
        <p className="integration-copy">Most tools fetch the model list once you enter the base URL and key. If yours does not, run this with your key:</p>
        <CopyField label="Model discovery" value={discovery} />
        <p className="integration-copy">Use an <code>id</code> from the response. If the provider does not expose <code>/models</code>, copy an exact model ID from its model page.</p>
      </section>

      <section className="docs-section" aria-labelledby="docs-tools-title">
        <h2 id="docs-tools-title">Connect your tool</h2>
        <p className="integration-copy">The setting names differ, but every tool below needs the same three values.</p>
        <dl className="integration-targets">
          <div>
            <dt>IDEs</dt>
            <dd>
              <ul>
                <li><strong>Cursor:</strong> open Settings, go to Models, add an OpenAI API key, then set the OpenAI base URL override.</li>
                <li><strong>VS Code (Cline, Roo Code, Kilo Code, Continue):</strong> choose the OpenAI-compatible or Anthropic provider, paste the base URL and key, then fetch models.</li>
                <li><strong>Windsurf:</strong> add a custom OpenAI provider and set the base URL.</li>
                <li><strong>JetBrains AI and Zed:</strong> add a custom OpenAI provider or endpoint.</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt>CLI &amp; terminal</dt>
            <dd>
              <ul>
                <li><strong>Claude Code (Anthropic):</strong> export <code>ANTHROPIC_BASE_URL</code> and <code>ANTHROPIC_AUTH_TOKEN</code> before launching.</li>
                <li><strong>Codex CLI (OpenAI):</strong> export <code>OPENAI_BASE_URL</code> and <code>OPENAI_API_KEY</code> before launching.</li>
                <li><strong>OpenCode, Aider, Goose:</strong> set the OpenAI-compatible base URL in the tool's provider config.</li>
                <li><strong>curl:</strong> POST to <code>$BASE_URL/chat/completions</code> with an <code>Authorization: Bearer</code> header.</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt>AI agents</dt>
            <dd>
              <ul>
                <li><strong>OpenAI SDKs:</strong> create the client with <code>baseURL</code> and <code>apiKey</code>.</li>
                <li><strong>Anthropic SDKs:</strong> create the client with <code>baseURL</code> and <code>apiKey</code>.</li>
                <li><strong>LangChain, LlamaIndex, CrewAI, AutoGen:</strong> use their OpenAI-compatible connector and override the base URL.</li>
                <li><strong>MCP hosts and custom agents:</strong> point the model provider at the base URL and use a discovered model ID.</li>
              </ul>
            </dd>
          </div>
        </dl>
      </section>

      <section className="docs-section" aria-labelledby="docs-env-title">
        <h2 id="docs-env-title">Environment variables</h2>
        <p className="integration-copy">These names are widely used. Some tools expect <code>ANTHROPIC_API_KEY</code> instead of <code>ANTHROPIC_AUTH_TOKEN</code>; either works when the provider accepts a bearer token.</p>
        <CopyField label="OpenAI-compatible" value={"OPENAI_BASE_URL=https://<provider-host>/v1\nOPENAI_API_KEY=your-key"} />
        <CopyField label="Anthropic-compatible" value={"ANTHROPIC_BASE_URL=https://<provider-host>\nANTHROPIC_AUTH_TOKEN=your-key"} />
      </section>

      <section className="docs-section" aria-labelledby="docs-ai-title">
        <h2 id="docs-ai-title">Give this to your AI</h2>
        <p className="integration-copy">Paste this into the AI that is configuring your tool. Fill in the four bracketed values and it will make the changes for you.</p>
        <CopyField label="AI setup instruction" value={aiInstruction} />
      </section>

      <section className="docs-note" aria-labelledby="docs-note-title">
        <h2 id="docs-note-title">What it works with</h2>
        <p>Most current coding tools speak one of these two protocols. If a tool accepts an OpenAI base URL, an OpenAI-compatible provider works. If it asks for an Anthropic base URL or Anthropic Messages, use an Anthropic-compatible provider.</p>
        <p>When a tool lists models itself, enter the base URL and key first, then use its refresh or fetch action. When it does not, use the model discovery request above and paste a returned ID.</p>
      </section>
    </PageShell>
  );
}
