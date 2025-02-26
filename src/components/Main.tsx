import React from "react";
import Button from "./Button";
import Image from "next/image";

const Main = () => {
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
      <Button title="Записаться на бесплатную консультацию" />

      <Image
        src="/img/main.png"
        alt="main"
        width={300}
        height={390}
        className="absolute top-[-3rem] right-[5rem] z-[-5]"
      />
    </div>
  );
};

export default Main;
