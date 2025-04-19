"use client";
import Button from "./Button";
import Image from "next/image";
import { formRef } from "./CustomForm";

const Main = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const scrollToRef = (ref: any) => {
    if (ref && ref.current) {
      const yOffset = ref.current.getBoundingClientRect().top;
      window.scrollBy({ top: yOffset, behavior: "smooth" });
    }
  };
  const scrollToForm = () => {
    scrollToRef(formRef);
  };

  return (
    <div className="relative px-5 md:px-0 md:col-span-6 grid md:grid-cols-6 gap-x-5 gap-y-0">
      <div className="col-span-6 2xl:col-span-4">
        <h1 className="text-xl md:text-3xl font-bold text-[#003E75] py-4 md:py-16">
          Артём Алимчев специалист по восстановительным техникам в Красноярске
        </h1>
        <h3 className="text-lg md:text-2xl text-[#262626] pb-4 md:pb-16">
          Устраняю причину боли, последствия травм, хронические боли в спине и
          конечностях за 2 сеанса
        </h3>
      </div>
      <div className="md:col-start-5 md:col-span-2 pb-4 md:pb-0 md:hidden 2xl:flex md:items-end">
        <Image
          src="/img/main.png"
          alt="main"
          width={300}
          height={390}
          className=" hidden md:flex  md:w-full -z-10 md:pr-7"
        />
      </div>
      <div className="col-span-6">
        <Button
          title="Записаться на бесплатную консультацию"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onClick={(e: any) => {
            e.preventDefault();
            scrollToForm();
          }}
        />
      </div>
    </div>
  );
};

export default Main;
