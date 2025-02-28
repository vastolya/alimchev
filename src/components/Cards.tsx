import React from "react";
import Image from "next/image";

const cards = [
  {
    img: "/img/card-back.jpg",
    title: "Спина",
    subtitle: "грыжа, протрузия, седалищный нерв, остеохондроз",
  },
  {
    img: "/img/card-soul.jpg",
    title: "Нервы",
    subtitle: "защемление, онемение, триггерные точки, спазм, судороги",
  },
  {
    img: "/img/card-hand.jpg",
    title: "Конечности",
    subtitle: "суставы, руки, ноги, онемение пальцев",
  },
  {
    img: "/img/card-belly.jpg",
    title: "Живот",
    subtitle: "желудок, поджелудочная железа, мочевой пузырь, диарея, запоры",
  },
  {
    img: "/img/card-head.jpg",
    title: "Голова",
    subtitle: "мигрень, боли, головокружение, тройничный нерв",
  },
];

const Card = ({
  card,
}: {
  card: { img: string; title: string; subtitle: string };
}) => {
  return (
    <div className="group shadow-md relative h-40 w-full p-4 bg-[#262626] rounded-lg col-span-2 overflow-hidden">
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
        <p className="text-xs leading-4 font-medium">{card.subtitle}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="px-5 md:px-0 md:col-span-6 grid md:grid-cols-6 gap-5">
      <span className="col-span-2 text-base leading-5">
        <p className="pb-2">
          Работаю со спортсменами, взрослыми, детьми от 6 лет, выявляю причины
          болей, устраняю за 1-2 сеанса
        </p>
        <p>
          Принимаю в пос. Сухая Балка,
          <br />
          Улица Дачная, 5
        </p>
      </span>
      {cards.map((item) => (
        <Card card={item} key={item.title} />
      ))}
    </div>
  );
};

export default Cards;
