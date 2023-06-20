import {useState} from 'react'
import KippoCardGroup from './KippoCardGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faX } from '@fortawesome/free-solid-svg-icons'




const KippoHoverCard = () => {

  const [currentGroup, setCurrentGroup] = useState<number>(0)
  const [nextGroup, setNextGroup] = useState<number>(1)
  const [previousGroup, setPreviousGroup] = useState<number>(2)
  const [action, setAction] = useState<string>("next")
  const numberOfCardGroups = 3//this would come from the database: an array with each group to show, with its corresponding id and index
  
  const calcNext = (number: number) => {
    const next = number + 1 === numberOfCardGroups ? 0 : number + 1
    return next
  }
  
  const calcPrevious = (number: number) => {
    const previous = number - 1 < 0 ? numberOfCardGroups - 1 : number - 1
    return previous
  } 

  const handleNext = () => {
    setAction("next")
    const next = calcNext(currentGroup)
    setNextGroup(calcNext(next))
    setPreviousGroup(currentGroup)
    setTimeout(() => {
      setCurrentGroup(next)
    })
  }
  
  const handlePrevious = () => {
    setAction("previous")
    const previous = calcPrevious(currentGroup)
    setNextGroup(calcPrevious(previous))
    setPreviousGroup(currentGroup)
    setTimeout(() => {
      setCurrentGroup(previous)
    })
  }
  
  return (
    <section className="w-full h-screen bg-dark-gray grid place-items-center ">
      <div className="cardSwiper">
        <div className="cardGroups aspect-kippoHoverCard w-[30vmin]">
          {Array.from(Array(numberOfCardGroups).keys()).map((idx) => {
            return (
              <KippoCardGroup index={idx} status={`${currentGroup === idx ? "active": (nextGroup === idx && action === "next") ? 'becoming-active-from-before' : (nextGroup === idx && action === "previous") ? 'becoming-active-from-after' : (previousGroup === idx && action === "next") ? 'after' : (previousGroup === idx && action === "previous") ? 'before' : ''}`} key={idx} />
            )
          })}
          
        </div>
        <div className="cardSwipperButtons mt-[8vmin] flex justify-around px-[4vmin] py-0">
          <button id="hateButton" className='rounded-full bg-transparent grid place-items-center cursor-pointer border-[0.4vmin] border-white w-[7vmin] h-[7vmin]' onClick={handlePrevious}>
            <FontAwesomeIcon icon={faX} color='#fff' className='text-[2.5vmin]' /> 
          </button>
          <button id="loveButton" className='rounded-full bg-transparent grid place-items-center cursor-pointer border-[0.4vmin] border-[#2196F3] w-[7vmin] h-[7vmin]' onClick={handleNext}>
            <FontAwesomeIcon icon={faHeart} color='#2196F3' className='text-[2.5vmin]'/> 
          </button>          
        </div>
      </div>
    </section>
  )
}

export default KippoHoverCard
