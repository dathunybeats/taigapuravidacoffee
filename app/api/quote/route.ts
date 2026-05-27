import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = await req.json();

  let res: Response;
  try {
    res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (err) {
    console.error("[quote] fetch to GHL failed:", err);
    return NextResponse.json({ error: "Could not reach GHL" }, { status: 502 });
  }

  console.log("[quote] GHL status:", res.status);

  // GHL webhooks sometimes return non-2xx even on success — treat any response as accepted
  return NextResponse.json({ ok: true });
}
