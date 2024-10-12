import Header from "../../Components/Navigationbar/Header";
import NavBar from "../../Components/Navigationbar/NavBar";
import Footer from "../../Components/Footer/Footer";
import PhotoSlider from "../../Components/PhotoSlider/PhotoSlider";
import { Link } from "react-router-dom";
import img1 from "../../assets/Scylla_Cover.webp";
import img2 from "../../assets/AFTERPAY_Web_Banner.webp";
import img3 from "../../assets/kelly Felder.webp";
import img4 from "../../assets/scylla.webp";
import img5 from "../../assets/buller.webp";
import img6 from "../../assets/Jeans_940x.webp";
import img7 from "../../assets/50.webp";
import img8 from "../../assets/work.webp";
import img9 from "../../assets/linen.webp";
import img10 from "../../assets/casual.webp";
import img11 from "../../assets/wear2.webp";
import img12 from "../../assets/denim2.webp";
import img13 from "../../assets/linen2.webp";
import img14 from "../../assets/c1.jpg";
import img15 from "../../assets/midnight.webp";
import img16 from "../../assets/slice.webp";
import img17 from "../../assets/skirt.webp";
import img18 from "../../assets/blues.webp";
import img19 from "../../assets/c2.jpg";
import img20 from "../../assets/c3.jpg";
import img21 from "../../assets/c5.jpg";
import img22 from "../../assets/cup.webp";
import img23 from "../../assets/amelia.webp";
import img24 from "../../assets/cloud nine.webp";
import img25 from "../../assets/crop top 45.webp";
import img26 from "../../assets/t1.webp";
import img27 from "../../assets/T2.webp";
import img28 from "../../assets/T3.webp";
import img29 from "../../assets/T4.webp";
import img30 from "../../assets/tr1.webp";
// import img31 from "../Assets/tr2.webp"
import img32 from "../../assets/ar1.jpg";
import img33 from "../../assets/ar2.webp";
import img34 from "../../assets/ar4.jpg";
import img35 from "../../assets/ar5.webp";
import img36 from "../../assets/ar6.webp";
import img37 from "../../assets/ar7.jpg";
import img38 from "../../assets/ar8.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  return (
    <section>
      <div>
        <PhotoSlider />
      </div>
      <div class="flex flex-col items-center justify-center gap-8 mt-3 md:flex-row md:gap-4 xl:gap-6 ">
        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/contactUs">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img3}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              KELLY FELDER
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/scylla">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img4}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              SCYLLA ZELUS
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/Redvers">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img5}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              REDVERS BULLER
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/Denim">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img6}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              KELLY FELDER JEANS
            </span>
          </Link>
        </div>
      </div>

      <div class="flex flex-col items-center justify-center gap-8 mt-3 md:flex-row md:gap-4 xl:gap-6 ">
        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/sale">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img7}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              50% OFF EVERYTHING
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/workwear">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img8}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              WORKWEAR
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/linen">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img9}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              LINEN
            </span>
          </Link>
        </div>

        <div className="relative w-auto h-[400px] mt-1 ml-2 cursor-pointer overflow-hidden group">
          <Link to="/casual">
            <img
              className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              src={img10}
              alt="kellyfelder"
            />

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white hover:underline">
              CASUALS
            </span>
          </Link>
        </div>
      </div>

      <br />

      <div>
        <Link to="/contactUs">
          <img
            className="md:w-full md:h-auto w-auto h-[250px]"
            src={img1}
            alt="kellyfelder"
          />
        </Link>
      </div>

      <div className="p-5">
        <p className=" relative text-center font-bold text-xl text-black before:content-[''] before:absolute md:before:left-16 before:left-0  before:top-1/2 before:w-1/4 md:before:w-1/3 before:border-t before:border-black before:transform before:-translate-y-1/2 after:content-[''] after:absolute after:right-0 md:after:right-16 after:top-1/2 after:w-1/4 md:after:w-1/3 after:border-t after:border-black after:transform after:-translate-y-1/2">
          NEW ARRIVALS
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
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
        <div className="flex flex-col items-center justify-center gap-8 mt-8">
          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img22}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Victory vault Club Tumbler - Black
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 6,500.00
              </p>
              <img
                className="mx-auto mt-2 rounded-full w-9 h-9 "
                src={img14}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Amelia Snap Eyelet Detail Long
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 2,890.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img19}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img24}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Cloud Nine Oversized Pant - White
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,990.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img20}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                All Your SleeveLess Crop Top - Light Green
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 2,490.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img21}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Printed Tee SCY Range - Red
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img27}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Printed Tee SCY Range - Purple
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img24}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto md:ml-0">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Victory vault Club Hoodie - Black
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 8,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img29}
                alt="img"
              />
            </div>
          </SwiperSlide>
        </div>

        <div className="text-xs text-black swiper-button-prev hover:text-black"></div>
        <div className="text-xs text-black swiper-button-next hover:text-black"></div>
      </Swiper>

      <div>
        <Link to="/contactUs">
          <img
            className="md:w-full md:h-auto w-auto h-[250px]"
            src={img2}
            alt="kellyfelder"
          />
        </Link>
      </div>

      <div className="p-5">
        <p className=" relative text-center font-bold text-xl text-black before:content-[''] before:absolute md:before:left-16 before:left-0  before:top-1/2 before:w-1/4 md:before:w-1/3 before:border-t before:border-black before:transform before:-translate-y-1/2 after:content-[''] after:absolute after:right-0 md:after:right-16 after:top-1/2 after:w-1/4 md:after:w-1/3 after:border-t after:border-black after:transform after:-translate-y-1/2">
          TRENDING NOW
        </p>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
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
        <div className="flex flex-col items-center justify-center gap-8 mt-8">
          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img15}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Midnight Charcoal - Charcoal
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 7,990.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img14}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img16}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Denim Slice Crop Top - Light Blue
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,490.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img19}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img17}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Twilight Flare Skirt - Light Blue
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 6,690.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img20}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img18}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                maxi Blues - Light Blue
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 9,990.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img21}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img30}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                KELLY FELDER
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Cropped Charm - Light Blue
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 5,490.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img27}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Printed Tee SCY Range - Purple
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img24}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
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
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Printed Tee SCY Range - Green
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img25}
                alt="img"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full max-w-[350px] h-[620px] bg-white flex flex-col items-center justify-center mx-auto">
              <div className="relative group">
                <img
                  className="w-[330px] h-[460px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img29}
                  alt="WORKWEAR"
                />
                <Link
                  to="/new-page"
                  className="absolute bottom-0 left-0 w-full py-2 text-sm font-semibold text-center text-black transition-opacity duration-300 bg-white opacity-0 group-hover:opacity-100"
                >
                  QUICK ADD
                </Link>
              </div>
              <p className="p-2 text-sm text-center text-gray-600">
                SCYLLA ZELUS
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                Printed Tee SCY Range - Dark Blue
              </p>
              <p className="text-sm font-bold text-center text-gray-600">
                RS 4,000.00
              </p>
              <img
                className="mx-auto ml-40 rounded-full w-9 h-9"
                src={img22}
                alt="img"
              />
            </div>
          </SwiperSlide>
        </div>

        <div className="text-xs text-black swiper-button-prev hover:text-black"></div>
        <div className="text-xs text-black swiper-button-next hover:text-black"></div>
      </Swiper>

      <div className="p-5">
        <p className=" relative text-center font-bold text-xl text-black before:content-[''] before:absolute md:before:left-0 before:left-0  before:top-1/2 before:w-8 md:before:w-1/3 before:border-t before:border-black before:transform before:-translate-y-1/2 after:content-[''] after:absolute after:right-0 md:after:right-16 after:top-1/2 after:w-8f md:after:w-1/3 after:border-t after:border-black after:transform after:-translate-y-1/2">
          FEATURED ON KELLY FELDER
        </p>
      </div>
      <div class="flex flex-col items-center justify-center gap-8 mt-8 md:flex-row md:gap-4 xl:gap-6 ">
        <div className="relative w-[420px] h-[840px] bg-white ml-5">
          <Link to="workwear">
            <img
              className="w-[400px] h-[520px] mt-5 ml-4 transition-transform duration-300 ease-in-out hover:scale-105 md:ml-0 cursor-pointer"
              src={img11}
              alt="WORKWEAR"
            />
          </Link>

          <Link to="/workwear">
            <p className="p-2 m-2 text-lg font-bold text-center text-gray-600 cursor-pointer hover:underline">
              WORKWEAR
            </p>
          </Link>

          <p className="p-2 m-2 text-sm text-center text-gray-600">
            Discover our Workwear Collection, designed to combine
            professionalism with contemporary styles. Each piece is thoughtfully
            designed to provide a polished look suitable for any work
            environment, allowing you to transition seamlessly from office hours
            to after-work events. Elevate your wardrobe with timeless essentials
            and modern must-haves that empower you to look and feel your best
            every day.
          </p>
          <Link
            className="flex items-center justify-center w-32 h-8 ml-40 font-bold text-center text-white bg-black md:absolute hover:text-black hover:bg-white md:ml-40"
            to="/contactUs"
          >
            QUICK ADD
          </Link>
        </div>

        <div class="relative w-[420px] h-[840px] bg-white  ">
          <Link to="/Denim">
            <img
              className="w-[400px] h-[520px] mt-5 ml-6 transition-transform duration-300 ease-in-out hover:scale-105 md:ml-0 cursor-pointer"
              src={img12}
              alt="DENIM"
            />
          </Link>

          <Link to="/Denim">
            <p className="p-2 m-2 text-lg font-bold text-center text-gray-600 cursor-pointer hover:underline">
              DENIM
            </p>
          </Link>

          <p className="p-2 m-2 text-sm text-center text-gray-600">
            Where timeless style meets modern edge. Our collection features
            meticulously crafted pieces that combine comfort, durability, and
            chic designs. Experience the perfect blend of fashion and function
            with our standout denim collection.
          </p>
          <Link
            className="flex items-center justify-center w-32 h-8 ml-40 font-bold text-center text-white bg-black hover:text-black hover:bg-white md:ml-40"
            to="/contactUs"
          >
            QUICK ADD
          </Link>
        </div>

        <div class="relative w-[420px] h-[840px]  bg-white  ">
          <Link to="/linen">
            <img
              className="w-[400px] h-[520px] mt-5 ml-6 transition-transform duration-300 ease-in-out hover:scale-105 md:ml-0 cursor-pointer"
              src={img13}
              alt="LINEN"
            />
          </Link>

          <Link to="/linen">
            <p className="p-2 m-2 text-lg font-bold text-center text-gray-600 cursor-pointer hover:underline">
              LINEN
            </p>
          </Link>

          <p className="p-2 m-2 text-sm text-center text-gray-600 ">
            Embrace effortless styles and comfort with our exquisite linen
            pieces. Crafted from high-quality linen, each item offers a relaxed
            fit with a sophisticated edge. Explore timeless designs in a palette
            of natural hues and vibrant colors, ideal for both casual days and
            elegant evenings.
          </p>
          <Link
            className="flex items-center justify-center w-32 h-8 ml-40 font-bold text-center text-white bg-black md:absolute hover:text-black hover:bg-white md:ml-40"
            to="/"
          >
            QUICK ADD
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className=" bg-slate-100">
        <div>
          <p className="relative p-4 text-xl font-bold text-center text-black ">
            #Kellyfelderangels
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
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
          <div className="flex flex-col items-center justify-center gap-8 mt-8">
            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img32}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img33}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img34}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img35}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img36}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img37}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-[320px] h-[360px] bg-white mx-auto">
                <img
                  className="w-[320px] h-[360px] mt-5 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
                  src={img38}
                  alt="WORKWEAR"
                />
              </div>
            </SwiperSlide>
          </div>

          <div className="text-xs text-black swiper-button-prev hover:text-black"></div>
          <div className="text-xs text-black swiper-button-next hover:text-black"></div>
        </Swiper>

        <br />
      </div>
      <br />
      <br />
    </section>
  );
}

export default Home;
