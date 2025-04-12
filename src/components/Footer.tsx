import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-5 md:px-0 md:col-span-6 flex w-full items-center justify-between pb-5 md:pb-10">
      <h2 className="text-base">
        пос. Сухая Балка, ул. Дачная, 5.
        <br />
        +7 965 414-29-80
      </h2>
      <div className="flex gap-2">
        <Link href="https://t.me/+79050865392" target="_blank">
          <Image src="icons/tg_24.svg" alt="123" width={24} height={24}></Image>
        </Link>
        {/* <Link href="https://vk.com/alim4ev" target="_blank">
          <Image src="icons/vk_24.svg" alt="123" width={24} height={24}></Image>
        </Link> */}
        <Link href="https://wa.me/79654142980" target="_blank">
          <Image
            src="icons/whatsup.svg"
            alt="123"
            width={24}
            height={24}
          ></Image>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
