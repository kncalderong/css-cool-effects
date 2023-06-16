import { useState, useCallback } from 'react'
import ParallaxMenuItem from './ParallaxMenuItem'


const ParallaxMenu = () => {
  const [hoverContainerItems, setHoverContainerItems] = useState<boolean>(false)
  const [idxActive, setIdxActive] = useState<number>(0)
  
  const menuItems = ["Home", "Shop", "About", "Contact Us"]
  
  const handleIdx = useCallback((idx: number) => {
    setIdxActive(idx)
  }, []) 
  
  const menuBackgroundPatternStyle = {
    backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)',
    backgroundPosition: `${ idxActive === 0 ? '0% -25%' :  idxActive === 1 ? '0% -50%' : idxActive === 2 ? '0% -75%' : idxActive === 3 ? '0% -100%' : '0% 0%'}`,
    backgroundSize: `${hoverContainerItems ? '11vmin 11vmin' : '12vmin 12vmin'}`,
  }
  
  const menuBackgroundImageStyle = {
  backgroundImage: 'url("https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80")',
  backgroundPosition: `${ idxActive === 0 ? 'center 45%' :  idxActive === 1 ? 'center 50%' : idxActive === 2 ? 'center 55%' : idxActive === 3 ? 'center 60%' : 'center 40%'}`,
  backgroundSize: '110vmax'
  }

  return (
    <section className="w-full h-screen bg-dark-gray relative">
      <div id="menu" className="h-screen w-full flex items-center">
        <div id="menuItems" className="ml-clampMenu relative z-[2]" onMouseEnter={()=>{setHoverContainerItems(true)}} onMouseLeave={()=>{setHoverContainerItems(false)}}>
          {menuItems.map((text, idx) => {
            return <ParallaxMenuItem text={text} hoverContainerItems={hoverContainerItems} key={idx} handleIdx={handleIdx} idx={idx} />
          })}
        </div>
        <div id="menuBackgroundPattern" className={`absolute h-screen w-full left-0 top-0 z-[1] transition-all duration-700 ease-in-out ${hoverContainerItems && 'opacity-50'}`} style={menuBackgroundPatternStyle}></div>
        <div id="menuBackgroundImage" className={`absolute h-screen w-full left-0 top-0 z-[0] transition-all duration-700 ease-in-out ${hoverContainerItems ? 'opacity-10' : 'opacity-[0.15]'} `} style={menuBackgroundImageStyle} ></div>      
      </div>
    </section>
  )
}

export default ParallaxMenu
