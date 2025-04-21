import Image from "next/image";
import Link from "next/link";

import tgIcon from "../../public/icons/tg_24.svg";
import whatsupIcon from "../../public/icons/whatsup.svg";

const Header = () => {
  return (
    <header className="px-5 md:px-0 md:col-span-6 md:pt-10 pt-5 justify-between  flex w-full ">
      <Link href="/">
        <h2 className=" md:text-2xl text-lg font-bold">Артём Алимчев</h2>
      </Link>
      <div className="flex gap-2">
        <Link href="https://wa.me/79654142980" target="_blank">
          <Image src={whatsupIcon} alt="123" width={24} height={24}></Image>
        </Link>
        <Link href="https://t.me/+79050865392" target="_blank">
          <Image src={tgIcon} alt="123" width={24} height={24}></Image>
        </Link>
        {/* <Link href="https://vk.com/alim4ev" target="_blank">
          <Image src="icons/vk_24.svg" alt="123" width={24} height={24}></Image>
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
