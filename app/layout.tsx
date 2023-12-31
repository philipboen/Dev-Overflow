import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in Web Development, Algorithms. Data Structures, and more",
  icons: {
    icon: "/assets/icons/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} font-sans`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
            variables: {
              colorPrimary: "#ff7000",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
