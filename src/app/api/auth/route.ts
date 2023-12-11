import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const id = randomUUID();

  return NextResponse.json({
    id,
    email,
    password,
  });
}
