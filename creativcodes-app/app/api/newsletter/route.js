import { createNewsletterSignup } from "../../../services/newsletterService";

export const runtime = "nodejs";

export async function POST(request) {
  const payload = await request.json();
  const email = payload?.email?.trim();

  if (!email) {
    return Response.json({ error: "Missing email" }, { status: 400 });
  }

  try {
    await createNewsletterSignup({ email });
    return Response.json({ ok: true });
  } catch (error) {
    console.error("Newsletter signup failed", error);
    return Response.json({ error: "Unable to save newsletter signup" }, { status: 500 });
  }
}
