import { faTwitter, faYoutube, faCodepen } from "@fortawesome/free-brands-svg-icons"
import { faDumpsterFire } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ArticleSlider from "./ArticleSlider"
import data from "./data"

const CarouselPortfolio = () => {
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
        {data.map((item) => {
          return <ArticleSlider textInfo={item.textInfo} bgImage={item.bgImage} title={item.title} key={item.id} />
        })}
      </div>
    </section>
  )
}

export default CarouselPortfolio
