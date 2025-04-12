import React from "react";
import { Timeline } from "antd";
import "./style.css";

const Healline = () => {
  return (
    <div className="px-5 md:px-0 md:col-span-6 grid md:grid-cols-6 md:gap-5 gap-10">
      <div className=" col-span-3 max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 text-gray-800">
        <h3 className="text-xl font-bold">
          Массажист, мануальный терапевт или остеопат?
        </h3>
        <p>
          В отличие от обычного массажа, направленного на расслабление мышц, в
          основном поверхностных, работа <strong>мануального терапевта</strong>{" "}
          и <strong>остеопата</strong> направлена внутрь тела, на скелет
        </p>
        <p>
          <strong>Мануальный терапевт</strong> воздействует на суставы,
          сухожилия, хрящи и позвонки. Его задача — снять боль и спазм, вернуть
          в работу орган
        </p>
        <p>
          <strong>Остеопат</strong> ищет и устраняет причину смещения. В его
          поле зрения — весь организм. Задача остеопата — «поставить на место»
          орган, чтобы он получал должное питание и работал правильно
        </p>
        <p>
          Приём остеопата начинается с выявления и устранения причины
          заболевания, а приём мануального терапевта — это работа над
          облегчением симптомов
        </p>
        <p>
          Я, в своей практике, совмещаю оба подхода: работаю над выявлением
          причины, устраняю болевой синдром, а затем и саму причину проблемы
        </p>
      </div>
      <div className="col-span-3 flex items-center justify-center my-auto ">
        <Timeline
          mode={"left"}
          className="custom-timeline"
          items={[
            {
              label: "Диагностика",
              children: "Оценка осанки, мышечного тонуса, подвижности суставов",
              dot: (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#F0F8FF",
                    boxShadow: "0 0 0 2px #003E75",
                  }}
                />
              ),
            },
            {
              label: "Коррекция",
              children:
                "Работа с позвоночником, суставами, внутренними органами через мануальные техники",
              dot: (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#F0F8FF",
                    boxShadow: "0 0 0 2px #003E75",
                  }}
                />
              ),
            },
            {
              label: "Рекомендации",
              children: "Упражнения и советы для закрепления результата",
              dot: (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#F0F8FF",
                    boxShadow: "0 0 0 2px #003E75",
                  }}
                />
              ),
            },
            {
              label: "Длительность сеанса",
              children: "20-30 минут",
              dot: (
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#F0F8FF",
                    boxShadow: "0 0 0 2px #003E75",
                  }}
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Healline;
