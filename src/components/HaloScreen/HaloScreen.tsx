import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const HaloScreen = () => {
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const blobRef = useRef<HTMLDivElement | null>(null)
  let interval: any = null
  const textHacked = "NIKOLAS"

  const handleMouseOver = (e: React.MouseEvent) => {
    let iteration = 0;
    clearInterval(interval)
    interval = setInterval(() => {
      textRef.current!.innerText = textRef.current!.innerText.split("").map((letter, idx) => {
        if (idx < iteration) {
          return textHacked[idx]
        }
        return letters[Math.floor(Math.random() * 26)]
      }).join("")
      if (iteration > textHacked.length) {
        clearInterval(interval)
      }
      iteration += 1 / 3
    }, 30)
  }

  const handleMouseLight = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientX : e.nativeEvent instanceof TouchEvent ? e.nativeEvent.touches[0].clientX : 0
    const clientY = e.nativeEvent instanceof MouseEvent ? e.nativeEvent.clientY : e.nativeEvent instanceof TouchEvent ? e.nativeEvent.touches[0].clientY : 0
    blobRef.current!.animate({
      left: `${clientX - (blobRef.current!.offsetWidth / 2)}px`,
      top: `${clientY - (blobRef.current!.offsetHeight / 2)}px`
    }, { duration: 3000, fill: "forwards" })
  }

  return (
    <section className="w-full h-screen bg-[rgb(29,30,34)] overflow-hidden flex justify-center items-center relative" onMouseMove={handleMouseLight}>
      <div ref={blobRef} id="blob" className=" absolute bg-white h-[34vmax] aspect-square left-1/2 top-1/2  rounded-full bg-gradient-to-r from-[rgb(33,150,243)] from-0%  to-[#1e90ff]  to-100% opacity-80 animate-rotateBlobEffect"></div>
      <div id="blur" className="h-full w-full absolute z-[2] backdrop-blur-[12vmax]"></div>

      <div className="screen w-[500px] flex border-[3px] border-[rgba(33,150,243,0.8)] rounded-2xl overflow-hidden relative bg-[rgba(33,150,243,0.15)] aspect-[10/16] z-[10] "  onMouseEnter={handleMouseOver}>
        <div className='h-[5px] w-[15%] absolute z-[4] top-0 left-1/2 bg-white -translate-x-1/2 rounded-bl-2xl rounded-br-2xl'></div>
        <div className='h-[5px] w-[25%] absolute z-[4] bottom-0 left-1/2 bg-white -translate-x-1/2 rounded-tl-2xl rounded-tr-xl'></div>
        <div className="screen-image w-full h-full absolute z-[1] left-0 top-0 opacity-60 animate-panImageTVEffect" style={{ backgroundImage: ' url("https://images.unsplash.com/photo-1515266591878-f93e32bc5937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80"', backgroundSize: '300%', filter: 'sepia(100%) hue-rotate(160deg)'}}></div>
        <div className="screen-overlay animate-screenOverlayEffect h-full w-full absolute top-0 left-0 z-[2]" style={{
        background: 'linear-gradient(rgba(33, 150, 243, 0.15), rgba(33, 150, 243, 0.15) 3px, transparent 3px, transparent 9px)',
        backgroundSize: '100% 9px'
        }}></div>
        <div className="screen-content flex flex-col items-center justify-end grow gap-16 relative z-[3] m-4 pb-24 border-[1px] border-[rgba(33,150,243,0.5)] rounded-[0.6rem]">
          <FontAwesomeIcon icon={faCodepen} color={"#fff"} className='text-[4rem]' style={{filter: 'drop-shadow(0px 0px 0.5rem white)'}} /> 
          <div className="screen-user flex justify-center items-center relative flex-col">
            <div className='absolute top-0 bg-[rgba(33,150,243,0.6)] rounded-2xl h-[2px] w-[50px] -translate-x-[20px] -translate-y-[1rem] opacity-75' style={{boxShadow: '0px 0px 8px 3px rgba(33,150,243,0.6)'}}></div>
            <div className='absolute top-0 bg-[rgba(33,150,243,0.6)] rounded-2xl h-[3px] w-[30px] translate-x-[26px] -translate-y-[1rem]' style={{ boxShadow: '0px 0px 8px 3px rgba(33,150,243,0.6)' }}></div>
            <span className='w-[8px] h-[8px] absolute border-[2px] border-white rounded-[2px] top-[55%] right-[-1.5rem]'></span>
            <span className='w-[8px] h-[8px] absolute border-[2px] border-white rounded-[2px] top-[45%] left-[-1.5rem]'></span>
            <div ref={textRef} className="name font-spaceMono text-white uppercase text-[4.25rem] relative">       
              {textHacked}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HaloScreen
