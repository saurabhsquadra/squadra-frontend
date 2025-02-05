import type { Metadata } from "next";
import "../../styles/fonts.css";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TopLoader from "./_components/Toploader";
import ClientLoaderWrapper from "./_components/ClientLoaderWrapper";

export const metadata: Metadata = {
  title: "Squadra Media",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <TopLoader />
        <Toaster />
        <ClientLoaderWrapper>{children}</ClientLoaderWrapper>
      </body>
    </html>
  );
}
