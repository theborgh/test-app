"use client";

import React, { useState } from "react";

export default function AboutPage() {
  console.log("Log something");
  const [isBgLight, setIsBigLight] = useState(false);

  return (
    <div className={`h-screen bg-slate-${isBgLight ? "800" : "200"}`}>
      <button onClick={() => setIsBigLight((prev) => !prev)}>Toggle</button>
    </div>
  );
}
