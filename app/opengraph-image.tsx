import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'fridAI.beer - Your Friday AI Beercast'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: '#fafaf9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 120,
            fontWeight: 700,
            letterSpacing: '-0.025em',
          }}
        >
          <span style={{ color: '#334155' }}>fridAI</span>
          <span style={{ color: '#78350f' }}>.beer</span>
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#737373',
            marginTop: 20,
            fontWeight: 300,
          }}
        >
          Your Friday afternoon AI beercast 🍺
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
