import { siteConfig } from "@/lib/config";

export interface ConsultationFormData {
  parentName: string;
  studentName: string;
  studentGrade: string;
  school: string;
  subjects: string[];
  phone: string;
  email: string;
  bestTimeToCall?: string;
}

export interface GHLSubmitResult {
  success: boolean;
  mock?: boolean;
  error?: string;
}

export async function submitConsultationForm(
  data: ConsultationFormData,
): Promise<GHLSubmitResult> {
  const webhookUrl = siteConfig.ghl.webhookUrl;
  const isPlaceholder = !webhookUrl || webhookUrl.includes("placeholder");

  if (isPlaceholder) {
    // eslint-disable-next-line no-console
    console.log("[GHL Mock] Form submission:", data);
    await new Promise((r) => setTimeout(r, 800));
    return { success: true, mock: true };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  let lastError: string | undefined;

  // Retry up to 2 times (3 attempts total)
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal,
      });

      if (res.ok) {
        clearTimeout(timeout);
        return { success: true };
      }

      lastError = `HTTP ${res.status}`;
    } catch (err) {
      if (controller.signal.aborted) {
        clearTimeout(timeout);
        return { success: false, error: "Request timed out. Please try again." };
      }
      lastError = err instanceof Error ? err.message : "Network error";
    }

    // Brief pause before retry (skip on last attempt)
    if (attempt < 2) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
    }
  }

  clearTimeout(timeout);
  return {
    success: false,
    error: lastError || "Something went wrong. Please try again.",
  };
}
