import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
