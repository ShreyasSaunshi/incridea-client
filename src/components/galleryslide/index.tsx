import { FC, useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import BlurImage from '../blurImage';
import { baseImageUrl } from '@/src/utils/url';

type GalleryProps = {
  title: string;
  next: string;
  prev: string;
  imgArr: string[];
};

const GallerySlide: FC<GalleryProps> = ({ title, next, prev, imgArr }) => {
  const [active, setActive] = useState<number>(0);
  const [activeImg, setActiveImg] = useState<string>('');

  useEffect(() => {
    setActiveImg(imgArr[active]);
  }, [active, imgArr]);

  return (
    <div
      id={title}
      className="snap-start flex flex-col min-h-screen w-full relative"
    >
      <div className={`relative mt-32 titleFont`}>
        <h1 className="text-6xl text-center">{title}</h1>
        <h2 className="text-[150px] outline-text text-center absolute w-full -translate-y-32 opacity-25">
          {title}
        </h2>
      </div>

      <div className="absolute top-2/3 sm:top-1/2 left-1/2 opacity-40 -translate-x-1/2 -translate-y-2/3 sm:-translate-y-1/3 w-[60%] h-[60%] bg-black skew-x-0 sm:skew-x-12 overflow-hidden">
        <Image
          fill
          src={baseImageUrl + '/gallery/' + activeImg}
          alt="incridea"
          className="skew-0 sm:-skew-x-12 scale-110 object-cover object-center"
          priority
        />
      </div>
      <div className="flex max-w-5xl sm:max-w-full h-[700px] absolute left-1/2 top-24 -translate-x-1/2 sm:translate-y-6">
        <Swiper
          mousewheel={true}
          autoplay={true}
          slidesPerView={3}
          onSlideChange={(cur) => setActive(cur.realIndex)}
          centeredSlides={true}
          speed={500}
          modules={[Mousewheel, Autoplay]}
        >
          {imgArr?.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className={`flex h-full w-full items-center justify-center ${
                  active === index ? 'z-30' : 'z-0'
                }`}
              >
                <div
                  className={`flex group hover:cursor-pointer h-[175px] min-w-[250px] relative overflow-hidden ${
                    active === index
                      ? 'scale-[1.5] lg:scale-[2] -rotate-90'
                      : 'scale-75 rotate-0'
                  } transition-all duration-500 ease-in-out`}
                >
                  <div
                    className={`flex h-[250px] w-[250px] absolute ${
                      active === index ? 'rotate-90' : 'rotate-0'
                    }`}
                  >
                    <BlurImage
                      src={baseImageUrl + '/gallery/' + img}
                      alt="incridea"
                      className={`object-cover object-center`}
                      fill
                      priority
                    />
                  </div>
                  <div
                    className={`h-full w-full absolute top-0 left-0 ${
                      active === index ? 'bg-transparent' : 'bg-black/50'
                    } transition-all duration-500 ease-in-out justify-center items-center`}
                  >
                    {/* <h1 className={`${active===index ? 'block' : 'hidden' } text-xl`} >Dance</h1> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full absolute sm:bottom-32 bottom-14 justify-between px-8 lg:px-20 text-4xl sm:text-5xl">
        <a
          href={`#` + prev}
          className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-transform duration-300"
        >
          <BsChevronUp />
        </a>
        <a
          href={`#` + next}
          className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-transform duration-300"
        >
          <BsChevronDown />
        </a>
      </div>
    </div>
  );
};

export default GallerySlide;
