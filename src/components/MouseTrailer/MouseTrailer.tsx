import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'


const MouseTrailer = () => {
  
  const [likeBodyHover, setLikeBodyHover] = useState<boolean>(false)
  
  return (
    <section className='w-full h-screen bg-dark-gray relative flex justify-center items-center gap-[4vw]' onMouseEnter={()=>{setLikeBodyHover(true) }} onMouseLeave={()=>{setLikeBodyHover(false) }}>
      <div id="trailer" className={`${likeBodyHover ? 'opacity-100' : 'opacity-0'} h-[20px] w-[20px] bg-white rounded-[20px] fixed left-0 top-0 z-[10000] pointer-events-none transition-all duration-500 ease-in-out grid place-items-center `}>
        <FontAwesomeIcon icon={faUpRightFromSquare} className='text-xs opacity-0 transition-opacity duration-300 ease-in-out' />
      </div>
      <div
        className="interactable aspect-twitchCard bg-[length:100%] opacity-40 transition-all duration-[400ms] ease-in-out hover:bg-[length:105%] hover:opacity-80"
        datatype="link"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)",
          width: 'clamp(120px, 40vmin, 600px)',
          backgroundPosition: 'center 50%'
        }}>
      </div>

      <div
        className="interactable aspect-twitchCard bg-[length:100%] opacity-40 transition-all duration-[400ms] ease-in-out hover:bg-[length:105%] hover:opacity-80"
        datatype="video"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)",
          width: 'clamp(120px, 40vmin, 600px)',
          backgroundPosition: 'center 50%'
        }}>
      </div>

    </section>
  )
}

export default MouseTrailer
