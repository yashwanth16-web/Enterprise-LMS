"use client";

import "./globals.css";

import { ReactNode, useState } from "react";

import { Inter } from "next/font/google";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import ThemeProvider from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [client] = useState(queryClient);

  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={inter.className}>

        <ThemeProvider>

          <QueryClientProvider client={client}>
            {children}
          </QueryClientProvider>

        </ThemeProvider>

      </body>
    </html>
  );
}