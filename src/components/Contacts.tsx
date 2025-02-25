import Button from "./Button";
import Map from "./Map";

const Contacts = () => {
  return (
    <div className="col-span-6 grid grid-cols-6 gap-5">
      <div className="col-span-2 col-start-2">
        <Button iconPath={"icons/call_16.svg"} title={"+7-905-086-5392"} />
      </div>
      <div className="col-span-2">
        <Button iconPath={"icons/mail_18.svg"} title={"alimcheva@gmail.ru"} />
      </div>
      <div className="col-span-6 w-full h-[21.25rem]">
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
