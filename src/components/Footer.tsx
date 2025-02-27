import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="col-span-6 flex w-full justify-between pb-10">
      <div className="flex gap-2">
        <Link href="https://t.me/+79050865392" target="_blank">
          <Image src="icons/tg_24.svg" alt="123" width={24} height={24}></Image>
        </Link>
        <Link href="https://vk.com/alim4ev" target="_blank">
          <Image src="icons/vk_24.svg" alt="123" width={24} height={24}></Image>
        </Link>
        <Link href="https://wa.me/79654142980" target="_blank">
          <Image
            src="icons/whatsup.svg"
            alt="123"
            width={24}
            height={24}
          ></Image>
        </Link>
      </div>
      <h2 className=" text-2xl font-bold">Артём Алимчев</h2>
    </footer>
  );
};

export default Footer;
