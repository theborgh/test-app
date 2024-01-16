import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex p-2 gap-2 bg-slate-800 text-slate-200">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
