import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";

import DraftModeToast from "@/app/components/DraftModeToast";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { LiveErrorBoundary } from "@/app/components/LiveErrorBoundary";
import * as demo from "@/sanity/lib/demo";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import HeaderHeightWrapper from "./components/HeaderHeightWrapper ";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.seo?.siteTitle || demo.title;
  const description = settings?.seo?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.seo?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.seo?.ogImage?.metadataBase
      ? new URL(settings?.seo?.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
    <html lang="en" className={`${sora.variable} bg-white text-grey-900`}>
      <body>
        <section className="min-h-screen">
          <Toaster />
          {isDraftMode && (
            <>
              <DraftModeToast />
              <VisualEditing />
            </>
          )}
          <LiveErrorBoundary>
            <SanityLive />
          </LiveErrorBoundary>
          <Header />
          <HeaderHeightWrapper>   
            <div>{children}</div>
          </HeaderHeightWrapper>
          <Footer />
        </section>
        <SpeedInsights />
      </body>
    </html>
  );
}
