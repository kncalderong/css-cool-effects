import { faArrowLeftLong, faArrowRightLong, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type ArticleSliderProps = {
  textInfo: string,
  title: string,
  bgImage: string,
}

const ArticleSlider = ({ textInfo, title, bgImage }: ArticleSliderProps) => {
  
  const bannerStyles = {
    backgroundImage: `url("${bgImage}")`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  }
  return (
    <article className='w-full h-full grid grid-cols-portfolioSliderCol grid-rows-portfolioSliderRow absolute top-0 left-0 transition-transform duration-500 ease-in-out'>
      <div className={`h-full flex`} style={bannerStyles}></div>
      <div className='h-full flex border-l-[1px] border-l-border-portfolio flex-col justify-end p-16'>
        <p className='text-[rgba(255,255,255,0.5)] text-xl'>{textInfo}</p>
      </div>
      <div className='h-full flex border-t-[1px] border-t-border-portfolio items-center justify-between px-8 py-16'>
        <h2 className='text-white basis-1/2 font-monserrat text-[3.5rem] leading-[3rem] m-0 uppercase' >{title}</h2>
        <FontAwesomeIcon icon={faPlus} color='rgba(255, 255, 255, 0.75)' className='text-[4rem]'/>
      </div>
      <div className='h-full flex border-l-[1px] border-l-border-portfolio border-t-[1px] border-t-border-portfolio'>
        <button className='bg-transparent grow border-none outline-none cursor-pointer hover:bg-[rgba(255,255,255,0.02)]'>
          <FontAwesomeIcon icon={faArrowLeftLong} color='rgba(255, 255, 255, 0.75)' className='text-[3rem]'  />
        </button>
        <button className='bg-transparent grow border-none outline-none cursor-pointer hover:bg-[rgba(255,255,255,0.02)] border-l-[1px] border-l-border-portfolio'>
          <FontAwesomeIcon icon={faArrowRightLong} color='rgba(255, 255, 255, 0.75)' className='text-[3rem]' />
        </button>
      </div>
    </article>
  )
}

export default ArticleSlider
