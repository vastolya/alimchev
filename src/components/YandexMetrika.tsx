/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = { id: number };

export function YandexMetrika({ id }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ym) {
      (window as any).ym(id, "hit", pathname);
    }
  }, [pathname, id]);

  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script id="yandex-metrika" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a)
        })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(${id}, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true,
          defer:true
        });
      `}
    </Script>
  );
}
