CREATE TABLE "newsletter_signups" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "source" TEXT NOT NULL DEFAULT 'website-footer-newsletter',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "newsletter_signups_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "lead_submissions" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  "company" TEXT NOT NULL,
  "phone" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "engagementType" TEXT NOT NULL,
  "services" TEXT[],
  "source" TEXT NOT NULL DEFAULT 'website-lead-modal',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "lead_submissions_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "newsletter_signups_email_idx" ON "newsletter_signups"("email");
CREATE INDEX "lead_submissions_email_idx" ON "lead_submissions"("email");
CREATE INDEX "lead_submissions_company_idx" ON "lead_submissions"("company");
