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
          flexDirection: "row",
          alignItems: "stretch",
          padding: "72px",
          background: "#fbf9f4",
          color: "#201f1b",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", width: 8, background: "#1747c8", marginRight: 48 }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              fontWeight: 600,
              color: "#1747c8",
              marginBottom: 36,
            }}
          >
            Lights Digital Solutions
          </div>
          <div style={{ display: "flex", fontSize: 66, lineHeight: 1.06, maxWidth: 930 }}>
            Digital systems for the way your business works
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              marginTop: 28,
              color: "#66645e",
            }}
          >
            Websites, mobile apps, and operational software · Lagos, Nigeria
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
