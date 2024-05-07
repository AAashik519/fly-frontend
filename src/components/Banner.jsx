import React from "react";
import bannerBg from "../assets/plane.png";
// import bannerBg1 from '../assets/plane.png'
const Banner = () => {
  return (
    <div
      className="relative bg-cover  h-64"
      style={{ backgroundImage: "url('/plane.png')" }}
    >
      <div className="max-w-[1200px] mx-auto pt-8">
        <div className=" ">
          <div className="text-white  ">
            <h1 className="text-4xl font-semibold mb-2">Discover Great Flight Deals . </h1>
            <p className="text-lg font-semibold">
            Book your Flight, Hotels and Desire Holiday Packages
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
