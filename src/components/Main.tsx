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
    <div className="relative px-5 md:px-0">
      <h1 className="text-3xl md:text-[5rem] md:leading-[5rem] pb-2 md:pb-4 font-bold text-[#003E75]">
        Мануальный
        <br />
        терапевт
      </h1>
      <h3 className="text-2xl pb-16 md:pb-[7.5rem] md:text-[2rem] md:leading-[2rem] text-[#262626] font-bold">
        Красноярск
      </h3>
      <Button
        title="Записаться на бесплатную консультацию"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick={(e: any) => {
          e.preventDefault();
          scrollToForm();
        }}
      />
      <Image
        src="/img/main.png"
        alt="main"
        width={300}
        height={390}
        className="absolute md:min-w-80 w-48 -top-5 md:top-[-3rem] right-[5%] md:right-[1rem] -z-10"
      />
    </div>
  );
};

export default Main;
