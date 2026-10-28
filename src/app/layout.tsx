import type { Metadata } from "next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { BottomNav } from "@/components/bottom-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "어디갈까?",
  description: "축제부터 실시간 혼잡도까지 한눈에",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="min-h-dvh bg-background font-sans text-text antialiased">
        <ThemeProvider>
          <div className="mx-auto flex min-h-dvh w-full max-w-lg flex-col bg-background">
            <main className="flex-1 pb-[88px]">{children}</main>
            <Suspense fallback={null}>
              <BottomNav />
            </Suspense>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
