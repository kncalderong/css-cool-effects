import React from 'react'

const KippoHoverCard = () => {
  return (
    <section className="w-full h-screen bg-dark-gray grid place-items-center ">
      <div className="cardSwiper">
        <div className="cardGroups">
          <div className="cardGroup">
            <div className="littleCard card"></div>
            <div className="bigCard card"></div>
            <div className="littleCard card"></div>
            <div className="bigCard card"></div>
            <div className="littleCard card"></div>
            <div className="bigCard card"></div>
            <div className="littleCard card"></div>
            <div className="bigCard card"></div>
          </div>        
        </div>
        <div className="cardSwipperButtons">
          <button id="hateButton"></button>
          <button id="loveButton"></button>          
        </div>
      </div>
    </section>
  )
}

export default KippoHoverCard
