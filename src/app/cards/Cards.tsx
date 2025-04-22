"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";
import Button from "@/components/Button";
import arrowDown from "../../../public/icons/arrowDown.svg";
import arrowUp from "../../../public/icons/arrowUp.svg";

type CardType = {
  slug: string;
  img: string | StaticImageData;
  title: string;
  subtitle: string;
  description: string;
  conditions: string[];
  conditionTitle?: string;
  how_to_treat: string[];
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <Link
      href={`/cards/${card.slug}`}
      className="min-h-[12rem] group relative col-span-3 p-6 bg-[#262626] rounded-lg shadow-lg overflow-hidden h-full flex flex-col"
    >
      <Image
        src={card.img}
        alt="Background"
        fill
        priority
        sizes="auto"
        className="object-cover group-hover:scale-110 opacity-40 rounded-lg transition-all duration-500 ease-in-out "
      />
      <div className="relative z-10 h-full flex flex-col justify-between text-[#f0f8ff] [text-shadow:0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.15)]">
        <p className="text-lg leading-6 font-semibold">{card.title}</p>
        <p className="text-sm font-medium">{card.subtitle}</p>
      </div>
    </Link>
  );
};

const shuffleArray = (array: CardType[]) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Cards = ({ cards }: { cards: CardType[] }) => {
  const [showAll, setShowAll] = useState(false);
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(cards));
  }, [cards]);

  const visibleCards = showAll ? shuffledCards : shuffledCards.slice(0, 6);

  return (
    <div className="grid md:grid-cols-12 gap-4 px-5 md:px-0">
      <AnimatePresence initial={false}>
        {visibleCards.map((card, index) => (
          <motion.div
            key={card.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ delay: index * 0.03 }}
            className="sm:col-span-6 lg:col-span-4"
          >
            <Card card={card} />
          </motion.div>
        ))}
      </AnimatePresence>

      {cards?.length > 6 && (
        <div className="md:col-start-4 md:col-span-6 text-center mt-4">
          <Button
            title={showAll ? "Скрыть" : "Показать ещё"}
            onClick={() => setShowAll(!showAll)}
            iconPath={!showAll ? arrowDown : arrowUp}
          />
        </div>
      )}
    </div>
  );
};

export default Cards;
