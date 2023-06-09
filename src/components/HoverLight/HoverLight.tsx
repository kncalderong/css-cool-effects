import { faBuilding, faHorse, faBlenderPhone, faPersonThroughWindow, faPersonRunning, faOtter } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
import { useEffect, useState } from 'react'


const HoverLight = () => {
  
  const [hoverCards, sethoverCards] = useState<boolean>(false)

  useEffect(() => {
    const cards = document.getElementById("cards")
    if (cards) {
      cards.onmousemove = e => {
        for (const card of document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>) {
          const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
          
          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    }
  }, [])


  return (
    <section className='w-100 bg-dark-gray h-auto sm:h-screen flex justify-center items-center' >
      <div id="cards" className='flex flex-wrap gap-2 max-w-[768px] lg:max-w-[916px] w-[calc(100%-20px)] py-3' onMouseOver={() => { sethoverCards(true) }} onMouseLeave={() => { sethoverCards(false) }}>
        <Card icon={faBuilding} title='Apartments' content='Places to be apart. Wait, what?' hoverCards={hoverCards}  />
        <Card icon={faHorse} title='Unicorns' content='A single corn. Er, I mean horn.' hoverCards={hoverCards}  />
        <Card icon={faBlenderPhone} title='Blender Phones' content='These absolutely deserve to exist.' hoverCards={hoverCards} />
        <Card icon={faPersonThroughWindow} title='Adios' content='See you...' hoverCards={hoverCards}  />
        <Card icon={faPersonRunning} title='I mean hello' content='...over here.' hoverCards={hoverCards} />
        <Card icon={faOtter} title='Otters' content='Look at me, imma cute lil fella.' hoverCards={hoverCards} />
      </div>
    </section>
  )
}

export default HoverLight
