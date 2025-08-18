import React, { useEffect, useState } from "react";

import "../css/SVG.css";

export default function SVGComponent({ direction }) {
  return (
    <svg width="100%" height="auto">
      <path
        fill="none"
        stroke="red"
        stroke-width="10"
        d="M20,0 a20,20 0 0,1 20,20"
      />
    </svg>
  );
}
