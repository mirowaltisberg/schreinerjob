import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#5f3528",
          borderRadius: "36px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="120"
          height="120"
        >
          <path d="M5 9h13l3 7 3-7h13v24H24l-3-7-3 7H5z" fill="#f7edda" stroke="#d6a85c" strokeWidth="3" />
          <path d="M9 14h8M25 14h8M9 28h8M25 28h8" fill="none" stroke="#f7edda" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
