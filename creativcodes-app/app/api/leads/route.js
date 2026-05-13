import { createLeadSubmission } from "../../../services/leadService";

export const runtime = "nodejs";

export async function POST(request) {
  const payload = await request.json();

  if (!payload?.name || !payload?.email || !payload?.company || !payload?.phone || !payload?.title) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!payload?.engagementType || !Array.isArray(payload?.services) || payload.services.length === 0) {
    return Response.json({ error: "Missing engagement type or services" }, { status: 400 });
  }

  try {
    await createLeadSubmission({
      name: payload.name.trim(),
      title: payload.title.trim(),
      company: payload.company.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim(),
      engagementType: payload.engagementType,
      services: payload.services,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return Response.json({ error: "Unable to save lead submission" }, { status: 500 });
  }
}
