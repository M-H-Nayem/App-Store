import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { Link } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";

const RecomendedApp = () => {
  let { dataPromise } = use(AuthContext);

  let datas = use(dataPromise);

  let [data, setData] = useState([]);

  // console.log(datas);

  useEffect(() => {
    let filteredData = datas.filter((data) => data.recommended);
    setData(filteredData);
  }, [datas]);
  // console.log(data);
  return (
    <div>
      <div className="w-11/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-start my-7">
          Recomended Apps For You
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 justify-center items-center w-fit mx-auto">
          {data.map((dt) => (
            <div key={dt.id}>
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
                      <span className="text-red-500 underline">Read More</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecomendedApp;
