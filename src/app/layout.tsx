import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { YandexMetrika } from "@/components/YandexMetrika";
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
        <main>
          <div className="grid md:grid-cols-12 md:gap-x-5 md:gap-y-10">
            <div className="md:col-start-4 md:col-span-6 md:gap-10 flex flex-col gap-5">
              <YandexMetrika
                id={Number(process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID)}
              />
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
