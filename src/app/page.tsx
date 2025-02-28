import Cards from "@/components/Cards";
import Contacts from "@/components/Contacts";
import CustomForm from "@/components/CustomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Reviews from "@/components/reviews/Reviews";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div className="grid md:grid-cols-12 md:gap-x-5 md:gap-y-10">
      <div className="hidden md:flex md:col-span-3" />
      <div className="md:col-span-6 md:gap-10 flex flex-col gap-5">
        <Toaster position="top-center" />
        <Header />
        <Main />
        <Cards />
        <Contacts />
        <Reviews />
        <CustomForm />
        <Footer />
      </div>
      <div className="hidden md:flex col-span-3" />
    </div>
  );
}

export const metadata = {
  title:
    "Профессиональный мануальный терапевт в Красноярске – лечение боли за 1-2 сеанса",
  description:
    "Опытный мануальный терапевт в Красноярске. Работаю со спортсменами, взрослыми и детьми от 6 лет. Эффективное выявление и устранение причин боли за 1-2 сеанса.",
  keywords:
    "мануальный терапевт Красноярск, лечение боли в спине, мануальная терапия для спортсменов, детский мануальный терапевт, устранение боли за 1 сеанс",
  openGraph: {
    title: "Профессиональный мануальный терапевт в Красноярске",
    description:
      "Эффективное лечение боли у спортсменов, взрослых и детей от 6 лет. Выявление и устранение причин дискомфорта за 1-2 сеанса.",
    type: "website",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Профессиональный мануальный терапевт в Красноярске",
    description:
      "Лечение боли у спортсменов, взрослых и детей от 6 лет. Быстрое выявление и устранение причин за 1-2 сеанса.",
    images: [],
  },
};
