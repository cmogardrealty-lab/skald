import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          background: "#0A0C11",
        }}
      >
        <div style={{ width: 14, height: 10, borderRadius: 3, background: "#F5B02E", display: "flex" }} />
        <div style={{ width: 22, height: 10, borderRadius: 3, background: "#E7EAEF", display: "flex" }} />
        <div style={{ width: 34, height: 10, borderRadius: 3, background: "#E7EAEF", opacity: 0.75, display: "flex" }} />
        <div style={{ width: 46, height: 10, borderRadius: 3, background: "#E7EAEF", opacity: 0.5, display: "flex" }} />
      </div>
    ),
    { ...size }
  );
}
