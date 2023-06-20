import { useState, useEffect } from 'react'
import KippoCard from './KippoCard'
import data from './data'

type KippoCardGroupType = {
  index: number,
  status: string
}

type DataType = {
  type: string;
  id: number;
  backgroundImage: string;
  transform: string;
  hover: string;
}[]

const KippoCardGroup = ({ index, status }: KippoCardGroupType) => {

  const [isHover, setIsHover] = useState<boolean>(false)
  const [modifiedData, setModifiedData] = useState<DataType>([])

  useEffect(() => { //to reuse the same data and rotate first card, if this component is used as slider with real different data, then this is not necessary
    if (index === 1) {
      const newData = [...data]
      newData[7] = data[5]
      newData[5] = data[7]
      setModifiedData(newData)
      return
    }
    if (index === 2) {
      const newData = [...data]
      newData[7] = data[3]
      newData[3] = data[7]
      setModifiedData(newData)
      return
    }
    setModifiedData(data)
  }, [index])
  
  const cardGroupStyles = {
    transform: `${status === "unknown" ? 'scale(0)' : (status === "after" || status === 'becoming-active-from-after') ? 'translateX(75%) scale(0)' : (status === "before" || status === "becoming-active-from-before") ? 'translateX(-75%) scale(0)' : ''}`,
    transitionProperty: 'transform',
    transitionDuration: `${(status === "unknown" || status === 'becoming-active-from-after' || status === 'becoming-active-from-before') ? 'none' : '500ms'}`,
    transitionDelay: `${status === "active" ? '300ms' : '0ms'}`,
    transitionTimingFunction: 'cubic-bezier(.88,.02,.26,.96)'
  }

  return (
    <div className={`cardGroup aspect-kippoHoverCard w-[30vmin] absolute`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} style={cardGroupStyles}>
      {modifiedData.map((card) => {
        return <KippoCard backgroundImage={card.backgroundImage} hover={card.hover} isHover={isHover} transform={card.transform} type={card.type} key={card.id} />
      })}
    </div>
  )
}

export default KippoCardGroup
