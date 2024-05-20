import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Session from "./session-provider";

const fontFamily = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frontend Template | Unacero Technology",
  description: "Front end template for projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontFamily.className} min-h-screen`}>
        <Session>{children}</Session>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "min-w-[250px]",
          }}
        />
      </body>
    </html>
  );
}
