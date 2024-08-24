import { useGSAP } from "@gsap/react"
import { rightImg, watchImg } from "../utils"
import gsap from "gsap"
import VideoCarousel from "./VideoCarousel"

function Hightlights() {
    useGSAP(()=>{
        gsap.to(".title",{opacity:1,y:0,duration:1})

        gsap.to(".vv",{opacity:1,y:0,duration:1,stagger:0.5})
    })
  return (
    <div className="bg-zinc sm:py-32 py-20 sm:px-14 px-5 w-screen overflow-hidden  mx-auto">
        <div className="flex items-end justify-between w-full max-w-[1200px] mx-auto">
            <h1 className="title text-gray-400 lg:text-6xl md:text-5xl text-3xl translate-y-20  ">Go to Hightlights</h1>
            <div className=" flex flex-row items-center md:gap-6 lg:gap-8 gap-2 ">
                <div className="flex items-center gap-1 cursor-pointer vv translate-y-20">
                    <h1 className="text-blue-600 text-md ">Watch the film</h1>
                    <img src={watchImg} alt="watch" width={14} height={14}/>
                </div>
                <div className="flex items-center gap-1 cursor-pointer  vv translate-y-20">
                    <h1 className="text-blue-600 text-md">Watch the film</h1>
                    <img src={rightImg} alt="watch" width={8} height={8}/>
                </div>
            </div>
        </div>    
        {/* <VideoCarousel/>     */}
    </div>
  )
}

export default Hightlights