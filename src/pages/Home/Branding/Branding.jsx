import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Branding.css";
const Branding = () => {
  const [sliderImg, setSliderImg] = useState([]);
  useEffect(() => {
    fetch("brandingSection.json")
      .then((res) => res.json())
      .then((data) => setSliderImg(data));
  }, []);
  return (
    <section className="brandingMainSection">
      <div className="titleContainer flex flex-col text-center  text-5xl  ">
        <h1 className="bSectionTitle text-center text-3xl md:text-4xl lg:text-5xl font-bold opacity-70">
          Our Partner
        </h1>

        <span className="bg-[#895af6] w-40 h-1 mx-auto mt-4"></span>
      </div>
      <div className="brandingContainer px-4">
        <Swiper
          Infinity={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderImg.map((singleImg) => (
            <SwiperSlide className="mb-8 py-8" key={singleImg._id}>
              <img
                className="brandingImg bg-white transition-[0.2s]"
                src={singleImg.picture}
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="brandingCounter ">
          <div>
            <CountUp end={12} />
            <span>K+</span>
            <br />
            <p className="countInfo">Trusted Company</p>
          </div>
          <div>
            <CountUp end={1.5} />
            <span>M+</span>
            <br />
            <p className="countInfo">Users</p>
          </div>
          <div>
            <CountUp end={25} />
            <span>K+</span>
            <br />
            <p className="countInfo">Daily Posts</p>
          </div>
          <div>
            <CountUp end={1} />
            <span>K+</span>
            <br />
            <p className="countInfo">Employe</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branding;
