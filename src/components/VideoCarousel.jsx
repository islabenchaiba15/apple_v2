import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";

function VideoCarousel() {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;
  const [loadedData,isLoadedData]=useState([])
//   useEffect(()=>{
//     const currentProgress=0
//     let span=videoSpanRef.current
//     if(span[videoId]){
//         //animate

//     }
//   },[videoSpanRef,videoId,isPlaying])

  
//   useEffect(()=>{
//     if(loadedData.length>3){
//         if(!isPlaying){
//             videoRef.current[videoId].pause()

//         }else{
//             startPlay && videoRef.current[videoId].play()
//         }
//     }
//   },[videoRef,startPlay,videoId,isPlaying,loadedData])

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, index) => (
          <div key={index} className="sm:pr-20 pr-10 mt-12 ">
            <div className="relative sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh]">
              <div className="bg-black w-full h-full overflow-hidden rounded-3xl ">
                <video
                  className={"pointer-events-none mt-10"}
                  muted
                  autoPlay
                  preload="auto"
                  playsInline={true}
                  ref={(el)=>(videoRef.current[index] = el)}
                  onPlay={()=>{setVideo((prevVideo)=>({...prevVideo,isPlaying:true}))}}
                >
                  <source src={list.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute top-10 left-8 z-10">
                {list.textLists.map((text, index) => (
                  <p
                    className="text-xl md:text-2xl font-medium text-white"
                    key={index}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex items-center justify-center mt-2">
        <div className="flex items-center justify-center py-4 px-3 rounded-full bg-gray-700">
            {videoRef.current.map((ref,i)=>(
                <span key={i}  ref={(el)=>(videoDivRef.current[i] = el)}
                className='w-2 h-2 mx-2 bg-gray-400 cursor-pointer rounded-full'
                >
                    <span 
                    ref={(el)=>(videoDivRef.current[i] = el)}
                    className="absolute h-full rounded-full w-full "/>
                </span>
            ))}
        </div>
        <button className="control-btn"></button>
      </div>
    </>
  );
}

export default VideoCarousel;
