type ParallaxMenuItemProps = {
  text: string,
  hoverContainerItems: boolean,
  idx: number,
  handleIdx: (idx: number) => void
}

const ParallaxMenuItem = ({text, hoverContainerItems,handleIdx, idx}: ParallaxMenuItemProps) => {
  return (
    <div onMouseEnter={()=>{handleIdx(idx)}} className={`menuItem text-white cursor-pointer block font-ibarra text-[8vw] p-[0.5vw] transition-opacity duration-500 ease-in-out ${hoverContainerItems && 'opacity-30'} hover:opacity-100`}>
      {text}
    </div>
  )
}

export default ParallaxMenuItem
