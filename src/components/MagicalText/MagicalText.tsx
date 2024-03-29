import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const MagicalText = () => {
  const styleStar = {
    height: 'var(--size)',
    left: 'var(--star-left)',
    top: 'var(--star-top)',
    width: 'var(--size)',
  }

  let index = 0
  const interval = 1000

  const randomBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const animateStar = (star: HTMLElement) => {
    star.style.setProperty('--star-left', `${randomBetween(-10, 100)}%`)
    star.style.setProperty('--star-top', `${randomBetween(-40, 80)}%`)

    star.style.animation = 'none'
    star.offsetHeight
    star.style.animation = ''
  }

  useEffect(() => {
    const intervalIds: number[] = []
    for (const star of document.getElementsByClassName('magic-star')) {
      const intervalId = setInterval(() => {
        animateStar(star as HTMLElement)
      }, index++ * (interval / 3))
      intervalIds.push(intervalId)
    }
    return () => {
      intervalIds.forEach((interval) => {
        clearInterval(interval)
      })
    }
  }, [])

  return (
    <section className='flex items-center justify-center h-auto w-100 bg-dark-magic-background sm:h-screen'>
      <h1 className='p-5 text-3xl text-center text-white font-rubik'>
        Sometimes I'll start a line of code and I
        <span className='relative inline-block magic'>
          <span
            className='absolute block text-sm magic-star animate-scaleStar'
            style={styleStar}
          >
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className='block animate-rotateStar opacity-70'
              color='#673AB7'
            />
          </span>
          <span
            className='absolute block text-sm magic-star animate-scaleStar'
            style={styleStar}
          >
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className=''
              color='#673AB7'
            />
          </span>
          <span
            className='absolute block text-sm magic-star animate-scaleStar'
            style={styleStar}
          >
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              className=''
              color='#673AB7'
            />
          </span>
          <span className='magic-text animate-backgroundPan bg-clip-text text-transparent bg-gradient-to-r from-purple-magic from-0% via-pink-magic via-25% to-violet-magic to-100% bg-200% mx-2'>
            don't even know
          </span>
        </span>
        where it's going.
      </h1>
    </section>
  )
}

export default MagicalText
