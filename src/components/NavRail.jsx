

import { useRef, useEffect } from 'react'
import { useAtom } from 'jotai'
import gsap from 'gsap'
import { slideIndexAtom, slides } from './hooks/store'
import {
  GiSurfBoard,
  GiKite,
  GiWindsock,
  GiScubaMask,
  GiWoodCanoe,
} from 'react-icons/gi'

const iconMap = {
  'paddle-surf': GiSurfBoard,
  'kite-boarding': GiKite,
  'wind-surfing': GiWindsock,
  'scuba-diving': GiScubaMask,
  'sea-kayaking': GiWoodCanoe,
}



export default function NavRail() {
  const [slideIndex, setSlideIndex] = useAtom(slideIndexAtom)
  const highlightRef = useRef(null)
  const itemRefs = useRef([])

  useEffect(() => {
    const activeEl = itemRefs.current[slideIndex]
    if (!activeEl || !highlightRef.current) return

    gsap.to(highlightRef.current, {
      y: activeEl.offsetTop,
      duration: 0.5,
      ease: 'power2.inOut',
    })
  }, [slideIndex])

  return (
    <div className="absolute top-1/2 left-6 md:left-10 -translate-y-1/2 flex flex-col gap-4 md:gap-5 z-30 pointer-events-auto">
      <div
        ref={highlightRef}
        className="absolute top-0 left-0 w-12 h-12 rounded-xl"
        style={{ background: slides[slideIndex].cardColor }}
      />

      {slides.map((slide, i) => {
        const Icon = iconMap[slide.id]
        if (!Icon) return null
        return (
          <button
            key={slide.id}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => setSlideIndex(i)}
            className="relative w-12 h-12 flex items-center justify-center text-xl"
          >
            <Icon
              className={i === slideIndex ? 'text-white' : 'text-white'}
            />
          </button>
        )
      })}
    </div>
  )
}