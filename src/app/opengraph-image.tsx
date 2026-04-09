import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MRC Agency — Content Engines. Creator Ecosystems. Growth.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A2744",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Coral accent circle */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(232, 93, 58, 0.15)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: -50,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(232, 93, 58, 0.1)",
            filter: "blur(40px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 32,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.02em",
            marginBottom: 40,
          }}
        >
          MRC
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          We build the systems that make brands
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#E85D3A",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            marginBottom: 40,
          }}
        >
          impossible to ignore.
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.02em",
          }}
        >
          Content Engines · Creator Ecosystems · Growth
        </div>
      </div>
    ),
    { ...size }
  );
}
