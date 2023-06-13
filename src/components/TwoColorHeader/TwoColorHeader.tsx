import { useRef } from "react"


const TwoColorHeader = () => {
  
const leftSideRef = useRef<HTMLDivElement>(null)
  
  const handleMove = (e: React.MouseEvent) => {
    leftSideRef.current!.style.width = `${e.clientX / window.innerWidth * 100}%`
  }
  
  return (
    <section className='m-0 bg-dark-gray' onMouseMove={handleMove}>
      <div id="left-side" className="side w-3/5 z-[2] h-screen place-items-center grid  overflow-hidden absolute bg-dark-gray" ref={leftSideRef} >
        <h2 className='title font-monserrat text-[7vw] font-extrabold mt-0 mx-[10vw] w-[80vw] text-white'>
          Today is going to be <span className="fancy font-lobster text-[8vw] text-[#f84f39]"> aweasome </span>
        </h2>
      </div>
      <div id="right-side" className="side w-full h-screen place-items-center grid  overflow-hidden absolute bg-[#f84f39]">
        <h2 className='title font-monserrat text-[7vw] font-extrabold mt-0 mx-[10vw] w-[80vw] text-dark-gray '>
          Today is going to be <span className="fancy font-lobster text-[8vw] text-white"> wonderful </span>
        </h2>
      </div>
      

    </section>
  )
}

export default TwoColorHeader
