import { useState } from 'react'

const TurbulentHoverEffect = () => {

  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <section className="w-full h-screen bg-[rgb(16,23,24)] grid place-items-center p-4 overflow-hidden">
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="noise">
            <feTurbulence
              baseFrequency="0.7,0.8"
              seed="0"
              type="fractalNoise"
              result="static"
            >
              <animate
                attributeName="seed"
                values="0;100"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="static">
              <animate
                attributeName="scale"
                values="0;40;0"
                dur="800ms"
                repeatCount="1"
                begin="card.mouseenter"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <div id="card" className='w-full sm:w-[580px] aspect-[2/3] border-[0.25rem] border-[rgba(255,255,255,0.15)] rounded-2xl cursor-pointer overflow-hidden ' onMouseEnter={() => setIsCardHover(true)} onMouseLeave={() => setIsCardHover(false)}>
        <img src="https://images.unsplash.com/photo-1679626951853-60e909d288ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="cardImage" className={`w-full h-full object-cover rounded-2xl ${isCardHover && 'animate-pulseEffect'}`} style={{
          filter: `${isCardHover ? 'url(#noise)' : ''}`
        }} />
      </div>
    </section>
  )
}

export default TurbulentHoverEffect
