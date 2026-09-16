import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/site-config";

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
          background: "#14181F",
          color: "#ECEAE3",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 34, color: "#F4B740", marginBottom: 24, display: "flex" }}>
          {SITE_CONFIG.name}
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, display: "flex", maxWidth: 900 }}>
          Be the answer they land on.
        </div>
      </div>
    ),
    { ...size }
  );
}
