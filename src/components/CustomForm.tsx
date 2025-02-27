"use client";
import Image from "next/image";
import { createRef, RefObject, useState } from "react";
import Button from "./Button";
import toast from "react-hot-toast";

export const formRef: RefObject<HTMLFormElement | null> = createRef();

const CustomForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast("Спасибо, я с вам свяжусь!", {
      icon: "🦴",
      position: "top-center",
    });
    setFormData({ email: "", message: "" });

    console.log(formData);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="relative col-span-6 grid grid-cols-6 gap-5 min-h-[21.25rem] w-full"
    >
      <Image
        src="/img/contact-bg.jpg"
        alt="contact-bg"
        fill
        className="object-cover rounded-lg"
      />
      <div className="col-span-4 col-start-2 flex flex-col gap-4 z-10 pt-10">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш номер телефона или почта"
          className="px-4 py-3 rounded-lg w-full placeholder:text-xs placeholder:text-[#262626] placeholder:opacity-50 focus:outline-none focus:border-[#003E75] focus:ring-2"
          minLength={5}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg w-full h-32 placeholder:text-xs placeholder:text-[#262626] placeholder:opacity-50 focus:outline-none focus:border-[#003E75] focus:ring-2"
          placeholder="Опишите проблему и время, когда  хотели записаться на приём, или оставьте другую информацию"
          minLength={5}
          required
        />

        <Button type="submit" title="Записаться" />
        <p className="pb-10 text-xs text-white flex items-center justify-center">
          Нажимая кнопку “Записаться”, я даю своё согласиена обработку&nbsp;
          <span className="underline">персональных данных</span>
        </p>
      </div>
    </form>
  );
};

export default CustomForm;
