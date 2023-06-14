import { useState } from "react"

type LinkProps = {
  text: string
}

const Link = ({ text }: LinkProps) => {
  
  const [isHover, setIsHover] = useState<boolean>(false)
  
  const beforeStyle = {
    background: 'linear-gradient(to right,transparent,rgb(61, 90, 254) var(--light-blue-percent),rgb(33, 150, 243))'
  }
  
  return (
    <a href="" target="_blank" className={`link border-y-white border-t-[1px] ${text === 'contact' ? 'border-b-[1px]' : '' }  ${isHover ? 'text-menu-blue' : 'text-white'} block font-monserrat text-[5vw] p-[1vw] pl-[3vw] relative no-underline w-full`} onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}} >
      <div className={`likeBefore left-0 top-0 h-full w-0 absolute ${isHover && 'w-full transition-[width] duration-500  ease-in'} `} style={beforeStyle}></div>
      {text}
    </a>
  )
}

export default Link
