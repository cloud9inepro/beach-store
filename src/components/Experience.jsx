import { Suspense } from "react";
import { Environment, Html, OrbitControls, } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Couch } from "./models/Couch"
import { FlowerPot } from "./models/FlowerPot"


export const Experience = () => {
  const modelRef = useRef();

  const height = window.innerHeight;
  const width = window.innerWidth;
const isMobile = width < 768;
const isTablet = width >= 768 && width < 1200;
  const posScale = isMobile ? 0.5 : isTablet ? 0.55 : 1


  return (
    <>
      <Environment files={"/Environment/white_studio_06_1k.hdr"} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
      />
      <OrbitControls />

      <Suspense fallback={null}>
        <group
          ref={modelRef}
          // scale={isMobile ? 0.004 : 0.004}

          position={[isMobile ? 0 : isTablet ? 0 : 0, isMobile ? -0.7 : isTablet ? 0 : -0.1, isMobile ? 0 : isTablet ? 0 : 0]}
          // rotation={[0, Math.PI / 1, 0]}
        >
      
      <group position={[isMobile ? 0 : isTablet ? 0 : 0, isMobile ? -0.3 : isTablet ? -0.4 : -0.3, isMobile ? 1.5 : isTablet ? 3 : 4.7]}
            rotation={[0, 0, 0]}
       >
        <Couch
          scale={isMobile ? 0.25 : isTablet ? 0.18 : 0.4}
          position={[isMobile ? 0.6 : isTablet ? 0.4 : 1.2, isMobile ? 0 : isTablet ? -0.1 : -0.199, isMobile ? 0.1 : isTablet ? -0.2 : -0.4,]}
          rotation={[0, isMobile ? 0 : isTablet ? 0 : -0.1, 0]}
        />
        <FlowerPot
          scale={isMobile ? 0.014 : isTablet ? 0.01 : 0.017}
          position={[isMobile ? 0.25 : isTablet ? 0.12 : 0.6, isMobile ? 0 : isTablet ? 0 : -0.06, isMobile ? -0.2 : isTablet ? -0.2 : -0.5,]}
          rotation={[0, 0, 0]}
        />

      </group>
        




         {/* back drop white  */}
      <mesh position={[isMobile ? 0 : isTablet ? 0 : 0, isMobile ? 0 : isTablet ? 0 : 0, isMobile ? 2 : isTablet ? 2 : 4.2,]} 
      rotation={[0, 0, Math.PI / 2]}>
        <planeGeometry args={[width, height, 1, 1]} />
        <meshBasicMaterial
          color="#fff"
            transparent opacity={0}
          />
      </mesh>

         {/* Floor  */}
      <mesh 
      position={[isMobile ? 0 : isTablet ? 0 : 0, isMobile ? -3 : isTablet ? -3.5 : -0.5, isMobile ? 0 : isTablet ? 0 : 9,]}
       rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial
          color="#777"
          metalness={0}
          roughness={0.95}
          
        />
      </mesh>
        </group>
      </Suspense>
    </>
  );
};
