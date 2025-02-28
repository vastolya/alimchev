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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
      }

      await toast.promise(new Promise((resolve) => setTimeout(resolve, 500)), {
        loading: "Отправка...",
        success: "Спасибо, я с вами свяжусь! 🦴",
        error: "Ошибка при отправке. Попробуйте позже.",
      });

      setFormData({ email: "", message: "" });
    } catch (error) {
      console.error("Ошибка отправки:", error);
      toast.error("Ошибка при отправке. Попробуйте позже.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="px-5 md:px-0 relative md:col-span-6 grid md:grid-cols-6 gap-5 md:min-h-[21.25rem] w-full"
    >
      <Image
        src="/img/contact-bg.jpg"
        alt="contact-bg"
        fill
        className="object-cover md:rounded-lg"
      />
      <div className="md:col-span-4 md:col-start-2 flex flex-col gap-4 z-10 pt-10">
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
        <p className="pb-10 text-xs text-white flex text-center items-center justify-center [text-shadow:0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.15)]">
          Нажимая кнопку “Записаться”, я даю своё согласиена обработку
          персональных данных
        </p>
      </div>
    </form>
  );
};

export default CustomForm;
