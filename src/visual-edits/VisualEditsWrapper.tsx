"use client";

import React from "react";

// Lazy-load the heavy visual edits messenger only when really needed
const VisualEditsMessenger = React.lazy(() => import("./VisualEditsMessenger"));

export default function VisualEditsWrapper() {
  if (typeof window === "undefined") return null;

  const isDev = process.env.NODE_ENV === "development";
  const inIframe = window.self !== window.top;

  // In production, only enable when running inside an editor iframe.
  // For normal site visitors, this returns null and avoids loading the heavy code.
  if (!isDev && !inIframe) return null;

  return (
    <React.Suspense fallback={null}>
      <VisualEditsMessenger />
    </React.Suspense>
  );
}
