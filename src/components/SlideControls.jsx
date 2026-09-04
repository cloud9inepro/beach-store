

import { useAtom } from 'jotai'
import { slideIndexAtom, isTransitioningAtom, slides } from './hooks/store'

const TRANSITION_DURATION = 800 // ms — should roughly match your GSAP timeline length

export default function SlideControls() {
const [slideIndex, setSlideIndex] = useAtom(slideIndexAtom)
const [isTransitioning, setIsTransitioning] = useAtom(isTransitioningAtom)

const goNext = () => {
if (isTransitioning) return
if (slideIndex >= slides.length - 1) return

setIsTransitioning(true)
setSlideIndex((i) => i + 1)

setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION)
}

const goPrev = () => {
if (isTransitioning) return
if (slideIndex <= 0) return

setIsTransitioning(true)
setSlideIndex((i) => i - 1)

setTimeout(() => setIsTransitioning(false), TRANSITION_DURATION)
}

return (
<div
className="bottom-8 md:top-240  lg:bottom-0 lg:top-20 lg:right-20"
style={{
position: 'absolute',
// top: '48px',
// right: '80px',
display: 'flex',
gap: '16px',
pointerEvents: 'auto',
zIndex: 10
}}
>
<button
onClick={goPrev}
disabled={slideIndex === 0 || isTransitioning}
style={{
width: '56px',
height: '56px',
borderRadius: '50%',
border: 'none',
background: '#fff',
boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
cursor: slideIndex === 0 ? 'default' : 'pointer',
opacity: slideIndex === 0 ? 0.4 : 1,
fontSize: '20px',
}}
>
←
</button>

<button
onClick={goNext}
disabled={slideIndex === slides.length - 1 || isTransitioning}
style={{
width: '56px',
height: '56px',
borderRadius: '50%',
border: 'none',
background: '#000',
color: '#fff',
boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
cursor: slideIndex === slides.length - 1 ? 'default' : 'pointer',
opacity: slideIndex === slides.length - 1 ? 0.4 : 1,
fontSize: '20px',
}}
>
→
</button>
</div>
)
}