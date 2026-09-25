"use client";

import type { ReactNode } from "react";
import { useAuditModal } from "./audit-modal-context";

export function AuditCtaButton({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const { open } = useAuditModal();
  return (
    <button type="button" onClick={open} className={className}>
      {children}
    </button>
  );
}
