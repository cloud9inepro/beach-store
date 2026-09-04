import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience.jsx";
import { Suspense, useRef } from "react";
import { Loader } from "@react-three/drei";
import PurpleCard from "./components/PurpleCard"
import WhiteCard from "./components/WhiteCard"
import SlideControls from "./components/SlideControls"
import IntroOverlay from "./components/IntroOverlay"
import NavRail from "./components/NavRail"
import GearImage from "./components/GearImage"

export default function App() {
  const mainRef = useRef(null);

  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1200;

  return (
    <main ref={mainRef}>
      <div className="relative w-screen h-screen">
        <GearImage/>
        <div
          className="card-holder absolute lg:left-[20%] w-screen lg:w-0 p-5  lg:p-0 top-[-50px] lg:top-0 h-full z-10 pointer-events-none"
        >
          <PurpleCard />
          <WhiteCard />
          <SlideControls />  
        </div>
         
        <NavRail/>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, isMobile ? 3.8 : isTablet ? 4 : 6], fov: 55 }}
            gl={{ alpha: true }}
            style={{ pointerEvents: "none" }}
            className="absolute top-0 left-0 w-full h-full"
          >
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </Canvas>
        </div>

        <IntroOverlay />
      </div>

      <Loader
        innerStyles={{ background: "#2a2a2a", width: "300px", height: "4px" }}
        barStyles={{ background: "linear-gradient(100deg, #f5e6c8, #e8b85d, #c9a876)", height: "100%" }}
        dataStyles={{ color: "#f5e6c8", fontFamily: "Poppins, sans-serif", fontSize: "14px", marginTop: "12px" }}
        dataInterpolation={(p) => `Loading ${p.toFixed(0)}%`}
      />
    </main>
  );
}