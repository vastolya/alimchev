import { notFound } from "next/navigation";
import { data } from "../../../../public/data";

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
    <div className="min-h-full">
      <h1>{card?.title}</h1>
      <p>{card?.subtitle}</p>
    </div>
  );
}

export function generateStaticParams() {
  return data.map((card) => ({
    params: { slug: card.slug },
  }));
}
