"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

const CustomForm = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Successfully toasted!");
    console.log("Отправка данных:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative col-span-6 grid grid-cols-6 gap-5 h-[21.25rem] w-full"
    >
      <Image
        src="/img/contact-bg.jpg"
        alt="contact-bg"
        fill
        className="object-cover rounded-lg"
      />
      <div className="col-span-4 col-start-2 flex flex-col gap-4 z-10 pt-10">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ваш номер телефона или почта"
          className="px-4 py-3 rounded-lg w-full placeholder:text-xs placeholder:text-[#262626] placeholder:opacity-50 focus:outline-none focus:border-[#003E75] focus:ring-2"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg w-full h-32 placeholder:text-xs placeholder:text-[#262626] placeholder:opacity-50 focus:outline-none focus:border-[#003E75] focus:ring-2"
          placeholder="Ваше сообщение"
          required
        />
        <Button type="submit" title="Записаться" />
      </div>
      <Toaster />
    </form>
  );
};

export default CustomForm;
