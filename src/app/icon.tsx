import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8B5E3C",
          borderRadius: "7px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="22"
          height="22"
        >
          {/* Hand saw */}
          <path d="M8 36l18-18h14v4H28L12 40z" fill="white" />
          <path d="M26 18l-2-2 2-2 2 2-2 2zm4-4l-2-2 2-2 2 2-2 2zm4-4l-2-2 2-2 2 2-2 2z" fill="white" opacity="0.7" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
