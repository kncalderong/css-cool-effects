import { faTwitter, faYoutube, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ArticleSlider from "./ArticleSlider"
import data from "./data"
import { useEffect, useState } from "react"



const CarouselPortfolio = () => {
  
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const calcNext = (number: number) => {
    const next = number + 1 === data.length ? 0 : number + 1
    return next
  }
  
  const calcPrevious = (number: number) => {
    const previous = number - 1 < 0 ? data.length - 1 : number - 1
    return previous
  } 
  
  const handleCarousel = (action: string) => {
    
    if (action === "next") {
      const nextSlide = calcNext(currentIndex)
      setCurrentIndex(nextSlide)
    }
    if (action === "prev") {
      const previousSlide = calcPrevious(currentIndex)
      setCurrentIndex(previousSlide)
    }
  }
  
  return (
    <section className="bg-[rgb(6,11,25)] w-full h-screen flex flex-col overflow-hidden">
      <nav className="flex w-full border-b-[1px] border-b-border-portfolio">
        <div className="navSection flex justify-start items-center px-12 py-8 border-l-[1px] border-l-border-portfolio w-1/3">
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">
            <FontAwesomeIcon icon={faDumpsterFire} className="text-5xl" />
          </a>
        </div>
        <div className="navSection flex justify-center items-center px-12 py-8 border-l-[1px] border-l-border-portfolio w-1/3 gap-24">
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">About</a>
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">Work</a>
        </div>
        <div className="navSection flex justify-center items-center px-12 py-8 border-l-[1px] border-l-border-portfolio grow gap-12">
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">
          <FontAwesomeIcon icon={faCodepen} /></a>
        </div>
        <div className="navSection flex justify-center items-center px-12 py-8 border-l-[1px] border-l-border-portfolio grow">
          <a href="#" className="text-white hover:text-hover-highlight-portfolio font-rubik uppercase">Get in touch</a>
        </div>
      </nav>
      <div className="grow relative overflow-hidden">
        {data.map((item, itemIdx) => {
          let position = "nextSlide"          
          if (currentIndex === itemIdx) {
            position = "activeSlide"
          }
          if (itemIdx === currentIndex - 1 ||
            (currentIndex === 0 && itemIdx === data.length - 1)
          ) {
            position = "prevSlide"
          }                    
          return <ArticleSlider textInfo={item.textInfo} bgImage={item.bgImage} title={item.title} key={item.id} position={position} handleCarousel={handleCarousel} />
        })}
      </div>
    </section>
  )
}

export default CarouselPortfolio
