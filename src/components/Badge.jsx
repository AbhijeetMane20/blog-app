import React from "react";

export default function Badge({ text }) {
  return (
    <label
      style={{
        padding: "0.25rem",
        backgroundColor: "#FF474C",
        color: "white",
        fontFamily: "Poppins-Regular",
        borderRadius: "4px",
        margin: "0 0.25rem",
      }}
    >
      {text}
    </label>
  );
}
