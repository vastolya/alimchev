"use client";
import toast from "react-hot-toast";
import Button from "./Button";
import Map from "./Map";

const Contacts = () => {
  const handleCopy = async (e: React.FormEvent, type: "phone" | "email") => {
    e.preventDefault();

    let textToCopy;
    let toastMessage;

    if (type === "phone") {
      textToCopy = "+7-905-086-5392";
      toastMessage = "Номер добавлен в буфер обмена";
    } else if (type === "email") {
      textToCopy = "alimcheva@gmail.ru";
      toastMessage = "Email добавлен в буфер обмена";
    } else {
      return; // если type не соответствует "phone" или "email"
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast(toastMessage, {
        icon: "💼",
      });
    } catch {
      toast("Не удалось скопировать информацию");
    }
  };

  return (
    <div className="px-5 md:px-0 md:col-span-6 grid md:grid-cols-6 gap-5">
      <div className="md:col-span-2 md:col-start-2">
        <Button
          iconPath={"icons/call_16.svg"}
          title={"+7-905-086-5392"}
          onClick={(e) => handleCopy(e, "phone")}
        />
      </div>
      <div className="md:col-span-2">
        <Button
          iconPath={"icons/mail_18.svg"}
          title={"alimcheva@gmail.ru"}
          onClick={(e) => handleCopy(e, "email")}
        />
      </div>
      <div className="md:col-span-6 w-full h-[21.25rem]">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
