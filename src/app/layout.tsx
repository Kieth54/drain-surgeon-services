import type { Metadata } from "next";
import "./globals.css";
import VisualEditsWrapper from "../visual-edits/VisualEditsWrapper";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The Drain Surgeon | 24/7 Emergency Plumbers",
  description:
    "Professional 24/7 emergency plumbing services across South Africa. Blocked drains, leak detection, geyser repairs and more from The Drain Surgeon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="lazyOnload"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsWrapper />
      </body>
    </html>
  );
}
