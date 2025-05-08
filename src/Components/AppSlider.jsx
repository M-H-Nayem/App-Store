// AppSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import GameApp from "./GameApp";
import { Link } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";
import { use } from "react";
import { AuthContext } from "../AuthProvider";

const AppSlider = () => {
  let { dataPromise } = use(AuthContext);
  let datas = use(dataPromise);
    let dt = datas[0];
    let dtf = datas[6]
    let dfs =datas[10]
//   console.log(dt);
  return (
    <div className="w-full max-w-4xl mx-auto my-10 ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-start my-7">
                50% OFF Today
              </h1>
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 justify-center items-center w-fit mx-auto">
                <div className="card bg-ima w-96 shadow-2xl rounded-2xl ">
                  <figure>
                    <img
                      className="w-[420px] h-[250px] p-3 rounded-3xl"
                      src={dt.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <img src={dt.bannar} alt="" />
                    <div className="flex  items-center justify-between gap-25 w-full">
                      <h2 className="text-3xl font-semibold">{dt.name}</h2>
                      <p className="text-black flex gap-3 items-center">
                        <FaDownload size={25} fill="blue" />
                        {dt.downloads}
                      </p>
                    </div>
                    <p className="text-[18px] font-semibold">
                      Developed By - {dt.developer}
                    </p>
                    <p>
                      {dt.description.slice(0, 100)}....{" "}
                      <Link to={`/cardDetails/${dt.id}`}>
                        <span className="text-red-500 underline">
                          Read More
                        </span>
                      </Link>
                    </p>
                    <div className="card-actions justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(parseInt(dt.rating))].map((_, index) => (
                          <p key={index}>
                            <FaStar fill="gold"></FaStar>
                          </p>
                        ))}
                      </div>

                      <Link to={`/cardDetails/${dt.id}`}>
                        <button className="btn bg-blue-400 border-none rounded-xl px-3 text-white text-[18px] font-semibold test-[19px]">
                          View More Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-start my-7">
                Most Downloded Today
              </h1>
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 justify-center items-center w-fit mx-auto">
                <div className="card bg-ima w-96 shadow-2xl rounded-2xl ">
                  <figure>
                    <img
                      className="w-[420px] h-[250px] p-3 rounded-3xl"
                      src={dtf.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <img src={dtf.bannar} alt="" />
                    <div className="flex  items-center justify-between gap-25 w-full">
                      <h2 className="text-3xl font-semibold">{dtf.name}</h2>
                      <p className="text-black flex gap-3 items-center">
                        <FaDownload size={25} fill="blue" />
                        {dtf.downloads}
                      </p>
                    </div>
                    <p className="text-[18px] font-semibold">
                      Developed By - {dtf.developer}
                    </p>
                    <p>
                      {dtf.description.slice(0, 100)}....{" "}
                      <Link to={`/cardDetails/${dtf.id}`}>
                        <span className="text-red-500 underline">
                          Read More
                        </span>
                      </Link>
                    </p>
                    <div className="card-actions justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(parseInt(dtf.rating))].map((_, index) => (
                          <p key={index}>
                            <FaStar fill="gold"></FaStar>
                          </p>
                        ))}
                      </div>

                      <Link to={`/cardDetails/${dtf.id}`}>
                        <button className="btn bg-blue-400 border-none rounded-xl px-3 text-white text-[18px] font-semibold test-[19px]">
                          View More Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-600 text-white text-xl p-8 rounded-xl text-center">
            <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold text-start my-7">
                Popular Worldwide
              </h1>
              <div className="grid lg:grid-cols-1 grid-cols-1 gap-8 justify-center items-center w-fit mx-auto">
                <div className="card bg-ima w-96 shadow-2xl rounded-2xl ">
                  <figure>
                    <img
                      className="w-[420px] h-[250px] p-3 rounded-3xl"
                      src={dfs.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <img src={dfs.bannar} alt="" />
                    <div className="flex  items-center justify-between gap-25 w-full">
                      <h2 className="text-3xl font-semibold">{dfs.name}</h2>
                      <p className="text-black flex gap-3 items-center">
                        <FaDownload size={25} fill="blue" />
                        {dfs.downloads}
                      </p>
                    </div>
                    <p className="text-[18px] font-semibold">
                      Developed By - {dfs.developer}
                    </p>
                    <p>
                      {dfs.description.slice(0, 100)}....{" "}
                      <Link to={`/cardDetails/${dfs.id}`}>
                        <span className="text-red-500 underline">
                          Read More
                        </span>
                      </Link>
                    </p>
                    <div className="card-actions justify-between items-center">
                      <div className="flex gap-1">
                        {[...Array(parseInt(dfs.rating))].map((_, index) => (
                          <p key={index}>
                            <FaStar fill="gold"></FaStar>
                          </p>
                        ))}
                      </div>

                      <Link to={`/cardDetails/${dfs.id}`}>
                        <button className="btn bg-blue-400 border-none rounded-xl px-3 text-white text-[18px] font-semibold test-[19px]">
                          View More Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default AppSlider;
