import { faBuilding, faHorse, faBlenderPhone, faPersonThroughWindow, faPersonRunning, faOtter } from '@fortawesome/free-solid-svg-icons'
import Card from './Card'
Card

const HoverLight = () => {
  return (
    <section className='w-100 bg-dark-gray h-screen'>
      <div id="cards">
        <Card icon={faBuilding} title='Apartments' content='Places to be apart. Wait, what?' />
        <Card icon={faHorse} title='Unicorns' content='A single corn. Er, I mean horn.' />
        <Card icon={faBlenderPhone} title='Blender Phones' content='These absolutely deserve to exist.' />
        <Card icon={faPersonThroughWindow} title='Adios' content='See you...' />
        <Card icon={faPersonRunning} title='I mean hello' content='...over here.' />
        <Card icon={faOtter} title='Otters' content='Look at me, imma cute lil fella.' />
      </div>
    </section>
  )
}

export default HoverLight
