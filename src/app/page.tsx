import Cards from "@/components/Cards";
import Contacts from "@/components/Contacts";
import CustomForm from "@/components/CustomForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Healline from "@/components/healline/Healline";
import Main from "@/components/Main";
import MainPic from "../../public/img/main.png";
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
        <Healline />
        <FAQ />
        <Reviews />
        <Contacts />
        <CustomForm />

        <Footer />
      </div>
      <div className="hidden md:flex col-span-3" />
    </div>
  );
}

export const metadata = {
  title:
    "Специалист по восстановительным техникам в Красноярске – лечение боли за 1-2 сеанса",
  description:
    "Специалист по восстановительным техникам, с 8-летним опытом. Работаю со взрослыми, спортсменами и детьми от 6 лет. Специализируюсь на выявлении и устранении причин боли через мануальную терапию. Результат за 1 – 2 сеанса— без длительных курсов и таблеток.",
  keywords:
    "мануальный терапевт в красноярске, мануальный массаж красноярск, мануальная терапия красноярск, костоправ в красноярске, прием невролога красноярск, точечный массаж шиацу в красноярске, массаж лечебный красноярск, массаж шейно воротниковой зоны красноярск, лимфодренажный массаж красноярск, остеопат в красноярске",
  openGraph: {
    title: "Специалист по восстановительным техникам в Красноярске",
    description:
      "Специалист по восстановительным техникам, с 8-летним опытом. Работаю со взрослыми, спортсменами и детьми от 6 лет. Специализируюсь на выявлении и устранении причин боли через мануальную терапию. Результат за 1 – 2 сеанса— без длительных курсов и таблеток.",
    type: "website",
    images: {
      url: MainPic.src,
      width: MainPic.width,
      height: MainPic.height,
      alt: "Главное изображение сайта",
    },
  },
};
