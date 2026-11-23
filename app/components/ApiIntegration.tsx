import type { Offer } from "../../lib/offers";
import CopyField from "./CopyField";
import Icon from "./Icon";

function buildInstruction(offer: Offer, envLines: string[]) {
  const integration = offer.integration!;
  const lines: string[] = [
    `Connect the ${offer.provider} API to the tool I am using.`,
    "",
    `Provider: ${offer.provider}`,
  ];

  if (integration.openaiBase) lines.push(`OpenAI-compatible base URL: ${integration.openaiBase}`);
  if (integration.anthropicBase) lines.push(`Anthropic-compatible base URL: ${integration.anthropicBase}`);
  if (integration.modelsEndpoint) lines.push(`Model discovery endpoint: ${integration.modelsEndpoint}`);
  const docs = integration.keyUrl ?? offer.docsUrl;
  if (docs) lines.push(`Provider docs: ${docs}`);
  if (offer.models.length) lines.push(`Known model IDs from this listing: ${offer.models.join(", ")}`);

  if (envLines.length) {
    lines.push("", "Environment variables:", ...envLines);
  }

  lines.push(
    "",
    "Do this:",
    "1. Discover the available model IDs by calling the model discovery endpoint with my API key.",
    "2. Configure the tool with the base URL that matches the protocol it supports.",
    "3. Use a model ID returned by the endpoint.",
    "4. Read the key from an environment variable; never hardcode it.",
    "5. Tell me which setting or file you changed, and ask before guessing any value that is missing.",
  );

  return lines.join("\n");
}

export default function ApiIntegration({ offer }: { offer: Offer }) {
  const integration = offer.integration;
  if (!integration) return null;

  const openai = integration.openaiBase;
  const anthropic = integration.anthropicBase;
  const modelsEndpoint = integration.modelsEndpoint;
  const modelsUrl = integration.modelsUrl ?? offer.modelsUrl;
  const docsUrl = integration.keyUrl ?? offer.docsUrl;

  const protocols = [
    openai ? "OpenAI-compatible" : "",
    anthropic ? "Anthropic-compatible" : "",
  ].filter(Boolean);

  const envLines: string[] = [];
  if (openai) envLines.push("- OpenAI-compatible: OPENAI_BASE_URL, OPENAI_API_KEY");
  if (anthropic) envLines.push("- Anthropic-compatible: ANTHROPIC_BASE_URL, ANTHROPIC_API_KEY or ANTHROPIC_AUTH_TOKEN");

  const curl = modelsEndpoint
    ? `curl ${modelsEndpoint} \\\n  -H "Authorization: Bearer $API_KEY"`
    : "";

  return (
    <section aria-labelledby="integration-title">
      <div className="detail-section-heading">
        <h2 id="integration-title">API integration</h2>
        <span>{protocols.join(" & ")}</span>
      </div>
      <p className="integration-intro">
        Use {offer.provider} from any compatible IDE, CLI, terminal, or agent. Point the tool at one base URL, paste your key, and let it discover the available models. You only need one base URL per tool.
      </p>

      <div className="integration-base">
        {openai && (
          <div className="integration-base-item">
            <CopyField label="OpenAI-compatible base URL" value={openai} />
            <p>Use this when a tool asks for an OpenAI base URL, endpoint, or API proxy.</p>
          </div>
        )}
        {anthropic && (
          <div className="integration-base-item">
            <CopyField label="Anthropic-compatible base URL" value={anthropic} />
            <p>Use this root URL, without <code>/v1</code>, for Anthropic Messages clients such as Claude Code.</p>
          </div>
        )}
      </div>

      {modelsEndpoint && (
        <div className="integration-discover">
          <h3 className="integration-subhead">Find models automatically</h3>
          <p className="integration-copy">Tools that support model discovery fill their model picker from this endpoint. To list the IDs yourself, send the request below with your key.</p>
          <CopyField label="Model discovery request" value={curl} />
          {modelsUrl && (
            <a className="inline-link" href={modelsUrl} target="_blank" rel="noopener noreferrer">
              View the live model list<Icon name="external" />
            </a>
          )}
        </div>
      )}

      <h3 className="integration-subhead">Connect your IDE, CLI, or agent</h3>
      <dl className="integration-targets">
        <div>
          <dt>IDEs</dt>
          <dd>
            <ul>
              {openai && <li><strong>Cursor:</strong> add an OpenAI API key, then set the OpenAI base URL override to <code>{openai}</code>.</li>}
              {openai && <li><strong>VS Code (Cline, Roo Code, Continue):</strong> choose the OpenAI-compatible provider, then paste <code>{openai}</code> as the base URL and add your key.</li>}
              {openai && <li><strong>Windsurf, JetBrains AI, and similar tools:</strong> use a custom OpenAI endpoint with <code>{openai}</code>.</li>}
              {anthropic && <li><strong>Claude Code in an IDE:</strong> use the Anthropic base URL <code>{anthropic}</code> instead.</li>}
            </ul>
          </dd>
        </div>
        <div>
          <dt>CLI &amp; terminal</dt>
          <dd>
            <ul>
              {openai && <li><strong>Codex CLI and OpenAI-compatible CLIs:</strong> export <code>OPENAI_BASE_URL={openai}</code> and <code>OPENAI_API_KEY=your-key</code> before launching the tool.</li>}
              {anthropic && <li><strong>Claude Code:</strong> export <code>ANTHROPIC_BASE_URL={anthropic}</code> and <code>ANTHROPIC_AUTH_TOKEN=your-key</code>.</li>}
              {openai && <li><strong>OpenCode, Aider, and similar:</strong> set the OpenAI-compatible provider base URL to <code>{openai}</code> in the tool's config.</li>}
              {openai && <li><strong>Plain terminal:</strong> send requests to <code>{openai}/chat/completions</code> with an <code>Authorization: Bearer</code> header.</li>}
            </ul>
          </dd>
        </div>
        <div>
          <dt>AI agents</dt>
          <dd>
            <ul>
              {openai && <li><strong>OpenAI SDKs:</strong> set <code>base_url=&quot;{openai}&quot;</code> and use a model ID from the discovery call.</li>}
              {anthropic && <li><strong>Anthropic SDKs:</strong> set <code>base_url=&quot;{anthropic}&quot;</code> and use a model ID from the discovery call.</li>}
              <li><strong>Agent frameworks and MCP hosts:</strong> point the model provider at the matching base URL, then pick a discovered model ID.</li>
            </ul>
          </dd>
        </div>
      </dl>

      {integration.notes && integration.notes.length > 0 && (
        <ul className="integration-notes">
          {integration.notes.map((note) => <li key={note}>{note}</li>)}
        </ul>
      )}

      <div className="integration-ai">
        <h3 className="integration-subhead">Give this instruction to your AI</h3>
        <p className="integration-copy">Paste this into the AI that is configuring your tool. It carries the provider details and asks the AI to discover models before changing any settings.</p>
        <CopyField label="AI setup instruction" value={buildInstruction(offer, envLines)} />
        {docsUrl && (
          <a className="inline-link" href={docsUrl} target="_blank" rel="noopener noreferrer">
            Provider documentation<Icon name="external" />
          </a>
        )}
      </div>
    </section>
  );
}
