

import { useRef, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import gsap from 'gsap'
import { slideIndexAtom, slides } from './hooks/store'

export default function PurpleCard() {
const [slideIndex] = useAtom(slideIndexAtom)
const cardRef = useRef(null)
const contentRef = useRef(null)
const prevIndex = useRef(slideIndex)

  const width = window.innerWidth;
const isMobile = width < 768;
const isTablet = width >= 768 && width < 1200;

const [displaySlide, setDisplaySlide] = useState(slides[slideIndex])

useEffect(() => {
if (prevIndex.current === slideIndex) return
prevIndex.current = slideIndex

const tl = gsap.timeline()

// card slides out
tl.to(cardRef.current, {
 x: isMobile ? 0 : isTablet ? 0 : 300, 
 y: isMobile ? 300 : isTablet ? 300 : 0, 
// x: 300,
// opacity: 0,
duration: 0.8,
// ease: 'power2.in',
 onComplete:() =>{
    setDisplaySlide(slides[slideIndex])
 }
})
// card slides back in with new content already swapped
.to(cardRef.current, {
  //  x: isMobile ? 0 : isTablet ? 0 : 0, 
 y: isMobile ? 100 : isTablet ? 100 : 0, 
x: 0,
// y: 100,
// opacity: 1,
duration: 0.8,
// ease: 'power2.out',
})

.fromTo(".circle", {
    opacity: 0.5,
    scale: 1   
},  
    {opacity: 1,
     scale: 3,
     duration: 1,
     ease: 'circ.inOut'

})

.fromTo(".bar", {
    scaleY: 1   
},  
    {
     scaleY: 3,
     duration: 1,
     stagger: 0.1,
     transformOrigin: "bottom",
     ease: "power2.inOut"
})

}, [slideIndex])

const slide = displaySlide


return (
<div
  className="purple-card"
  style={{
    background: slide.cardColor,
    pointerEvents: 'auto',
  }}
  ref={cardRef}
>
  <div ref={contentRef} className='flex  flex-row md:flex-col  md:ml-18 md:gap-30 ' >
    
    <div
      className="circle w-18 h-18 hidden md:block rounded-full mt-18 ml-8 shadow-lg"
      style={{background: slide.circleColor }}
    />

    <div className='text-xl font-bold'>
      {slide.stationName}
    </div>

    <div
      className="bars-wrapper flex gap-2 mt-auto "
      style={{ alignItems: 'end' }}
    >
      {[20, 32, 44, 20].map((h, i) => (
        <div
          key={i}
          className="bar shadow-lg w-10 hidden md:block"
          style={{
            height: `${h}px`,
            background: i === 3 ? slide.circleColor : '#fff',
          }}
        />
      ))}
    </div>
  </div>
</div>
)
}