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
    <div className="relative">
      <h1 className="pb-4 text-[5rem] leading-[5rem] font-bold text-[#003E75]">
        Мануальный
        <br />
        терапевт
      </h1>
      <h3 className="pb-[7.5rem] text-[2rem] leading-[2rem] text-[#262626] font-bold">
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
        className="absolute top-[-3rem] right-[5rem] -z-10"
      />
    </div>
  );
};

export default Main;
