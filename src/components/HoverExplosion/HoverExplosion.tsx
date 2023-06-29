import { useState } from "react"

const letterStyles = [
  { transform: 'translate(-60%, 40%) rotate(8deg)' },
  { transform: 'translate(-30%, 10%) rotate(4deg)' },
  { transform: 'translate(-5%, 40%) rotate(-6deg)' },
  { transform: 'translate(0%, 4%) rotate(-8deg)' },
  { transform: 'translate(0%, -10%) rotate(5deg)' },
  { transform: 'translate(0%, 10%) rotate(-3deg)' },
  { transform: 'translate(0%, -20%) rotate(-5deg)' },
  { transform: 'translate(0%, 10%) rotate(10deg)' },
  { transform: 'translate(0%, -40%) rotate(8deg)' },
  { transform: 'translate(0%, 10%) rotate(-6deg)' },
  { transform: 'translate(40%, -10%) rotate(-3deg)' },
  { transform: 'translate(100%, -20%) rotate(-10deg)' },
]

const HoverExplosion = () => {
  const [isHoverLink, setIsHoverLink] = useState(false);

  const wordToBlow = "@Hyperplexed"

  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <section className="w-full h-screen bg-black overflow-hidden grid place-items-center relative">
      <div id="text" className="">
        <div className={`line flex justify-between w-full ${isHoverLink && 'opacity-20'} transition-opacity duration-200 ease-in-out`}>
          <p className="word text-white text-[6vw] font-rubik m-0 uppercase">A</p>
          <p className="word text-white text-[6vw] font-rubik m-0 uppercase">Person</p>
        </div>
        <div className={`line flex justify-between w-full ${isHoverLink && 'opacity-20'} transition-opacity duration-200 ease-in-out`}>
          <p className="word text-white text-[6vw] font-rubik m-0 uppercase">YouTube</p>
          <p className="word text-white text-[6vw] font-rubik m-0 uppercase">&</p>
        </div>
        <div className={`line flex justify-between w-full ${isHoverLink && 'opacity-20'} transition-opacity duration-200 ease-in-out`}>
          <p className="word text-white text-[6vw] font-rubik m-0 uppercase">CodePendence</p>
        </div>
        <div className={`line flex justify-between w-full ${isHoverLink && 'opacity-100'} transition-opacity duration-200 ease-in-out`}>
          <a
            id="channel-link"
            href="https://youtube.com/@hyperplexed"
            target="_blank"
            className={`word fancy text-white text-[6vw] font-rubik m-0 uppercase`}
            onMouseEnter={() => setIsHoverLink(true)}
            onMouseLeave={() => setIsHoverLink(false)}
          >
            {wordToBlow.split('').map((letter, idx) => {
              return <span className="inline-block transition-transform duration-300 hover:duration-700 ease-in-out" style={{transform: `${isHoverLink ? letterStyles[idx].transform : 'translate(0%, 0%) rotate(0deg)'}`}} key={idx}>
                <span style={{animationDelay: `${rand(-5000, 0)}m`}}
                  className={`inline-block ${isHoverLink && 'animate-floatHoverExplosion'}`}>
                  <span style={{ animationDelay: `${idx * 1000}ms` }} className={`inline-block animate-backgroundPan  ${isHoverLink && 'bg-gradient-to-r from-[rgb(41,121,255)] from-0% via-[rgb(42,252,152)] via-50% to-[rgb(41,121,255)] to-100% bg-200% bg-clip-text text-transparent'} `}>
                    {letter}
                  </span>
                </span>
              </span>
            })}
          </a>
        </div>
      </div>
    </section >
  )
}

export default HoverExplosion
