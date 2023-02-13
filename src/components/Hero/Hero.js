import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";
import heroPhotoOne from "../../assets/images/hero-photo-one.svg";
import heroPhotoTwo from "../../assets/images/hero-photo-two.svg";
import heroPhotoThree from "../../assets/images/hero-photo-three.svg";

const Hero = () => {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0">
      <div
        className="p-7 py-9 h-screen md:h-[83vh] md:flex md:items-center md:gap-14 relative bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${heroPhotoThree})` }}
      >
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-white font-bold">
            IMAGINE A PLACE...
          </h1>
          <h2 className="text-white text-lg font-light tracking-wide lg:max-w-3xl w-full">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
            <button className="bg-white w-60 font-medium flex items-center justity-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
              {" "}
              <ArrowDownTrayIcon className="w-6 mr-2" /> Download for Mac
            </button>
            <button className="bg-gray-900 text-white w-72 font-medium flex items-center justity-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src={heroPhotoTwo}
            alt=""
            className="absolute -left-20 mt-16 sm:-left-44 md:hidden inline-block"
          />
          <img src={heroPhotoOne} alt="" className="hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
