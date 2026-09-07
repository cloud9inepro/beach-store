import { useRef } from 'react'
import { useAtom } from 'jotai'
import gsap from 'gsap'
import { hasEnteredAtom } from './hooks/store'

export default function IntroOverlay() {
  const [hasEntered, setHasEntered] = useAtom(hasEnteredAtom)
  const overlayRef = useRef(null)

  const handleEnter = () => {
    if (hasEntered) return

    gsap.to(overlayRef.current, {
      x: '120%',
      y: '-60%',
      rotate: -8,
      duration: 1.1,
      ease: 'power3.inOut',
      onComplete: () => setHasEntered(true),
    })
  }

  if (hasEntered) return null

  return (
    <div
      ref={overlayRef}
      className="absolute inset-0 h-dvh w-full bg-white z-30 pointer-events-auto flex flex-col justify-between p-8 md:p-12"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          What's it like<br />at the beach today?
        </h1>
        <p className="text-sm md:text-base text-gray-500 mt-4 max-w-sm">
          Scroll through today's conditions and find your next adventure.
        </p>
      </div>

      <button
        onClick={handleEnter}
        className="self-end w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg"
      >
        →
      </button>
    </div>
  )
}