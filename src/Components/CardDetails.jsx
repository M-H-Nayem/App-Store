import React, { use, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { AuthContext } from "../AuthProvider";
import { FaStar, FaUserCircle } from "react-icons/fa";

const CardDetails = () => {

  
  let [card, setCard] = useState([]);
  let [install, setInstall] = useState(false);
  let [review, setReview] = useState([]);
  let [comment, setComment] = useState(false);

  let { dataPromise,user } = use(AuthContext);

  let datas = use(dataPromise);
  let { id } = useParams();

  useEffect(() => {
    let findedData = datas.find((data) => data.id === id);
    setCard(findedData);


  }, [datas, id]);

  let handleInstall = () => {
    setComment(true);
    setInstall(!install);
  };

  let handleReview = (e) => {
    e.preventDefault();
    let comment = e.target.comment.value;
    let rating = e.target.rating.value;
    if (rating<0) {
      alert("Provide a positive rating value")
      return
    }
    else if (rating>5) {
      alert("Provide a Value between 0 to 5")
      return
    }
    else {
      setReview([{
        comment,
        rating,
      }]);
    }
    setComment(false);

  };


  return (
    <>
      <div className="grid grid-cols-5 items-center justify-center gap-5">
        <div className="w-5/12 mx-auto rounded-4xl col-span-5  bg-gray-200 my-10 shadow-2xl shadow-black relative">
          <img
            className="w-full h-[350px] rounded-t-2xl  mx-auto opacity-20"
            src={card.thumbnail}
            alt=""
          />
          <img
            className="w-[400px] h-[210px] rounded-2xl z-10 opacity-100 absolute top-20 right-37 mx-auto "
            src={card.banner}
            alt=""
          />
          <div className="p-10">
            <h1 className="text-[30px] font-bold">{card.name}</h1>
            <h1 className="text-[20px] underline font-semibold mb-1">
              Developed By - {card.developer}
            </h1>
            <p className="text-[18px]"> {card.description}</p>

            <div className="flex justify-between">
            <Link to='/'><button
              className="btn mt-5 border-none px-5 rounded-xl bg-blue-500 text-white text-xl"
            
            >
              Back to Home
              </button></Link>
              
            <button
              className="btn mt-5 border-none px-5 rounded-xl bg-blue-500 text-white text-xl"
              onClick={handleInstall}
            >
              {install ? "Uninstall" : "Install"}
            </button>
            </div>
            <div className="bg-white rounded-2xl mt-5">
              {comment ? (
                <form className="space-y-2 p-7" onSubmit={handleReview}>
                  <p className="text-[18px] mt-5">Write your comment Here</p>
                  <input
                    className="bg-white w-full rounded-xl px-3 p-1"
                    type="text"
                    name="comment"
                    placeholder="Comment"
                    required
                  />
                  <br />
                  <p className="text-[18px]">Rating</p>
                  <input
                    className="bg-white w-full rounded-xl px-3 p-1"
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    required
                  />
                  <br />
                  <button
                    className="btn bg-blue-600 border-none px-5 rounded-xl text-[18px] text-white
                "
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              ) : (
                ''
              )}
            </div>


            <div className="flex mt-5 w-full">
              {card.reviews?.map((review, index) => (
                <div key={index} className="bg-white p-5 rounded-xl w-full">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[22px] flex items-center gap-2 ">
                      <FaUserCircle size={25} fill="gold"></FaUserCircle>
                      {review.user}
                    </p>
                    <div className="flex ">
                      {[...Array(review.rating)].map((_, index) => (
                        <p key={index}>
                          <FaStar fill="gold"></FaStar>
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="p-3 bg-gray-100 rounded-xl">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="flex mt-5 w-full">
              {review?.map((rvw, index) => (
                <div key={index} className="bg-white p-5 rounded-xl w-full">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[22px] flex items-center gap-2 ">
                      <FaUserCircle size={25} fill="gold"></FaUserCircle>{user.email}
                     
                    </p>
                    <div className="flex ">
                      {[...Array(parseInt(rvw.rating))].map((_, index) => (
                        <p key={index}>
                          <FaStar fill="gold"></FaStar>
                        </p>
                      ))}
                    </div>
                  </div>
                  <p className="p-3 bg-gray-100 rounded-xl">{rvw.comment}</p>
                </div>
              ))}
            </div>
            {/* <p>{review.comment}</p> */}

           
          </div>
        </div>

        {/* <div className="col-span-2">
          <div className="flex">
            {card.reviews?.map((review, index) => (
              <div key={index} className="bg-gray-200 p-8 rounded-xl">
                <div className="flex items-center justify-between">
                  <p className="text-[22px] flex items-center gap-2 mb-5"><FaUserCircle size={25} fill="gold"></FaUserCircle> {review.user}</p>
                  <div className="flex ">
                    {[...Array(review.rating)].map((_, index) => (
                      <p key={index}>
                        <FaStar fill="gold"></FaStar>
                      </p>
                    ))}
                  </div>
                </div>
                <p className="p-3 bg-white rounded-xl">{review.comment}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default CardDetails;
