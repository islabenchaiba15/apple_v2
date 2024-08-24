import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { yellowImg } from "../utils";
import ModelView from "./ModelView";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Environment, PerspectiveCamera, View } from "@react-three/drei";
import { models, sizes } from "../constants";
import Iphone from "./Iphone";
function Model() {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  useGSAP(() => {
    gsap.to(".title", {
      y: 0,
      opacity: 1,
    });
  });
  const t1=gsap.timeline()
  useEffect(()=>{
    if(size==='large'){
        t1.to("#view2",{
            transform:'translateX(-100%)',
            duration:2,
            ease:'power2.inOut'
        },"keys1")
        t1.to("#view1",{
            transform:'translateX(-100%)',
            duration:2,
            ease:'power2.inOut'
        },"keys1")
    }
    if(size==='small'){
        t1.to("#view1",{
            transform:'translateX(0%)',
            duration:2,
            ease:'power2.inOut'
        },"keys")
        t1.to("#view2",{
            transform:'translateX(0%)',
            duration:2,
            ease:'power2.inOut'
        },"keys")
    }
  },[size])
  return (
    <div className=" mx-auto max-w-[1200px] sm:py-32 py-20 sm:px-10 px-5 ">
      <div className="title opacity-0 text-gray-400 lg:text-6xl md:text-5xl text-3xl translate-y-20 ">
        Take a closer look
      </div>
      <div className="flex flex-col items-center mt-5">
        <div className="w-full flex items-center md:h-[90vh] overflow-hidden relative h-[75vh]">
          <ModelView
            indexx={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            item={model}
            size={size}
          />
          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            item={model}
            size={size}
          />
          <Canvas
            className="w-full h-full"
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: "hidden",
            }}
            eventSource={document.getElementById("root")}
          >
            <View.Port />
          </Canvas>
        </div>
        <div className="mx-auto w-full my-10">
          <p className="text-sm font-light text-center mb-5">{model.title}</p>
          <div className="flex items-center gap-4 justify-center ">
            <ul className="flex items-center justify-center bg-gray-500 rounded-full px-2 py-3">
              {models.map((item, i) => (
                <li
                  className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                  style={{
                    backgroundColor: item.color[0],
                  }}
                  onClick={() => setModel(item)}
                  key={i}
                ></li>
              ))}
            </ul>
            <ul className="flex items-center gap-2 justify-center rounded-full px-2 py-3">
              {sizes.map(({ label, value }) => (
                <li
                  className="w-8 h-8 text-sm ap-2 cursor-pointer flex justify-center items-center bg-white text-black rounded-full"
                  style={{
                    backgroundColor: value === size ? "white" : "transparent",
                    color: value === size ? "black" : "white",
                  }}
                  onClick={() => setSize(value)}
                  key={label}
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model;
