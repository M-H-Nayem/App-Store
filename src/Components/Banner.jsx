import React from "react";

const Banner = ({ datas }) => {

  return (
    <div>
      <div className="grid grid-cols-4">
        {datas.map((data) => (
            <div key={data.id}>
                <div>
                     {/* <p>{data.banner}</p> */}
                <img className="w-[400px] h-[250px] grid grid-cols-3 m-5 p-5" src={data.banner} alt="" />
                {/* <div className="bg-amber-400 "><img className="w-[400px] h-[250px] m-5 p-5" src={data.thumbnail} alt="" /></div> */}
               </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
