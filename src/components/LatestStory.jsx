import React from "react";
import storyImg from "../../public/storyImg.png";
import Image from "next/image";
import { FaBookmark } from "react-icons/fa";
const LatestStory = () => {
  const storyData = [
    {
      id: 1,
      image: "/storyImg.png", // Replace with the path to your image
      title: "Budget Travel",
      description: "How to travel in Marrakesh on a budget",
      date: "How to travel in Marrakesh on a budget",
    },
    {
      id: 2,
      image: "/storyImg.png", // Replace with the path to your image
      title: "Budget Travel",
      description: "How to travel in Marrakesh on a budget",
      date: "How to travel in Marrakesh on a budget",
    },
    {
      id: 3,
      image: "/storyImg.png", // Replace with the path to your image
      title: "Budget Travel",
      description: "How to travel in Marrakesh on a budget",
      date: "How to travel in Marrakesh on a budget",
    },
  ];
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <h1 className="text-3xl text-[#3D3A49] font-medium mb-4">
        Explore our latest story
      </h1>
      <div className="flex flex-col md:flex-row ">
        {/* First part with an image */}
        <div className=" relative md:w-1/2 ">
          <img
            className="w-full h-[500px] rounded-xl "
            src="/cardimg.png"
            alt="Section Image"
          />
          <div className="absolute bottom-0  left-0 right-0  text-white p-4 mx-5">
            <h3 className="text-[18px]">Trips and Advice</h3>
            <h1 className="text-[28px]">
              The 8 best places to visit in Singapore
            </h1>
            <p className="text-[#8A8781]">Nov 2, 2023 | 7 Min Read</p>
          </div>
           
                <span className="absolute top-5 right-5 text-[18px] text-[#3D3A49] bg-white p-3 rounded-full">
                  <FaBookmark />
                </span>
             
        </div>

        <div className=" h- md:w-1/2 mt-8 md:mt-0 md:ml-8 ">
          {storyData?.map((data) => (
            <div className="bg-[#F0F7FC] p-3 flex  justify-between  gap-4 mb-3">
              <div className="flex  gap-10 items-center">
                <div>
                  <Image
                    src={data.image}
                    alt="story image"
                    className="w-180px] h-[130px]"
                    width={180}
                    height={130}
                  />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-[#3D3A49] text-xl font-semibold mb-2">
                    {data.title}
                  </h3>
                  <h1 className="text-xl text-[#13406B] font-bold mb-2">
                    {data.description}
                  </h1>
                  <p className="text-base text-[#8A8781]">{data.date}</p>
                </div>
              </div>

              <div>
                <p className="text-[18px] text-white bg-[#3D3A49] p-3 rounded-full">
                  <FaBookmark />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestStory;
