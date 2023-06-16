import {useState} from 'react'

type TileProps = {
  toggled: boolean,
  handleToggle: (index: number) => void
  index: number
}

const Tile = ({toggled, handleToggle,index}: TileProps) => {
  
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <div className={`tile cursor-pointer relative ${toggled ? 'opacity-0 hover:opacity-10' : 'opacity-100'} `} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} onClick={()=>{handleToggle(index)}}>
      <div className={`likeBefore ${isHover ? 'bg-[#1E1E1E]' : 'bg-[#0F0F0F]'} inset-tileStaggered absolute`}></div>
    </div>
  )
}

export default Tile
