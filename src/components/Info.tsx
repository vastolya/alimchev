import React from "react";

const techniques = [
  "Лечебный массаж шейно-воротниковой зоны, спины, конечностей",
  "Лимфодренажный массаж",
  "Точечный массаж шиацу",
  "Мануальный массаж",
  "Собственные техники",
];

const Info = () => {
  return (
    <div className="grid md:grid-cols-12 gap-4 px-5 md:px-0">
      <div className="md:col-span-6 p-6 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-md h-full flex flex-col justify-between text-[#262626] space-y-4">
        <h3 className="text-xl font-bold">Обо мне</h3>
        <p className="text-base leading-relaxed">
          Специалист по восстановительным техникам
          <br /> с <span className="font-semibold">8-летним опытом</span>.
        </p>

        <p className="text-base leading-relaxed">
          Работаю со взрослыми, спортсменами и детьми от 6 лет.
        </p>
        <p className="text-base leading-relaxed">
          Специализируюсь на{` `}
          <span className="font-semibold">
            выявлении и устранении причин боли
          </span>
          {` `}
          через мануальную терапию.
        </p>
        <p className="text-base leading-relaxed">
          <span className="font-semibold ">Результат за 1 – 2 сеанса</span>— без
          длительных курсов и таблеток.
        </p>
      </div>
      <div className="md:col-span-6 p-6 bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl shadow-md h-full flex flex-col justify-between text-[#262626] space-y-4">
        <h2 className="text-xl font-bold">
          С помощью чего достигаю результата
        </h2>
        <ul className="list-disc list-inside space-y-1 text-base leading-relaxed">
          {techniques.map((technique, index) => (
            <li key={index}>{technique}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
