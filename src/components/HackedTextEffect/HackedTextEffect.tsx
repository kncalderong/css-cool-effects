import { useRef } from "react"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const HackedTextEffect = () => {  
  const textRef = useRef<HTMLHeadingElement | null>(null)
  const blobRef = useRef<HTMLDivElement | null>(null)  
  let interval: any = null  
  const textHacked = "MOUSEMOVE"
  
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
    <section className="w-full h-screen bg-black overflow-hidden flex justify-center items-center relative" onMouseMove={handleMouseLight}>
      <div ref={blobRef} id="blob" className=" absolute bg-white h-[34vmax] aspect-square left-1/2 top-1/2  rounded-full bg-gradient-to-r from-emerald-200 from-0%  to-indigo-400  to-100% opacity-80 animate-rotateBlobEffect"></div>
      <div id="blur" className="h-full w-full absolute z-[2] backdrop-blur-[12vmax]"></div>
      <h1 ref={textRef} className='font-spaceMono text-white cursor-pointer uppercase z-[3]' style={{ fontSize: 'clamp(3rem, 10vw, 10rem)', padding: '0rem clamp(1rem, 2vw, 3rem)', borderRadius: 'clamp(0.4rem, 0.75vw, 1rem)' }} onMouseOver={handleMouseOver} >{textHacked}</h1>
    </section>
  )
}

export default HackedTextEffect
