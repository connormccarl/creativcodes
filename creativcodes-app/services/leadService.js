import { prisma } from "../util/prisma";

export async function createLeadSubmission(payload) {
  return prisma.leadSubmission.create({
    data: {
      name: payload.name,
      title: payload.title,
      company: payload.company,
      phone: payload.phone,
      email: payload.email,
      engagementType: payload.engagementType,
      services: payload.services,
      source: "website-lead-modal",
    },
  });
}
