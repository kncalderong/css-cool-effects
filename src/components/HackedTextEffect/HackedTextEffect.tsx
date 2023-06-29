import { useRef } from "react"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const HackedTextEffect = () => {
  
  const textRef = useRef<HTMLHeadingElement | null>(null)
  
  let interval: any = null
  
  const textHacked = "HYPERPLEXED"
  
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
  return (
    <section className="w-full h-screen bg-black overflow-hidden grid place-items-center relative">
      <h1 ref={textRef} className='font-spaceMono text-white hover:bg-white hover:text-black cursor-pointer uppercase' style={{fontSize: 'clamp(3rem, 10vw, 10rem)', padding: '0rem clamp(1rem, 2vw, 3rem)', borderRadius: 'clamp(0.4rem, 0.75vw, 1rem)'}} onMouseOver={handleMouseOver} >HYPERPLEXED</h1>
    </section>
  )
}

export default HackedTextEffect
