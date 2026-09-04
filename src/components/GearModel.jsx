import { useAtom } from 'jotai'
import { Suspense } from 'react'
import { slideIndexAtom, slides } from '../hooks/store'
import { Surfboard } from './models/gear/Surfboard'
import { Kite } from './models/gear/Kite'
import { WindsurfSail } from './models/gear/WindsurfSail'
import { ScubaGear } from './models/gear/ScubaGear'
import { Kayak } from './models/gear/Kayak'

const gearMap = {
  'paddle-surf': Surfboard,
  'kite-boarding': Kite,
  'wind-surfing': WindsurfSail,
  'scuba-diving': ScubaGear,
  'sea-kayaking': Kayak,
}

export default function GearModel() {
  const [slideIndex] = useAtom(slideIndexAtom)
  const slide = slides[slideIndex]
  const Model = gearMap[slide.id]

  if (!Model) return null

  return (
    <Suspense fallback={null}>
      <group position={[-1.4, 1.1, 3.5]} rotation={[0, 0.4, 0.1]} scale={0.6}>
        <Model />
      </group>
    </Suspense>
  )
}