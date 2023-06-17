import { faPlay, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from 'react'

const MouseTrailer = () => {
  
  const [likeBodyHover, setLikeBodyHover] = useState<boolean>(false)
  const [interactingType, setInteractingType] = useState<string>("")
  const trailerRef = useRef<HTMLDivElement>(null)
    
  const animateTrailer = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      console.log("animet: ", interactingType);
      const x = e.clientX - trailerRef.current!.offsetWidth / 2
      const y = e.clientY - trailerRef.current!.offsetHeight / 2
      
      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interactingType !== "" ? 4 : 1})`
      }
      
      trailerRef.current!.animate(keyframes, { duration: 800, fill: "forwards" })
      
    }
  
  
  return (
    <section className='w-full h-screen bg-dark-gray relative flex justify-center items-center gap-[4vw]' onMouseEnter={()=>{setLikeBodyHover(true) }} onMouseLeave={()=>{setLikeBodyHover(false) }} onMouseMove={(e)=>{ animateTrailer(e)}}>
      <div id="trailer" className={`${likeBodyHover ? 'opacity-100' : 'opacity-0'} h-[20px] w-[20px] bg-white rounded-[20px] fixed left-0 top-0 z-[10000] pointer-events-none transition-all duration-500 ease-in-out grid place-items-center `} ref={trailerRef}>
        <FontAwesomeIcon icon={ interactingType === "video" ? faPlay : faUpRightFromSquare} className={`text-[0.5rem] ${interactingType !== "" ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ease-in-out`} />
      </div>
      <div
        className="interactable aspect-mouseTrailerCard bg-[length:100%] opacity-40 transition-all duration-[400ms] ease-in-out hover:bg-[length:105%] hover:opacity-80"
        datatype="link"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
          width: 'clamp(120px, 40vmin, 600px)',
          backgroundPosition: 'center 50%'
        }}
        onMouseEnter={() => { setInteractingType("link") }}
        onMouseLeave={() => { setInteractingType("") }}
      >
        
      </div>

      <div
        className="interactable aspect-mouseTrailerCard bg-[length:100%] opacity-40 transition-all duration-[400ms] ease-in-out hover:bg-[length:105%] hover:opacity-80"
        datatype="video"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)",
          width: 'clamp(120px, 40vmin, 600px)',
          backgroundPosition: 'center 50%'
        }}
        onMouseEnter={() => { setInteractingType("video") }}
        onMouseLeave={() => { setInteractingType("") }}
      >
        <a href="" target="_blank" className='w-full h-full absolute left-0 top-0'></a>
      </div>

    </section>
  )
}

export default MouseTrailer
