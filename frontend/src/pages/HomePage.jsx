import React, { useState } from 'react';
import LeaderboardBar from '../components/LeaderboardBar';
import NavigationBar from '../components/NavigationBar';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function HomePage() {
  const [Description, setDescription] = useState(0);

  return (
    <div className="w-full bg-neutral-200 bg-cover min-h-full py-4 ">
      <NavigationBar />
      <div className="flex items-center  justify-center">
        <div className="w-[90vw] h-[90vh] gap-x-4 text-white rounded-3xl flex items-start my-8 ">
          <div className="bg-white w-[80vw] h-[80vh] rounded-lg flex items-center flex-col">
            <div className="bg-[url('/logo.png')] w-28 h-28 bg-cover my-4" />
            <div className="text-neutral-900 font-semibold text-3xl">Language Quiz Web App</div>
            <div className="flex items-center">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-[20rem] h-[16rem] rounded-3xl overflow-hidden my-4"
                onActiveIndexChange={(e) => {
                  setDescription(e.activeIndex);
                }}>
                <SwiperSlide className=" bg-neutral-500 bg-center bg-cover bg-[url('/swiper1.jpg')]" />
                <SwiperSlide className=" bg-neutral-500 bg-center bg-cover bg-[url('/swiper2.jpg')]" />
                <SwiperSlide className=" bg-neutral-500 bg-center bg-cover bg-[url('/swiper3.jpg')]" />
              </Swiper>
              <div></div>
            </div>
          </div>
          <LeaderboardBar
            list={[
              { name: 'Mikoto', score: 240 },
              { name: 'Mikail', score: 210 },
              { name: 'Mikoto2', score: 190 },
              { name: 'Mikail2', score: 180 },
              { name: 'Mikoto3', score: 155 },
              { name: 'Mikail3', score: 135 }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
