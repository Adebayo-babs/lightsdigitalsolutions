import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lights Digital Solutions";
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
          background: "linear-gradient(135deg, #04269A 0%, #0043FF 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: -0.5,
            marginBottom: 40,
            opacity: 0.9,
          }}
        >
          ⚡ LIGHTS DIGITAL SOLUTIONS
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: -1.5,
            maxWidth: 900,
          }}
        >
          We Build the Systems Your Business Runs On.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            marginTop: 32,
            opacity: 0.85,
            maxWidth: 780,
          }}
        >
          Websites, mobile apps, and internal systems — Lagos, Nigeria
        </div>
      </div>
    ),
    { ...size }
  );
}
