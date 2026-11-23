"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import CopyField from "../components/CopyField";
import Icon from "../components/Icon";
import PageShell from "../components/PageShell";

type Submission = { title: string; provider: string; url: string; amount: string; instructions: string; code: string };

export default function SubmitPage() {
  const [draft, setDraft] = useState<Submission | null>(null);
  const [prepared, setPrepared] = useState(false);
  const readyHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => { if (prepared) readyHeading.current?.focus(); }, [prepared]);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setDraft({ title: String(data.get("title")).trim(), provider: String(data.get("provider")).trim(), url: String(data.get("url")).trim(), amount: String(data.get("amount")).trim(), instructions: String(data.get("instructions")).trim(), code: String(data.get("code") ?? "").trim() });
    setPrepared(true);
  }

  const submission = draft ? `${draft.title}\nProvider: ${draft.provider}\nLink: ${draft.url}\nFree access: ${draft.amount}${draft.code ? `\nInvite / redeem code: ${draft.code}` : ""}\n\nHow to claim:\n${draft.instructions}\n` : "";

  function download() {
    if (!draft) return;
    const url = URL.createObjectURL(new Blob([submission], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `tokenshelf-${draft.provider.toLowerCase().replace(/[^a-z0-9]+/g, "-") || "offer"}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <PageShell title="Share a good find." intro="Found a free offer? Put the details together so someone else can try it.">
      <div className="submission-layout">
        {prepared && draft ? <section className="submission-ready"><span className="ready-icon"><Icon name="check" /></span><h2 ref={readyHeading} tabIndex={-1}>Your submission is ready</h2><p>Copy the details or download a shareable file.</p><CopyField label="Submission" value={submission} /><div className="submission-actions"><button className="button" type="button" onClick={download}>Download submission<Icon name="arrow" /></button><button className="button button-secondary" type="button" onClick={() => setPrepared(false)}>Edit details</button></div><p className="form-note">Prepared in your browser for you to share.</p></section> : <form className="offer-form" onSubmit={prepare}><div className="form-grid"><label>Offer name<input required name="title" maxLength={160} defaultValue={draft?.title} placeholder="e.g. Free starter API credits" /></label><label>Provider<input required name="provider" maxLength={100} defaultValue={draft?.provider} placeholder="e.g. Qronos AI" /></label></div><label>Provider or offer link<input required name="url" type="url" defaultValue={draft?.url} placeholder="https://" /></label><div className="form-grid"><label>What’s free?<input required name="amount" maxLength={160} defaultValue={draft?.amount} placeholder="e.g. 10 million tokens" /></label><label>Invite or redeem code <span className="optional">(optional)</span><input name="code" maxLength={100} defaultValue={draft?.code} placeholder="If the offer needs one" /></label></div><label>How do you claim it?<textarea required name="instructions" maxLength={5000} defaultValue={draft?.instructions} placeholder="Include the claim steps, requirements, limits, and any expiry date." rows={5} /></label><div className="form-submit"><button className="button" type="submit">Prepare submission<Icon name="arrow" /></button><p>This form prepares a shareable submission in your browser.</p></div></form>}
        <aside className="submission-tips"><h2>The useful details</h2><ul><li>The free amount and what it can be used for.</li><li>Who can claim it and how to get started.</li><li>Any code, deadline, daily limit, or reset schedule.</li><li>A provider page or documentation link.</li></ul></aside>
      </div>
    </PageShell>
  );
}
