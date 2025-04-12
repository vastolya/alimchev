import Image from "next/image";

interface ButtonProps {
  title?: string;
  iconPath?: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: (e: React.FormEvent) => void;
}

const Button = ({
  iconPath,
  title,
  type = undefined,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className=" py-4 flex items-center justify-center gap-2 w-full rounded-lg bg-[#003E75] shadow-lg hover:bg-[#0058A0] active:bg-[#002A52]"
      onClick={onClick}
    >
      {iconPath && (
        <Image src={iconPath} alt={iconPath} width={18} height={18} />
      )}
      <p
        className={`${iconPath ? "text-xs" : "text-sm md:text-2xl"} ${
          iconPath ? "leading-3" : "leading-6"
        } text-[#F0F8FF] font-semibold  [text-shadow:0.25rem_0.25rem_0.25rem_rgba(0,0,0,0.15)]`}
      >
        {title}
      </p>
    </button>
  );
};

export default Button;
