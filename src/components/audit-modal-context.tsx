"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface AuditModalContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const AuditModalContext = createContext<AuditModalContextValue | null>(null);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <AuditModalContext.Provider value={value}>
      {children}
    </AuditModalContext.Provider>
  );
}

export function useAuditModal(): AuditModalContextValue {
  const ctx = useContext(AuditModalContext);
  if (!ctx) {
    throw new Error("useAuditModal must be used within an AuditModalProvider");
  }
  return ctx;
}
