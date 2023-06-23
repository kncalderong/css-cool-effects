import { useState } from "react"

type TileTypes = {
  img: string,
  additionalStyles: string
}



const Tile = ({ img, additionalStyles }: TileTypes) => {
  
  const [isHover, setIsHover] = useState<boolean>(false)
  return (
    <div className={`${additionalStyles} rounded-md absolute transition-transform duration-700 ease-in hover:scale-110`} onMouseEnter={()=>setIsHover(true)}  onMouseLeave={()=>setIsHover(false)}>
      <img src={img} alt="imageOfTile" className={`${isHover ? 'opacity-100 scale-110' : 'opacity-0'} h-full w-full object-cover rounded-md transition-opacity duration-300 ease-in-out`} />
    </div>
  )
}

export default Tile
