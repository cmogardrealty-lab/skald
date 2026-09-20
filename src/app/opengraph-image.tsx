import { ImageResponse } from "next/og";
import { PARENT_NAME, SITE_CONFIG } from "@/lib/site-config";

export const alt = `${SITE_CONFIG.name}: Be the answer they land on`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0A0C11",
          color: "#E7EAEF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 28 }}>
          <div style={{ width: 10, height: 8, borderRadius: 2, background: "#F5B02E", display: "flex" }} />
          <div style={{ width: 16, height: 8, borderRadius: 2, background: "#E7EAEF", display: "flex" }} />
          <div style={{ width: 24, height: 8, borderRadius: 2, background: "#E7EAEF", opacity: 0.75, display: "flex" }} />
        </div>
        <div style={{ fontSize: 34, color: "#9AA3B0", marginBottom: 16, display: "flex" }}>
          {SITE_CONFIG.name}, by {PARENT_NAME}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex", maxWidth: 900 }}>
          Be the answer they land on.
        </div>
      </div>
    ),
    { ...size }
  );
}
