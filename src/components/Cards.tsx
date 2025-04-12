import React from "react";
import Image from "next/image";

const cards = [
  {
    img: "/img/card-back.jpg",
    title: "Позвоночник",
    subtitle: "Грыжи, протрузии, остеохондроз, защемления",
  },
  {
    img: "/img/card-hand.jpg",
    title: "Суставы и конечности",
    subtitle:
      "Боли в руках, ногах, онемение пальцев, триггерные точки, спазмы, судороги",
  },
  {
    img: "/img/card-soul.jpg",
    title: "Неврология",
    subtitle:
      "Ишиас (седалищный нерв), головокружения, мигрени, невралгия тройничного нерва",
  },
  {
    img: "/img/card-belly.jpg",
    title: "Внутренние органы",
    subtitle:
      "Дисфункции желудка, поджелудочной железы, мочевого пузыря, запоры, диарея",
  },
];

const techniques = [
  "Лечебный массаж шейно-воротниковой зоны, спины, конечностей",
  "Лимфодренажный массаж",
  "Точечный массаж шиацу",
  "Мануальный массаж",
  "Собственные техники",
];

const Card = ({
  card,
}: {
  card: { img: string; title: string; subtitle: string };
}) => {
  return (
    <div className="min-h-[276px] group relative col-span-3 p-6 bg-[#262626] rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      <Image
        src={card.img}
        alt="Background"
        fill
        priority
        sizes="auto"
        className="object-cover group-hover:scale-110 opacity-40 rounded-lg transition-all duration-500 ease-in-out "
      />
      <div className="relative z-10 h-full flex flex-col justify-between text-[#f0f8ff] [text-shadow:0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.15)]">
        <p className="text-2xl leading-6 font-semibold">{card.title}</p>
        <p className="text-base font-medium">{card.subtitle}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="px-5 md:px-0 md:col-span-6 grid md:grid-cols-6 gap-5 items-stretch">
      <div className="col-span-3 p-6 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-md h-full flex flex-col justify-between text-[#262626] space-y-4">
        <h3 className="text-xl font-bold">Обо мне</h3>
        <p className="text-base leading-relaxed">
          Специалист по восстановительным техникам
          <br /> с <span className="font-semibold">8-летним опытом</span>.
        </p>

        <p className="text-base leading-relaxed">
          Работаю со взрослыми, спортсменами и детьми от 6 лет.
        </p>
        <p className="text-base leading-relaxed">
          Специализируюсь на{` `}
          <span className="font-semibold">
            выявлении и устранении причин боли
          </span>
          {` `}
          через мануальную терапию.
        </p>
        <p className="text-base leading-relaxed">
          <span className="font-semibold ">Результат за 1 – 2 сеанса</span>— без
          длительных курсов и таблеток.
        </p>
      </div>

      {cards.map((item) => (
        <Card card={item} key={item.title} />
      ))}

      <div className="col-span-3 p-6 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-md h-full flex flex-col justify-between text-[#262626] space-y-4">
        <h2 className="text-xl font-bold">
          С помощью чего достигаю результата
        </h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          {techniques.map((technique, index) => (
            <li key={index}>{technique}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
