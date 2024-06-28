import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/layouts/theme";

import Providers from "./providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Rate Calendar",
  description: "Generated for Rate Checking",
};
export const revalidate = 1200;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <Providers>
            <body className={inter.className}>{children}</body>
          </Providers>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
