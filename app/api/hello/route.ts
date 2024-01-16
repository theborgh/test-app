import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  return NextResponse.json({ hello: `Hello, ${url.searchParams.get("username") || "user"}` });
}