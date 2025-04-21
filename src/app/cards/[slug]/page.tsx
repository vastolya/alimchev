import { notFound } from "next/navigation";
import Image from "next/image";
import { data } from "../../../../public/data";
import Contacts from "@/components/Contacts";
import CustomForm from "@/components/CustomForm";

type Props = {
  params: { slug: string };
};

export default async function CardDetailPage({ params }: Props) {
  const { slug } = await params;
  const card = data.find((c) => c.slug === slug);

  if (!card) {
    notFound();
  }

  return (
    <div className="px-5 md:px-0 md:col-start-4 md:col-span-6 flex flex-col gap-10">
      <div className="grid md:grid-cols-6 gap-6">
        <h2 className="md:col-span-6 text-xl md:text-3xl font-bold md:pb-4">
          {card?.subtitle}
        </h2>
        <div className="md:col-span-3 flex flex-col gap-6 text-lg leading-relaxed">
          <p>{card?.description}</p>

          {card.conditionTitle && (
            <p className="font-medium">{card.conditionTitle}</p>
          )}

          {card?.conditions?.length > 0 && (
            <ul className="list-disc list-inside space-y-2">
              {card.conditions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          <h3 className="text-2xl font-semibold pt-4">Как лечить?</h3>
          {card?.how_to_treat?.length > 0 && (
            <ul className="list-decimal list-inside space-y-2">
              {card.how_to_treat.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:col-span-3 relative w-full h-[20rem] md:h-full rounded-xl overflow-hidden shadow-md">
          <Image
            src={card.img}
            alt="Иллюстрация"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <Contacts />
      <CustomForm />
    </div>
  );
}

export function generateStaticParams() {
  return data.map((card) => ({
    params: { slug: card.slug },
  }));
}
