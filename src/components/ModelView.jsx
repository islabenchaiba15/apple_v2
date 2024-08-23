import { Environment, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense } from "react";
import Iphone from "./Iphone";
import { Canvas } from "@react-three/fiber";

function ModelView({ index, groupRef, gsapType, controlRef, item, size }) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={10.5} />
      <Environment preset="city" />
      <directionalLight intensity={4.5} />
      <OrbitControls 
      enableZoom={false} 
      rotateSpeed={0.4} 
      ref={controlRef}
      makeDefault
      />
      <PerspectiveCamera makeDefault position={[0, 0, 3]} />
      <group ref={groupRef} name={`${index===1} ? 'small' :'large'`} position={[0,0,0]}>
        <Suspense fallback={null}>
          <Iphone item={item} size={size} scale={index===1?[10,10,10]:[12,12,12] } />
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
