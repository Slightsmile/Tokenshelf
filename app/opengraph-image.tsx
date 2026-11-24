import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#f8f7f4", color: "#20242d", display: "flex", height: "100%", padding: "86px 102px", width: "100%" }}>
      <div style={{ alignItems: "center", display: "flex", gap: 40 }}>
        <div style={{ alignItems: "center", background: "#f4f7fc", borderRadius: 32, display: "flex", flexDirection: "column", gap: 13, height: 164, justifyContent: "center", width: 164 }}>
          <div style={{ background: "#2268e5", borderRadius: 5, height: 18, marginLeft: -20, width: 78 }} />
          <div style={{ background: "#2268e5", borderRadius: 5, height: 18, marginLeft: 12, width: 94 }} />
          <div style={{ background: "#2268e5", borderRadius: 5, height: 18, marginLeft: -20, width: 78 }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, letterSpacing: -3 }}>TokenShelf.</div>
          <div style={{ color: "#5d6470", fontSize: 30, marginTop: 16 }}>Free AI credits, tokens, and tools.</div>
        </div>
      </div>
    </div>,
    { ...size },
  );
}
