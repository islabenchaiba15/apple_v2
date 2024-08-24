import React from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Chip() {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="mx-auto relative sm:py-32 py-20 px-5 sm:px-10 bg-black  ">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center  justify-center  my-20">
          <img id="chip" src={chipImg} alt="chip" width={200} />
        </div>
        <div className="flex flex-col gap-4 md:gap-12 flex-center items-center ">
          <h2 className="text-2xl font-semibold md:text-4xl lg:text-7xl text-center text-white ">
            A17 Pro chip.
            <br />A monster win for gaming.
          </h2>
          <p className="text-center text-gray-400 text-sm md:text-md lg:text-lg">
            it is here the biggest redesign in the hostory of apple GPUs.
          </p>
        </div>
        <div className="relative flex flex-col md:mt-20 mt-10  items-center justify-center ">
          <img src={frameImg} alt="frame" className="z-10" />
          <div className="absolute z-0 w-[96%] h-[96%] top-3">
            <video
              id="explore"
              className={"pointer-events-none rounded-3xl"}
              muted
              autoPlay
            >
              <source src={frameVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-gray-400 text-sm md:text-md lg:text-lg mt-2 font-semibold">
            Honkai:Star Rail
          </p>

          <div className="flex gap-5 flex-col sm:flex-row justify-between w-full mt-10">
            <div className="flex flex-col gap-5 sm:w-1/2 justify-between">
                <p className=" text-gray-400 font-normal text-sm lg:text-lg">
                  A17 Pro is an entirely new class of iphone chip that delivers
                  our{" "}
                  <span className="font-bold text-sm lg:text-lg text-white">
                    best graphics performance by far
                  </span>
                </p>
                <p className=" text-gray-400 text-sm font-normal lg:text-lg">
                  Titanium has one of the best stength to weigt ratios of any
                  metal making these our{" "}
                  <span className="font-bold lg:text-lg text-sm text-white">
                    lightest Pro models ever.{" "}
                  </span>
                  You will notice diference the mment yu pick up one up
                </p>
            </div>
            <div className="flex sm:w-1/2 flex-col gap-4 items-start">
                <p className="text-gray-400 font-normal text-sm lg:text-lg">
                    New
                </p>
                <p className="text-3xl md:text-4xl font-bold lg:text-5xl ">
                    Pro-class GPU
                </p>
                <p className="text-gray-400 font-normal text-sm lg:text-lg">
                    With 6 cores
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chip;
