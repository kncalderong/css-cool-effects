import {useState} from 'react'

const AccentShardHover = () => {
  
  const [isCardHover, setIsCardHover] = useState(false);
  
  return (
    <section className='w-full h-screen bg-black grid place-items-center overflow-hidden font-monserrat '>
      <div className="card w-[calc(100%-2rem)] mt-0 mx-4 p-3 rounded-2xl sm:w-[640px] relative sm:mx-0 sm:p-4 sm:rounded-3xl border-[1px] border-[rgba(255,255,255,0.05)] bg-[rgb(16,16,16)]" onMouseEnter={()=>setIsCardHover(true)} onMouseLeave={()=>setIsCardHover(false)}>
        <div className={`h-[70px] w-[1.5px] absolute -left-[1.5px]  transition-all duration-500 ease-in-out ${isCardHover ? 'opacity-1 top-[25%]' : 'opacity-0 top-[65%]'}`} style={{
          background: 'linear-gradient(transparent,#7b68ee,transparent)'
        }}></div>
        <div className="card-content p-12 flex flex-col justify-center items-center gap-4 sm:p-16 rounded-[1.25rem] overflow-hidden" style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundPosition: '50% 50%',
          backgroundSize: '1.1rem 1.1rem'
        }}>
          <h3 className='uppercase text-[0.76rem] text-[#7b68ee] text-center'>Valuable Info</h3>
          <h1 className='text-[2.2rem] sm:text-[2.6rem] text-[rgb(250,249,246)] text-center' >The worst thing about coding is the dementors</h1>
          <p className='text-[rgba(255,255,255,0.75)] text-center'>I can't stand when I have spent the last 47 minutes adjusting the rgb on my gradient only to have a dementor appear and suck my soul out.</p>
        </div>
      </div>
    </section>
  )
}

export default AccentShardHover
