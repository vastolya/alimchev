"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Даниил, 28 лет, спортсмен",
    message:
      "На тренировке надорвал спину. Обычные массажисты не помогли. Артём — лучший мануальный терапевт в Красноярске! Уже после первого сеанса стало легче. Работает глубоко, а не поверхностно.",
  },
  {
    name: "Елена, 36 лет, бухгалтер",
    message:
      "После родов были боли в спине и шее. Обратилась к Артему — настоящий специалист по восстановительным техникам. Почувствовала облегчение уже на первом приеме!",
  },
  {
    name: "Артемий, 62 года, пенсионер",
    message:
      "Боли в суставах мешали жить. Сын записал к остеопату в Красноярске — к Артему. После пары сеансов стал двигаться легче, сплю без боли. Работает как врач, а не просто костоправ.",
  },
  {
    name: "Светлана, 42 года, менеджер",
    message:
      "Мучили мигрени и боли в шее. Артём нашёл причину и устранил её за два сеанса. Это не массаж, а глубокая работа. Рекомендую как остеопата в Красноярске.",
  },
  {
    name: "Мария, 55 лет, преподаватель",
    message:
      "Обратилась из-за боли в пояснице и ЖКТ. Приём мануального терапевта у Артема — точный, мягкий и с результатом. Эффект почувствовала сразу.",
  },
];

const Reviews = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper w-screen md:w-full "
        breakpoints={{
          320: { slidesPerView: 1 }, // Для маленьких экранов (мобильные)
          1024: { slidesPerView: 3 }, // Для десктопов
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index} className="text-base leading-5 px-5 md:px-0">
            <div className="mb-10 mx-auto">
              <div className="pb-2 font-semibold">{item.name}</div>
              <div>{item.message}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
