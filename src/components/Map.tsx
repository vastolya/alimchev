"use client";
import { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      DG.then(() => {
        const map = DG.map("map", {
          center: [56.04, 92.91], // Координаты Красноярска
          zoom: 10,
          zoomControl: false,
          fullscreenControl: false,
        });

        DG.marker([56.139856, 92.915676]) // Координаты маркера
          .addTo(map)
          .bindPopup(
            " ​пос. Сухая Балка, Емельяновский район, Дачная улица, дом 5​"
          );
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%" }}
      className="rounded-lg"
    ></div>
  );
};

export default Map;
