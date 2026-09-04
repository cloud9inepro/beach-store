import { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { slideIndexAtom, slides } from './hooks/store'

const PARTICLE_COUNT = 10

export default function EffectBurst() {
  const [slideIndex] = useAtom(slideIndexAtom)
  const [particles, setParticles] = useState([])
  const slide = slides[slideIndex]

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: `${slideIndex}-${i}`,
      left: Math.random() * 60 + 10, 
      delay: Math.random() * 0.3,
      size: Math.random() * 10 + 6,
    }))
    setParticles(newParticles)

    const timeout = setTimeout(() => setParticles([]), 1200)
    return () => clearTimeout(timeout)
  }, [slideIndex])

  if (!slide.effect || particles.length === 0) return null

  return (
    <div className="absolute -top-10 md:-top-16 left-[8%] lg:left-[10%] w-40 md:w-56 lg:w-64 h-40 pointer-events-none z-20 overflow-visible">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`absolute rounded-full ${effectClass(slide.effect)}`}
          style={{
            left: `${p.left}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function effectClass(effect) {
  switch (effect) {
    case 'bubbles':
      return 'bg-white/60 animate-bubble-rise'
    case 'splash':
      return 'bg-cyan-200/70 animate-splash-out'
    case 'wind':
      return 'bg-white/50 animate-wind-drift rounded-full'
    case 'ripple':
      return 'border-2 border-white/50 bg-transparent animate-ripple-expand'
    default:
      return ''
  }
}