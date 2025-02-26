import Cards from "@/components/Cards";
import Contacts from "@/components/Contacts";
import CustomForm from "@/components/CustomForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Reviews from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-5 gap-y-10">
      <div className="col-span-3" />
      <div className="col-span-6 flex flex-col gap-10">
        <Header />
        <Main />
        <Cards />
        <Contacts />
        <Reviews />
        <CustomForm />
        <Footer />
      </div>
      <div className="col-span-3" />
    </div>
  );
}

export const metadata = {
  title: "Мануальный терапевт в Красноярске",
  description:
    "Работаю со спортсменами, взрослыми, детьми от 6 лет, выявляю причины болей, устраняю за 1-2 сеанса",
};
