import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MagicalText = () => {
  return (
    <section className='w-100 bg-dark-gray h-auto sm:h-screen flex justify-center items-center'>
      <h1>Sometimes I'll start a line of code and I
        <span className='magic'>
          <span className='magic-star'>
            <FontAwesomeIcon icon={ faStarHalfStroke} className='' />
          </span>
          <span className='magic-star'>
            <FontAwesomeIcon icon={ faStarHalfStroke} className='' />
          </span>
          <span className='magic-star'>
            <FontAwesomeIcon icon={ faStarHalfStroke} className='' />
          </span>
          <span className="magic-text">don't even know</span>
        </span>
        where it's going.</h1>
    </section>
  )
}

export default MagicalText
