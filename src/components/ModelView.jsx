import { Environment, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import Iphone from "./Iphone";
import { Canvas } from "@react-three/fiber";
import LoaderModel from "./Loader";

function ModelView({ index, groupRef, gsapType, controlRef, item, size }) {
    const scale = useMemo(() => {
        // Define fixed scales for each view
        if (index === 2) return [17, 17, 17];
        return [15, 15, 15] // Large view
      }, [index]);
  
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
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <group ref={groupRef} name={`${index===1} ? 'small' :'large'`} position={[0,0,0]}>
        <Suspense fallback={<LoaderModel/>}>
          <Iphone item={item} size={size}  scale={scale}/>
        </Suspense>
      </group>
    </View>
  );
}

export default ModelView;
