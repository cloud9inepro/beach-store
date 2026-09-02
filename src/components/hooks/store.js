import { atom } from 'jotai'

export const slideIndexAtom = atom(0)
export const isTransitioningAtom = atom(false)
export const hasEnteredAtom = atom(false)

export const slides = [
{
    id: 'paddle-surf',
    time: '10:30 AM',
    title: 'PADDLE\nSURF',
    description: 'Glide across tranquil waters',
    temp: '22°',
    condition: 'glossy waters',
    location: 'Southern Lagoon Beach',
    stationName: 'Station Lighthouse',
    cardColor: '#6C4CE8',
    circleColor: '#F5C518',
    description2: 'Experience the serenity of paddleboarding on calm waters.',
    image: '/images/paddle.webp',
  },
  {
    id: 'kite-boarding',
    time: '02:15 PM',
    title: 'KITE\nBOARDING',
    description: 'Catch the wind and ride high',
    temp: '27°',
    condition: 'gusty winds',
    location: 'Breeze Point Bay',
    stationName: 'Station Watchtower',
    cardColor: '#4C6FE8',
    circleColor: '#abcfb0',
    image: '/images/kite.webp',
  },
{
    id: 'wind-surfing',
    time: '07:00 AM',
    title: 'WIND\nSURFING',
    description: 'Ride the offshore coastal gusts',
    temp: '24°',
    condition: 'side-shore wind',
    location: 'North Bay Cove',
    stationName: 'Station Pier',
    cardColor: '#00A896',
    circleColor: '#8d83be',
    image: '/images/windsurf.webp',
  },
  {
    id: 'scuba-diving',
    time: '01:15 PM',
    title: 'SCUBA\nDIVING',
    description: 'Discover underwater reef life',
    temp: '20°',
    condition: 'high visibility',
    location: 'Coral Shoals',
    stationName: 'Station Reef',
    cardColor: '#028090',
    circleColor: '#8d83be',
    image: '/images/scuba.webp',
  },
  {
    id: 'sea-kayaking',
    time: '04:45 PM',
    title: 'SEA\nKAYAKING',
    description: 'Navigate coastal sea caves',
    temp: '25°',
    condition: 'calm swell',
    location: 'Emerald Cliff Cove',
    stationName: 'Station Harbour',
    cardColor: '#05668D',
    circleColor: '#70058d',
    image: '/images/kayaking.webp',
  },

// add remaining 2-3 slides here, same shape
]