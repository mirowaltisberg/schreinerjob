import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
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
          background: "#f7edda",
          borderRadius: "6px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="33"
          height="33"
        >
          <path d="M5 9h13l3 7 3-7h13v24H24l-3-7-3 7H5z" fill="#d6a85c" stroke="#5f3528" strokeWidth="3" />
          <path d="M9 14h8M25 14h8M9 28h8M25 28h8" fill="none" stroke="#315a45" strokeWidth="2" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
