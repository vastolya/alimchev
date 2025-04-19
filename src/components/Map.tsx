"use client";
import { useEffect, useRef } from "react";

const Map = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null); // хранит ссылку на DG.map

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      DG.then(() => {
        // Проверяем и удаляем старую карту, если есть
        if (mapRef.current) {
          mapRef.current.remove();
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mapRef.current = DG.map("map", {
          center: [56.04, 92.91],
          zoom: 10,
          zoomControl: false,
          fullscreenControl: false,
        });

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        DG.marker([56.139856, 92.915676])
          .addTo(mapRef.current)
          .bindPopup(
            "пос. Сухая Балка, Емельяновский район, Дачная улица, дом 5​"
          );
      });
    };

    return () => {
      // Очищаем карту при размонтировании
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
    />
  );
};

export default Map;
