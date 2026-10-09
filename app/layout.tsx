import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rojej Maharjan | Networking & Cybersecurity",
  description:
    "Personal portfolio of Rojej Maharjan — IT professional focused on networking, security, Linux, cloud, and monitoring.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
