import "./styles/index.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { ReduxProvider } from "@/store/Provider/ReduxProvider";
import { Navbar } from "@/widgets/Navbar/Navbar";
import { Footer } from "@/widgets/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolarHelper",
  description:
    "We will help you find certified equipment and a specialist for installation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <Navbar />
          <div className="wrapper">{children}</div>
          <Footer />
        </body>
      </ReduxProvider>
    </html>
  );
}
