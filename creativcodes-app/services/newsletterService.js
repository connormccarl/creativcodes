import { prisma } from "../util/prisma";

export async function createNewsletterSignup({ email }) {
  return prisma.newsletterSignup.create({
    data: {
      email,
      source: "website-footer-newsletter",
    },
  });
}
