import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import img14 from "../../assets/c1.jpg"
import img19 from "../../assets/c2.jpg"
import img20 from "../../assets/c3.jpg"
import img21 from "../../assets/c5.jpg"
import productImage1 from "../../assets/wo1.webp";
import productImage3 from "../../assets/wo3.webp";
import img23 from "../../assets/amelia.webp"
import img24 from "../../assets/cloud nine.webp"
import img25 from "../../assets/crop top 45.webp"
import img26 from "../../assets/t1.webp"
import img27 from "../../assets/T2.webp"
import img28 from "../../assets/T3.webp"
import img29 from "../../assets/T4.webp"

function Recently() {
    return ( 
        <section>
            <hr className="block my-4 border-gray-600 " />
      

      <div className='p-5 '>
                <p className="relative text-xl font-bold text-center ">
                  RECENTLY VIEWED PRODUCTS
                </p>

            </div>
            <Swiper 
                modules={[Navigation]}
                spaceBetween={0}
                slidesPerView={1} 
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                    768: {
                    slidesPerView: 2,
                  
                    },
                    1024: {
                    slidesPerView: 3,
                   
                    },
                    1280: {
                    slidesPerView: 4,
                   
                    },
                }}
               
            >
            <div className="flex flex-col items-center justify-center gap-8 ">
                <SwiperSlide>
                <div className="relative w-[300px] h-[520px] flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={productImage1}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">SCYLLA ZELUS</p>
                    <p className="text-sm font-bold text-center text-gray-600">Victory vault Club Tumbler - Black</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 6,500.00</p>
                    <img className="mx-auto mt-2 rounded-full w-9 h-9 " src={img14} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px] flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={img23}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">KELLY FELDER</p>
                    <p className="text-sm font-bold text-center text-gray-600">Amelia Snap Eyelet Detail Long</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 2,890.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img19} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px]  flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={productImage3}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">SCYLLA ZELUS</p>
                    <p className="text-sm font-bold text-center text-gray-600">Cloud Nine Oversized Pant - White</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 4,990.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img20} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px]  flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={img27}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">KELLY FELDER</p>
                    <p className="text-sm font-bold text-center text-gray-600">All Your SleeveLess Crop Top - Light Green</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 2,490.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img21} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px] flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={img26}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">SCYLLA ZELUS</p>
                    <p className="text-sm font-bold text-center text-gray-600">Printed Tee SCY Range - Red</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 4,000.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img27} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px] b flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={img25}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">SCYLLA ZELUS</p>
                    <p className="text-sm font-bold text-center text-gray-600">Printed Tee SCY Range - Purple</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 4,000.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img24} alt="img" />
                </div>
                </SwiperSlide>

                <SwiperSlide>
                <div className="relative w-[300px] h-[520px] flex flex-col items-center justify-center mx-auto md:ml-0">
                    <div className="relative group">
                    <img
                        className="w-[270px] h-[380px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                        src={img28}
                        alt="WORKWEAR"
                    />
                    <Link
                        to="/new-page"
                        className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                    >
                        QUICK ADD
                    </Link>
                    </div>
                    <p className="p-2 text-sm text-center text-gray-600">SCYLLA ZELUS</p>
                    <p className="text-sm font-bold text-center text-gray-600">Victory vault Club Hoodie - Black</p>
                    <p className="text-sm font-bold text-center text-gray-600">RS 8,000.00</p>
                    <img className="mx-auto ml-40 rounded-full w-9 h-9" src={img29} alt="img" />
                </div>
                </SwiperSlide>
            </div>

            <div className="text-xs text-black swiper-button-prev hover:text-black"></div>
            <div className="text-xs text-black swiper-button-next hover:text-black"></div>
            </Swiper>
            <br />
            <br />
        </section>
     );
}

export default Recently;