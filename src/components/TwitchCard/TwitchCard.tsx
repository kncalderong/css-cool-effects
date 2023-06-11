import { faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState} from 'react'
import TwitchWord from './TwitchWord'


const TwitchCard = () => {
  
  const [isHover, setIsHover] = useState<boolean>(false)
  
  const backgroundBefore = {
    'background': 'linear-gradient(130deg, transparent 0% 33%, rgb(98, 0, 234) 66%, rgb(236, 64, 122) 83.5%, rgb(253, 216, 53) 100%)',
    'backgroundPosition': isHover ? '100% 100%' : '0% 0%',
    'backgroundSize': '300% 300%', 
    'transition': 'background-position 350ms ease, transform 350ms ease',
    'transform': isHover ? 'scale(1.08, 1.03)' : ''
  }
  
  const backgroundContent = {
    'backgroundImage': 'radial-gradient(rgba(255, 255, 255, 0.2) 8%, transparent 8%)',
    'backgroundPosition': isHover ? '-10% 0%' : '0% 0%',
    'backgroundSize': '5vmin 5vmin',
    'transition': 'background-position 350ms ease'
  }
  
  const subtitleText = "But in a much more real sense, I have no idea what I'm doing."
    
  return (
    <section className='w-100 bg-dark-magic-background h-auto sm:h-screen flex justify-center items-center' >
      <div className="card aspect-twitchCard border-[0.5vmin] border-border-twitch cursor-pointer relative w-[56vmin] " onMouseOver={() => {setIsHover(true)}} onMouseLeave={() => { setIsHover(false) }}>
        <div className={`cardLikeBefore content-[''] h-full left-0 pointer-events-none absolute top-0 w-full z-[1]`} style={backgroundBefore} ></div>
        <div className="card-content h-full p-[5vmin] relative w-full z-[2] " style={backgroundContent}>
          <h3 className="card-title text-white m-0 font-anek text-[6vmin] leading-[6vmin]">I know exactly what I'm doing</h3>
          <h4 className="card-subtitle text-white m-0 font-anek text-[3vmin] mt-[2vmin] ">
          <TwitchWord text={subtitleText} isHover={isHover} />
          </h4>
          <FontAwesomeIcon icon={faMountainSun} className='text-[7vmin] h-[40px] bottom-0 left-0 m-[5vmin] absolute z-[2] transition-colors' color={`${isHover ? '#fff' : '#ffffff80'}`} />
        </div>
      </div>
    </section>
  )
}

export default TwitchCard
