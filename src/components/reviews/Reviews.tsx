"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Екатерина Смирнова",
    message:
      "Долго мучилась с болью в спине, но после сеанса у Артёма почувствовала значительное облегчение. Спасибо за профессионализм!",
  },
  {
    name: "Алексей Кузнецов",
    message:
      "После тренировки повредил спину, думал, что всё надолго. Артём помог восстановиться всего за пару сеансов. Рекомендую!",
  },
  {
    name: "Ольга Васильева",
    message:
      "Ребёнок жаловался на боли в шее, записались на приём. Всё объяснили, помогли – боль ушла. Очень благодарны!",
  },
  {
    name: "Игорь Михайлов",
    message:
      "Работаю за компьютером, постоянные боли в шее и голове. После приёма у Артёма чувствую себя намного лучше.",
  },
  {
    name: "Марина Романова",
    message:
      "Мучилась с мигренями несколько лет. После нескольких сеансов заметила, что приступы стали реже. Спасибо!",
  },
  {
    name: "Андрей Петров",
    message:
      "После аварии мучился с болями в колене. Думал, что не смогу снова вернуться к спорту, но Артём быстро восстановил меня. Спасибо огромное!",
  },
  {
    name: "Татьяна Иванова",
    message:
      "У меня хронический остеохондроз. После нескольких сеансов с Артёмом состояние улучшилось, боль почти ушла. Очень рекомендую!",
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
            <div className="mb-8 mx-auto">
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
