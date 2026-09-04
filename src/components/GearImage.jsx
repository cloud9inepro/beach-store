
import gsap from "gsap"
import { useAtom } from "jotai";
import { slideIndexAtom, slides } from "./hooks/store";
import { useEffect, useRef, useState } from "react";

export default function GearImage() {
    const [slideIndex] = useAtom(slideIndexAtom)
    const imgRef = useRef()
    const prevIndex = useRef(slideIndex)

    const [displaySlide,  setDisplaySlide] = useState(slides[slideIndex])
    
    useEffect(()=>{
        if (prevIndex.current === slideIndex) return
        prevIndex.current = slideIndex

        const tl = gsap.timeline()

        tl.to(imgRef.current, {
            x: 100,
            opacity: 0,
            scale: 0.85,
            duration: 0.85,
            ease: "power2.in",
            onComplete: ()=>{
                setDisplaySlide(slides[slideIndex])
            },
        })
           .to(imgRef.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.4)",
        })
    }, [slideIndex])

    const slide= displaySlide


    return(
        <img
            ref={imgRef}
            src={slide.gearImage}
            alt={slide.title}
            className="absolute w-50 lg:w-64 lg:top-10 top-5 left-[40%] lg:left-[20%] pointer-events-none drop-shadow-2xl z-20"
        />
    )
}