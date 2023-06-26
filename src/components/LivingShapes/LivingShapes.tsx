import { useEffect, useState } from "react"
import dataShapes from "./dataShapes"

const combinations = [
  { configuration: 1, roundness: 1 },
  { configuration: 1, roundness: 2 },
  { configuration: 1, roundness: 4 },
  { configuration: 2, roundness: 2 },
  { configuration: 2, roundness: 3 },
  { configuration: 3, roundness: 3 }
];

const LivingShapes = () => {

  const [activeCombination, setActiveCombination] = useState(combinations[0])
  const [previous, setPrevious] = useState(0)

  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);



  useEffect(() => {
    const uniqueRand = (min: number, max: number, prev: number) => {
      let next = prev;
      while (prev === next) next = rand(min, max);
      return next;
    }

    const setCombinationInterval = setInterval(() => {
      const index = uniqueRand(0, combinations.length - 1, previous)
      setActiveCombination(combinations[index])
      setPrevious(index)
    }, 2500)

    return () => {
      clearInterval(setCombinationInterval)
    }
  }, [previous])


  return (
    <section className="w-full h-screen bg-dark-gray grid place-items-center overflow-hidden">
      <div className="wrapper w-[90vmin] relative" style={{ aspectRatio: '1.618' }}>
        {dataShapes.map((shape) => {

          const { configuration, roundness } = activeCombination

          const uniqueStyle = {
            borderRadius: roundness === 1 ? '6rem' : roundness === 2 ? '0rem' : roundness === 3 ? '30rem' : `${shape.roundnessSpecial.borderRadius}`,
            zIndex: shape.zIndex,
            backgroundColor: shape.backgroundColor,
            left: configuration === 1 ? shape.configOne.left : configuration === 2 ? shape.configTwo.left : configuration === 3 ? shape.configThree.left : '0',
            top: configuration === 1 ? shape.configOne.top : configuration === 2 ? shape.configTwo.top : configuration === 3 ? shape.configThree.top : '0',
            height: configuration === 1 ? shape.configOne.height : configuration === 2 ? shape.configTwo.height : configuration === 3 ? shape.configThree.height : '30%',
            width: configuration === 1 ? shape.configOne.width : configuration === 2 ? shape.configTwo.width : configuration === 3 ? shape.configThree.width : '30%',
          }

          return <div className={`absolute transition-all duration-700 ease-in-out`} style={uniqueStyle} key={shape.id}></div>
        })}
      </div>
    </section>
  )
}

export default LivingShapes
