import { useRef, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import gsap from 'gsap'
import { slideIndexAtom, slides } from './hooks/store'

export default function WhiteCard() {
  const [slideIndex] = useAtom(slideIndexAtom)
  const row1Ref = useRef(null)
  const row2Ref = useRef(null)
  const prevIndex = useRef(slideIndex)

  const [displaySlide, setDisplaySlide] = useState(slides[slideIndex])

  useEffect(() => {
    if (prevIndex.current === slideIndex) return
    prevIndex.current = slideIndex

    const tl = gsap.timeline({  }) // waits for purple card's full animation

    tl.to(row1Ref.current, {
      y: -100,
      duration: 0.8,
      opacity: 0,
      // ease: 'power2.in',
    })
      .to(
        row2Ref.current,
        {
          y: 100,
          opacity: 0,
          // ease: 'power2.in',
        },
        '<'
      )
      .call(() => {
        setDisplaySlide(slides[slideIndex]) // swap content once fully exited
      })
      .set(row1Ref.current, { y: -100 })
      .set(row2Ref.current, { y: 100 })
      .to(row1Ref.current, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: 'power2.out',
      })
      .to(
        row2Ref.current,
        {
          y: 0,
          duration: 0.4,
          opacity: 1,
          ease: 'power2.out',
        },
        '<'
      )
  }, [slideIndex])

  const slide = displaySlide

  return (
    <div
      className="white-card bg-white backdrop-blur-lg"
      style={{
        pointerEvents: 'auto',
      }}
    >
      <div ref={row1Ref} className="flex flex-col justify-between relative overflow-hidden">
  

  <div className="text-2xl md:text-3xl font-semibold mb-1">
    {slide.temp}
  </div>

  <div className="text-xs md:text-sm opacity-80 ">
    {slide.condition}
  </div>

  <div>
    
  </div>

  <div className="text-xs md:text-sm ">
    {slide.location}
  </div>

  <div className="">
    <img
      src={slide.image}
      alt={slide.title}
      className="drop-shadow-lg w-34 h-34 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xl object-cover"
    />
  </div>
</div>


                    {/* row 2 */}
     <div ref={row2Ref} className="flex flex-col items-end justify-between text-2xl md:text-3xl font-bold whitespace-pre-line leading-tight mb-5">
  <div className="text-xs text-gray-400 mb-3">
    {slide.time}
  </div>

<div className='leading-wide'>
      {slide.title}
</div>
  
      <div className="text-xs md:text-sm text-gray-600">
      {slide.description}
    </div>

  <div className="text-xs md:text-left text-right md:text-sm font-normal mt-8 w-48 ">
    {slide.description2}
  </div>
</div>
    </div>
  )
}