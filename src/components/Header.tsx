import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="col-span-6 flex w-full justify-between pt-10">
      <h2 className=" text-2xl font-bold">Артём Алимчев</h2>
      <div className="flex gap-2">
        <Link href="https://t.me/artem_levitan" target="_blank">
          <Image src="icons/tg_24.svg" alt="123" width={24} height={24}></Image>
        </Link>
        <Link href="https://vk.com/alim4ev" target="_blank">
          <Image src="icons/vk_24.svg" alt="123" width={24} height={24}></Image>
        </Link>
      </div>
    </header>
  );
};

export default Header;
