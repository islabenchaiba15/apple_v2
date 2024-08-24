import gsap from "gsap";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/all";

function Features() {
    const videoRef=useRef(null)
    gsap.registerPlugin(ScrollTrigger)
 useGSAP(()=>{
    gsap.to("#title", {
        opacity: 1,
        y: 0,
      });
    
      gsap.to("#image1", {
        scrollTrigger:{
            trigger:'#image1',
            toggleActions:'restart reverse restart reverse ',
            start:'top 85%',
            markers:true


        },
        opacity: 1,
        y: 0,
        ease:'power2.in',
        scale:1
      });
      gsap.to("#image2", {
        scrollTrigger:{
            trigger:'#image2',
            toggleActions:'restart reverse restart reverse ',
            start:'top 85%',
            markers:true

        },
        opacity: 1,
        y: 0,
        ease:'power2.in',
        scale:1

      });
      gsap.to('#explore',{
        scrollTrigger:{
            trigger:'#explore',
            toggleActions:'play pause reverse restart',
            start:'10% bottom',

        },
        onComplete:()=>{
            videoRef.current.play()
        }
      })
 },[])
  return (
    <div className="w-full mx-auto px-5 md:px-10 py-32 md:py-20 bg-zinc-900 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <h1
          id="title"
          className="text-gray-400 lg:text-6xl md:text-5xl text-3xl translate-y-20  "
        >
          Explore the full story .
        </h1>
        <div className="flex flex-col items-center justify-between ">
          <div className="mt-32 mb-20 ml-24 flex flex-col gap-5 ">
            <h1 className="text-5xl lg:text:7xl font-semibold ">Iphone.</h1>
            <h1 className="text-5xl lg:text:7xl font-semibold">
              Forged in titanium.
            </h1>
          </div>
          <div className="flex flex-col gap-8 items-center w-full">
            <div className="relative h-[50vh] w-full  ">
              <video
              ref={videoRef}
              id="explore"
                className={
                  "pointer-events-none object-center w-full h-full object-cover"
                }
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row items-center pb-10 w-full">
              <div className="sm:h-[50vh] h-[30vh] w-full flex-1">
                <img
                  src={explore1Img}
                  alt="explore"
                  id="image1"
                  className="w-full scale-150 opacity-0 h-full object-cover object-center "
                />
              </div>
              <div className="h-[50vh] w-full flex-1 ">
                <img
                  src={explore2Img}
                  alt="explore2"
                  id="image2"
                  className="rounded-2xl scale-150 opacity-0 w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col gap-5 sm:flex-row justify-between w-full">
              <div className="sm:w-1/2">
                <p className=" text-gray-400 font-normal text-sm lg:text-lg">
                    Iphone 15 Pro is the <span className="font-bold text-sm lg:text-lg text-white">first iphone feature an aersapce-grade tittanium design ,</span> using the same alloy that spacecraft use for missions to mars 
                </p>
              </div>
              <div className="sm:w-1/2">
                <p className=" text-gray-400 text-sm font-normal lg:text-lg">
                    Titanium has one of the best stength to weigt ratios of any metal making these our <span className="font-bold lg:text-lg text-sm text-white" >lightest Pro models ever. </span>You will notice diference the mment yu pick up one up
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
