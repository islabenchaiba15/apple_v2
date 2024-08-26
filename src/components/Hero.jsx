import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect } from "react";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", {
      scrollTrigger: {
        trigger: "#hero",
        start: "20px 80%",
        toggleActions: "restart pause restart pause ",
      },
      opacity: 1,
      delay: 2,
    });
    gsap.to("#col", {
      scrollTrigger: {
        trigger: "#col",
        start: "20px 80%",
        toggleActions: "restart pause restart pause ",
      },
      opacity: 1,
      delay: 2,
      y: -50,
    });
  }, []);
  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideo);
    return () => {
      window.removeEventListener("resize", handleVideo);
    };
  }, []);
  return (
    <div className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="w-full h-5/6 flex flex-col items-center justify-center">
        <p
          id="hero"
          className="text-3xl opacity-0 text-center font-semibold text-gray-300 "
        >
          Iphone 15 pro
        </p>
        <div className="w-9/12">
          <video className={"pointer-events-none mt-10"} muted autoPlay>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div id="col" className="flex flex-col items-center gap-4 opacity-0 mt-2">
        <button className="btn ">Buy</button>
        <p className="font-normal text-xl">from 199$/month or 999$</p>
      </div>
    </div>
  );
}

export default Hero;
