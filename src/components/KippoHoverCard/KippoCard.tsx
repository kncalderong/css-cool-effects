type KippoCardProps = {
  type: string
  backgroundImage: string
  transform: string
  hover: string
  isHover: boolean
}

const KippoCard = ({ type, backgroundImage, transform, hover, isHover }: KippoCardProps) => {

  const cardAdditionalStyles = {
    backgroundImage,
    transform: isHover ? hover : transform    
  }
  
  if (type === "bigCard") return (<div className="bigCard card aspect-kippoHoverCard w-[30vmin] bg-[#ffffff0d] absolute transition-transform duration-700 ease-[cubic-bezier(.05,.43,.25,.95)] bg-center bg-cover rounded-[1vmin]" style={cardAdditionalStyles}></div>)
  
  return (
    <div className="littleCard card aspect-kippoHoverCard bg-[#ffffff0d] absolute transition-transform duration-700 ease-[cubic-bezier(.05,.43,.25,.95)] bg-center bg-cover w-[12vmin] rounded-[2vmin] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl pointer-events-none" style={cardAdditionalStyles}></div>
  )
}

export default KippoCard
