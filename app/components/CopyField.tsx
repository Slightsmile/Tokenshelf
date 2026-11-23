"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => { setCopied(false); setMessage(""); }, 2500);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setMessage(`${label} copied.`);
    } catch {
      setMessage("Select the text below to copy it manually.");
    }
  }

  return <div className="copy-field"><span className="field-label">{label}</span><div><code>{value}</code><button type="button" className="copy-button" onClick={copy} aria-label={`Copy ${label.toLowerCase()}`}><Icon name={copied ? "check" : "copy"} />{copied ? "Copied" : "Copy"}</button></div><span className={`copy-feedback${message ? " visible" : ""}`} role="status">{message}</span></div>;
}
