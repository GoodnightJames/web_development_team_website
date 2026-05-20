import { ImageResponse } from "next/og";

export const alt = "Seaside Garage and Detailing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a1f33 0%, #102c47 45%, #14385a 100%)",
          color: "#fbf8f3",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.18), transparent 38%), radial-gradient(circle at 82% 8%, rgba(184,108,63,0.45), transparent 45%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            position: "relative",
            fontSize: 22,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#d9c08b",
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "9999px",
              background: "#fbf8f3",
              color: "#0a1f33",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 0,
            }}
          >
            S
          </div>
          <span>Coastal automotive craft</span>
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            Seaside Garage
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              maxWidth: 940,
              color: "#d9c08b",
            }}
          >
            and Detailing
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 28,
              color: "rgba(251,248,243,0.78)",
              maxWidth: 880,
              lineHeight: 1.35,
            }}
          >
            Precision automotive service. High-end detailing. On the coast.
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(251,248,243,0.6)",
          }}
        >
          <span>Laser alignment · Wheel repair · Mount &amp; balance</span>
          <span>Ceramic · Correction · Interior</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
