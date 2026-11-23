"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Icon from "../components/Icon";
import PageShell from "../components/PageShell";

const formEndpoint = "https://formspree.io/f/xlgqpkwg";

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const readyHeading = useRef<HTMLHeadingElement>(null);

  useEffect(() => { if (submitted) readyHeading.current?.focus(); }, [submitted]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    const data = new FormData(event.currentTarget);
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) {
        setError("Your offer couldn’t be submitted. Please try again in a moment.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("We couldn’t connect. Check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <PageShell title="Share a good find." intro="Found a free offer? Send us the details so someone else can try it.">
      <div className="submission-layout">
        {submitted ? (
          <section className="submission-ready">
            <span className="ready-icon"><Icon name="check" /></span>
            <h2 ref={readyHeading} tabIndex={-1}>Thanks for sharing!</h2>
            <p>Your offer has been submitted for review.</p>
            <div className="submission-actions"><button className="button button-secondary" type="button" onClick={() => setSubmitted(false)}>Submit another offer<Icon name="arrow" /></button></div>
          </section>
        ) : (
          <form className="offer-form" action={formEndpoint} method="post" onSubmit={submit} aria-busy={submitting}>
            <div className="form-grid">
              <label>Offer name<input required name="title" maxLength={160} placeholder="e.g. Free starter API credits" /></label>
              <label>Provider<input required name="provider" maxLength={100} placeholder="e.g. Qronos AI" /></label>
            </div>
            <label>Provider or offer link<input required name="url" type="url" placeholder="https://" /></label>
            <div className="form-grid">
              <label>What’s free?<input required name="amount" maxLength={160} placeholder="e.g. 10 million tokens" /></label>
              <label>Invite or redeem code <span className="optional">(optional)</span><input name="code" maxLength={100} placeholder="If the offer needs one" /></label>
            </div>
            <label>How do you claim it?<textarea required name="instructions" maxLength={5000} placeholder="Include the claim steps, requirements, limits, and any expiry date." rows={5} /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="form-submit">
              <button className="button" type="submit" disabled={submitting}>{submitting ? "Submitting…" : "Submit an offer"}<Icon name="arrow" /></button>
              <p role="status">{submitting ? "Sending your offer…" : "We’ll review the details before adding your offer."}</p>
            </div>
          </form>
        )}
        <aside className="submission-tips"><h2>The useful details</h2><ul><li>The free amount and what it can be used for.</li><li>Who can claim it and how to get started.</li><li>Any code, deadline, daily limit, or reset schedule.</li><li>A provider page or documentation link.</li></ul></aside>
      </div>
    </PageShell>
  );
}
