import {useState} from 'react'

type TileProps = {
  toggled: boolean,
  handleToggle: ()=>void
}

const Tile = ({toggled, handleToggle}: TileProps) => {
  
  const [isHover, setIsHover] = useState<boolean>(false)
  
  return (
    <div className='cursor-pointer relative ' onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} onClick={handleToggle}>
      <div className={`likeBefore ${isHover ? 'bg-[#1E1E1E]' : 'bg-[#0F0F0F]'} inset-tileStaggered absolute ${toggled ? 'opacity-0 hover:opacity-10' : 'opacity-100' }`}></div>
    </div>
  )
}

export default Tile
