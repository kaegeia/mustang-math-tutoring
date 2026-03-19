"use client";

import Script from "next/script";
import { siteConfig } from "@/lib/config";

export function GHLChatWidget() {
  const widgetId = siteConfig.ghl.chatWidgetId;
  const isPlaceholder = !widgetId || widgetId.includes("placeholder");

  if (isPlaceholder) return null;

  return (
    <Script
      src={`https://widgets.leadconnectorhq.com/loader.js`}
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id={widgetId}
      strategy="afterInteractive"
    />
  );
}
