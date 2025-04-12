import React from "react";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: "Нужно ли на прием брать снимки или они не нужны?",
    children: (
      <p>{`Чтобы убедиться в целесообразности и способе воздействия понадобится рентгенологический снимок или результат МРТ`}</p>
    ),
  },
  {
    key: "2",
    label: "В чем отличие от массажа?",
    children: (
      <p>
        {
          "Массаж воздействует на мягкие ткани — кожу, подкожную клетчатку и мышцы. Мануальная терапия воздействует на суставы. Это два метода, которые дополняют друг друга"
        }
      </p>
    ),
  },
  {
    key: "3",
    label: "Когда проявится эффект?",
    children: (
      <p>
        {
          "Эффект заметен уже после 1–2 сеансов, но необходимо закончить курс терапии, чтобы был достигнут полноценный эффект"
        }
      </p>
    ),
  },
];

export const FAQ = () => {
  return (
    <div className="px-5 md:px-0">
      <Collapse
        accordion
        items={items}
        className="border-[#003E75] bg-[#f0f8ff] text-base shadow-lg"
        style={{ fontFamily: "Montserrat" }}
      />
    </div>
  );
};

export default FAQ;
