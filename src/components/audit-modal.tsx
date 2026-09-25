"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { SITE_CONFIG } from "@/lib/site-config";
import { useAuditModal } from "./audit-modal-context";

const WEB3FORMS_ACCESS_KEY = process.env["NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY"] ?? "";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const FOCUSABLE = 'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])';

export function AuditModal() {
  const { isOpen, close } = useAuditModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    lastFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // The name field only exists once the form is wired up. Fall back to the
    // dialog itself so focus always lands somewhere inside it on open.
    (firstFieldRef.current ?? dialogRef.current)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocused.current?.focus();
    };
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 py-10"
      role="presentation"
    >
      <div
        aria-hidden="true"
        className="fixed inset-0 bg-obsidian/80 backdrop-blur-sm"
        onClick={close}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-heading"
        tabIndex={-1}
        className="relative w-full max-w-lg rounded-[13px] bg-gradient-to-br from-frost/15 via-frost/5 to-transparent p-px shadow-[0_30px_80px_-25px_rgba(0,0,0,0.7)] outline-none"
      >
        <div className="rounded-[12px] bg-basalt p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-ash">free audit</p>
              <h2
                id="audit-modal-heading"
                className="mt-2 font-display text-2xl font-semibold text-frost"
              >
                Tell us about your business.
              </h2>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="shrink-0 rounded-md p-1 text-ash transition-colors hover:text-frost"
            >
              <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
                <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Mounted only while the modal is open, so its state starts fresh every time. */}
          <AuditModalBody firstFieldRef={firstFieldRef} onClose={close} />
        </div>
      </div>
    </div>
  );
}

type SubmitState = "idle" | "submitting" | "success" | "error";

function AuditModalBody({
  firstFieldRef,
  onClose,
}: {
  firstFieldRef: React.RefObject<HTMLInputElement | null>;
  onClose: () => void;
}) {
  const [state, setState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!WEB3FORMS_ACCESS_KEY) {
    return (
      <div className="mt-6">
        <p className="text-sm leading-relaxed text-ash">
          The form is not wired up yet. Email us directly and we will get back to you.
        </p>
        <a
          href={`mailto:${SITE_CONFIG.email}?subject=Free%20audit%20request`}
          className="mt-4 inline-block rounded-md bg-ember px-5 py-2.5 text-sm font-medium text-obsidian transition-colors duration-200 hover:bg-ember-dark"
        >
          Email {SITE_CONFIG.email}
        </a>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="mt-6">
        <p className="text-base leading-relaxed text-frost">
          Got it. We will look at your site and follow up shortly.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 rounded-md bg-ember px-5 py-2.5 text-sm font-medium text-obsidian transition-colors duration-200 hover:bg-ember-dark"
        >
          Close
        </button>
      </div>
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if ((new FormData(form).get("botcheck") as string)?.length) {
      // Honeypot tripped, quietly pretend it worked.
      setState("success");
      return;
    }
    setState("submitting");
    setErrorMessage("");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (res.ok && data.success) {
        setState("success");
      } else {
        setState("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setState("error");
      setErrorMessage("Could not reach the form service. Check your connection and try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <input type="hidden" name="subject" value="Free audit request from the Skald website" />
      <input type="hidden" name="from_name" value="Skald website" />
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field ref={firstFieldRef} label="Name" name="name" type="text" required autoComplete="name" />
      <Field label="Email" name="email" type="email" required autoComplete="email" />
      <Field label="Business name" name="business" type="text" required autoComplete="organization" />
      <Field label="Website (if you have one)" name="website" type="text" autoComplete="url" />
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-xs text-ash">What do you need help with</span>
        <textarea
          name="message"
          rows={3}
          className="rounded-md border border-slate bg-obsidian px-3 py-2 text-sm text-frost outline-none placeholder:text-ash/60 focus-visible:border-ember"
          placeholder="Optional"
        />
      </label>

      {state === "error" && (
        <p role="alert" className="text-sm text-ember">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-2 rounded-md bg-ember px-5 py-2.5 text-sm font-medium text-obsidian transition-colors duration-200 hover:bg-ember-dark disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send it over"}
      </button>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  ref,
}: FieldProps & { ref?: React.Ref<HTMLInputElement> }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-mono text-xs text-ash">
        {label}
        {required ? "" : " (optional)"}
      </span>
      <input
        ref={ref}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="rounded-md border border-slate bg-obsidian px-3 py-2 text-sm text-frost outline-none placeholder:text-ash/60 focus-visible:border-ember"
      />
    </label>
  );
}
