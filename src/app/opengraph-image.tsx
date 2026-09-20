import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { PARENT_NAME, SITE_CONFIG } from "@/lib/site-config";

export const alt = `${SITE_CONFIG.name}: Be the answer they land on`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const logo = readFileSync(join(process.cwd(), "public/logos/logo-with-text-transparent.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={460} height={109} style={{ marginBottom: 24 }} alt="" />
        <div style={{ fontSize: 26, color: "#9AA3B0", marginBottom: 28, display: "flex" }}>
          by {PARENT_NAME}
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.1, display: "flex", maxWidth: 900 }}>
          Be the answer they land on.
        </div>
      </div>
    ),
    { ...size }
  );
}
