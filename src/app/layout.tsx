import type { Metadata } from "next";
import "./globals.css";
import VisualEditsWrapper from "../visual-edits/VisualEditsWrapper";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "24/7 Emergency Plumbers | Professional Plumbing Template",
  description:
    "Professional 24/7 emergency plumbing template for agencies and freelancers. Showcase blocked drain services, leak detection, geyser repairs and more for any local plumbing brand.",
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
