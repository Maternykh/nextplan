import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header/Header";

import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/app/ProviderRedux";
import MobileHeader from "@/components/Header/MobileHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Plans",
  description: "Сreate a schedule for yourself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body
            className={
              `${inter.className}` +
              " bg-gray-300 min-h-screen  xl:px-16 xl:py-20"
            }
          >
            <section className=" bg-gray-200 xl:rounded-3xl p-3 w-full mb-12 ">
              <Header />
              {children}
              <Toaster />
            </section>
            <MobileHeader />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
