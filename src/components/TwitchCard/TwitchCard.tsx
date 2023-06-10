import { faHatHard, faHatWizard, faMountainSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TwitchCard = () => {
  return (
    <section className='w-100 bg-dark-magic-background h-auto sm:h-screen flex justify-center items-center' >
      <div className="card">
        <div className="card-content">
          <h3 className="card-title">I know exactly what I'm doing</h3>
          <h4 className="card-subtitle"></h4>
          <FontAwesomeIcon icon={faMountainSun} className='text-[1em] h-[20px]' color='#f0f0f0' />
        </div>
      </div>
    </section>
  )
}

export default TwitchCard
