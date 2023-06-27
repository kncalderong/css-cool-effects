import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react'

const RevealMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [isHoverToggle, setIsHoverToggle] = useState(false)
  
  const mainContentStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1666032234128-abc3e45bd1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80")',
    backgroundPosition: 'center 0',
    backgroundSize: 'cover',
    transition: 'transform 500ms cubic-bezier(.13,.53,.38,.97)'
  }
  
  const navLinksContainerStyle = {
    transform: `${isNavOpen ? 'translateY(-100%) scale(1)' : 'translateY(70%) scale(0.9)'}`,
    transition: 'transform 500ms cubic-bezier(.13,.53,.38,.97)'
  }
  
  return (
    <section className="w-full h-screen bg-black relative overflow-hidden">
      <article style={mainContentStyle} className={`w-full h-screen relative z-[2] ${isNavOpen && '-translate-y-1/2'}`}></article>
      <nav className="flex h-[50vh] w-full absoulte left-0 bottom-0 z-[1] overflow-hidden" style={navLinksContainerStyle}>
        <div id="nav-links" className='flex gap-[2vw] mt-[2vw] py-[2vw] px-0'>
          <a className="" href="#">
            <h2 className="text-white text-xl m-0 uppercase font-rubik">Home</h2>
            <img className="max-w-[20vw] rounded-lg mt-3 object-cover" src="https://images.unsplash.com/photo-1666091863721-54331a5db52d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" style={{aspectRatio: '1.8 / 1'}} />
          </a>
          <a className="" href="#">
            <h2 className="text-white text-xl m-0 uppercase font-rubik">Work</h2>
            <img className="max-w-[20vw] rounded-lg mt-3 object-cover" src="https://images.unsplash.com/photo-1666055642230-1595470b98fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=995&q=80" style={{aspectRatio: '1.8 / 1'}} />
          </a>
          <a className="" href="#">
            <h2 className="text-white text-xl m-0 uppercase font-rubik">About</h2>
            <img className="max-w-[20vw] rounded-lg mt-3 object-cover" src="https://images.unsplash.com/photo-1666005487638-61f45819c975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" style={{aspectRatio: '1.8 / 1'}} />
          </a>
          <a className="" href="#">
            <h2 className="text-white text-xl m-0 uppercase font-rubik">Contact</h2>
            <img className="max-w-[20vw] rounded-lg mt-3 object-cover" src="https://images.unsplash.com/photo-1665910407771-bc84ad45676b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" style={{aspectRatio: '1.8 / 1'}} />
          </a>
          <a className="" href="#">
            <h2 className="text-white text-xl m-0 uppercase font-rubik">Join Us</h2>
            <img className="max-w-[20vw] rounded-lg mt-3 object-cover" src="https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" style={{aspectRatio: '1.8 / 1'}} />
          </a>
        </div>
      </nav>

      <button id="nav-toggle" type="button" className={`w-20 h-20 absolute z-[3] left-1/2 bottom-12 -translate-x-1/2 ${isNavOpen ? 'bg-[rgb(85,130,149)]' : 'bg-[rgb(182,142,113)]'} border-none  rounded-full outline-none shadow-lg transition-all duration-300 ease-in hover:scale-[1.04] active:scale-[0.96]` } onMouseEnter={()=>setIsHoverToggle(true)} onMouseLeave={()=>setIsHoverToggle(false)} onClick={()=>setIsNavOpen(!isNavOpen)}>
        <FontAwesomeIcon icon={faBarsStaggered} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.9] text-3xl ${(!isNavOpen && isHoverToggle) ? 'opacity-100 scale-100' : 'opacity-0'} transition-all duration-300 ease-in`} color={'rgb(246, 231, 224)'} />
        <FontAwesomeIcon icon={faXmark} className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.9] text-3xl ${isNavOpen ? 'opacity-100 scale-100' : 'opacity-0'} transition-all duration-300 ease-in`} color={'rgb(246, 231, 224)'} />
      </button>
    </section>
  )
}

export default RevealMenu
