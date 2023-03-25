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
        <div className="w-[90vw] min-h-[90vh] gap-x-4 text-white rounded-3xl flex items-start my-8 ">
          <div className="bg-white md:w-[80%] w-[100%] min-h-[80vh] rounded-lg flex items-center flex-col">
            <div className="bg-[url('/logo.png')] w-28 h-28 bg-cover my-4" />
            <div className="text-neutral-900 font-semibold text-3xl md:text-left text-center">
              Language Quiz Web App
            </div>
            <div className="flex flex-col md:flex-row items-center w-[80%] gap-x-4">
              <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="md:min-w-[20rem] md:min-h-[16rem] md:max-w-[20rem] md:max-h-[16rem] w-[90%] h-[16rem] rounded-3xl overflow-hidden my-4"
                onActiveIndexChange={(e) => {
                  setDescription(e.activeIndex);
                }}>
                <SwiperSlide className="w-[20rem] h-[16rem] bg-neutral-500 bg-center bg-cover bg-[url('/swiper1.jpg')]" />
                <SwiperSlide className="w-[20rem] h-[16rem] bg-neutral-500 bg-center bg-cover bg-[url('/swiper2.jpg')]" />
                <SwiperSlide className="w-[20rem] h-[16rem] bg-neutral-500 bg-center bg-cover bg-[url('/swiper3.jpg')]" />
              </Swiper>
              {Description == 0 ? (
                <div className="text-neutral-700 text-justify text-sm">
                  <p className="md:line-clamp-[12] line-clamp-none ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde non
                    exercitationem nisi accusamus facilis veritatis officia atque provident beatae?
                    Quasi cumque eaque cum ut a temporibus! Rem neque tenetur doloremque alias
                    expedita ut odio, non sunt reiciendis. Ex quo sunt magni, perferendis placeat ad
                    earum? Quasi, ex unde. Quaerat molestiae vitae sint, ea soluta distinctio
                    commodi ut perspiciatis veniam, laboriosam pariatur tenetur natus vero totam
                    debitis doloribus iusto enim, consequuntur adipisci. Pariatur et accusantium
                    incidunt consequuntur laboriosam temporibus itaque dolorum officia ut quam
                    voluptatum amet iusto aspernatur nemo omnis culpa iste dignissimos harum, labore
                    quos architecto? Veritatis consequuntur illo quibusdam dolor iure, unde cumque
                    minima, dolorem molestiae, fugit labore laborum odio error excepturi rem
                    possimus omnis voluptas nobis voluptates? Eligendi!
                  </p>
                </div>
              ) : Description == 1 ? (
                <div className="text-neutral-700 text-justify text-sm  ">
                  <p className="md:line-clamp-[12] line-clamp-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, animi dicta,
                    a porro magni ipsa laborum pariatur laudantium sunt, maiores nemo placeat ex
                    molestiae aut fugiat accusantium. Doloribus quis adipisci, excepturi cum aliquam
                    in nobis unde nesciunt beatae, ducimus animi ratione? Incidunt, esse? Nihil eum
                    ex qui similique quo quasi vero tempore dicta incidunt totam accusantium,
                    accusamus fugiat magni suscipit, quibusdam nesciunt voluptate illo reiciendis
                    perspiciatis facere sit aspernatur quas. Enim, reiciendis architecto minima quae
                    rem quasi impedit commodi libero nemo itaque doloremque autem, dignissimos
                    facilis, dolorum totam! Vitae consequuntur perferendis, labore, voluptatem quas
                    beatae et molestias, veritatis ea natus earum officiis dolore aspernatur?
                    Blanditiis ducimus ratione tenetur fugiat cum ea sequi vel at illum.
                  </p>
                </div>
              ) : Description == 2 ? (
                <div className="text-neutral-700 text-justify text-sm  ">
                  <p className="md:line-clamp-[12] line-clamp-none">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, perspiciatis
                    voluptatem architecto ut sapiente asperiores error illo expedita, voluptate
                    consequuntur commodi quas iure? Eum, quidem alias facere saepe consequatur
                    quaerat, repellendus doloremque a eaque, inventore nulla tenetur? Quisquam saepe
                    repellat nemo nostrum eum, excepturi dolorum iure corporis minima, accusantium
                    aut nulla quia harum, sed sit quibusdam ab sequi totam officiis inventore ut
                    nihil sint ex maiores. Sed recusandae, velit corporis neque sit voluptatem nulla
                    in earum nihil minima, ex perferendis. Delectus enim ipsam dolore ducimus labore
                    culpa architecto iste, perferendis quis iure, dolorem deserunt asperiores rerum
                    tempora accusantium! Odit impedit exercitationem rerum expedita maxime cumque
                    ipsum similique, quaerat, placeat ut suscipit et quasi sed. Minima id expedita
                    facere doloremque! Eum?
                  </p>
                </div>
              ) : null}
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
